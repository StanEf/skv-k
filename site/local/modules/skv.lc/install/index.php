<?


use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Config as Conf;
use \Bitrix\Main\Config\Option;
use \Bitrix\Main\Loader;
use \Bitrix\Main\Entity\Base;
use \Bitrix\Main\Application;

Loc::loadMessages(__FILE__);
Class SKV_LC extends CModule
{
    var $exclusionAdminFiles;

	function __construct()
	{
		$arModuleVersion = array();
		include(__DIR__."/version.php");

        $this->exclusionAdminFiles=array(
            '..',
            '.',
            'menu.php',
            'operation_description.php',
            'task_description.php'
        );

        $this->MODULE_ID = 'skv.lc';
		$this->MODULE_VERSION = $arModuleVersion["VERSION"];
		$this->MODULE_VERSION_DATE = $arModuleVersion["VERSION_DATE"];
		$this->MODULE_NAME = Loc::getMessage("SKV_LC_MODULE_NAME");
		$this->MODULE_DESCRIPTION = Loc::getMessage("SKV_LC_MODULE_DESC");

		$this->PARTNER_NAME = Loc::getMessage("SKV_LC_PARTNER_NAME");
		$this->PARTNER_URI = Loc::getMessage("SKV_LC_PARTNER_URI");

        $this->MODULE_SORT = 1;
        $this->SHOW_SUPER_ADMIN_GROUP_RIGHTS='Y';
        $this->MODULE_GROUP_RIGHTS = "Y";
	}

    //Определяем место размещения модуля
    public function GetPath($notDocumentRoot=false)
    {
        if($notDocumentRoot)
            return str_ireplace(Application::getDocumentRoot(),'',dirname(__DIR__));
        else
            return dirname(__DIR__);
    }

    //Проверяем что система поддерживает Lc
    public function isVersionD7()
    {
        return CheckVersion(\Bitrix\Main\ModuleManager::getVersion('main'), '14.00.00');
    }

    function InstallDB()
    {
        Loader::includeModule($this->MODULE_ID);

        if(!Application::getConnection(\Skv\Lc\BookTable::getConnectionName())->isTableExists(
            Base::getInstance('\Skv\Lc\BookTable')->getDBTableName()
            )
        )
        {
            Base::getInstance('\Skv\Lc\BookTable')->createDbTable();
        }

        //С урока 23
        if(!Application::getConnection(\Skv\Lc\Book2Table::getConnectionName())->isTableExists(
            Base::getInstance('\Skv\Lc\Book2Table')->getDBTableName()
            )
        )
        {
            Base::getInstance('\Skv\Lc\Book2Table')->createDbTable();
        }

        if(!Application::getConnection(\Skv\Lc\BookAuthorsUsTable::getConnectionName())->isTableExists(
            Base::getInstance('\Skv\Lc\BookAuthorsUsTable')->getDBTableName()
            )
        )
        {
            Base::getInstance('\Skv\Lc\BookAuthorsUsTable')->createDbTable();
        }

        if(!Application::getConnection(\Skv\Lc\AuthorTable::getConnectionName())->isTableExists(
            Base::getInstance('\Skv\Lc\AuthorTable')->getDBTableName()
            )
        )
        {
            Base::getInstance('\Skv\Lc\AuthorTable')->createDbTable();
        }
		
		if(!Application::getConnection(\Skv\Lc\ObjectTable::getConnectionName())->isTableExists(
            Base::getInstance('\Skv\Lc\ObjectTable')->getDBTableName()
            )
        )
        {
            Base::getInstance('\Skv\Lc\ObjectTable')->createDbTable();
        }
		
		if(!Application::getConnection(\Skv\Lc\UserTable::getConnectionName())->isTableExists(
            Base::getInstance('\Skv\Lc\UserTable')->getDBTableName()
            )
        )
        {
            Base::getInstance('\Skv\Lc\UserTable')->createDbTable();
        }
		
		if(!Application::getConnection(\Skv\Lc\ObjectUserTable::getConnectionName())->isTableExists(
            Base::getInstance('\Skv\Lc\ObjectUserTable')->getDBTableName()
            )
        )
        {
            Base::getInstance('\Skv\Lc\ObjectUserTable')->createDbTable();
        }
		
		if(!Application::getConnection(\Skv\Lc\CameraTable::getConnectionName())->isTableExists(
            Base::getInstance('\Skv\Lc\CameraTable')->getDBTableName()
            )
        )
        {
            Base::getInstance('\Skv\Lc\CameraTable')->createDbTable();
        }
    }

    function UnInstallDB()
    {
        Loader::includeModule($this->MODULE_ID);

        Application::getConnection(\Skv\Lc\BookTable::getConnectionName())->
            queryExecute('drop table if exists '.Base::getInstance('\Skv\Lc\BookTable')->getDBTableName());

        //С урока 23
        Application::getConnection(\Skv\Lc\Book2Table::getConnectionName())->
            queryExecute('drop table if exists '.Base::getInstance('\Skv\Lc\Book2Table')->getDBTableName());

        Application::getConnection(\Skv\Lc\BookAuthorsUsTable::getConnectionName())->
            queryExecute('drop table if exists '.Base::getInstance('\Skv\Lc\BookAuthorsUsTable')->getDBTableName());

        Application::getConnection(\Skv\Lc\AuthorTable::getConnectionName())->
            queryExecute('drop table if exists '.Base::getInstance('\Skv\Lc\AuthorTable')->getDBTableName());

        Option::delete($this->MODULE_ID);
    }

	function InstallEvents()
	{
        \Bitrix\Main\EventManager::getInstance()->registerEventHandler($this->MODULE_ID, 'TestEventD7', $this->MODULE_ID, '\Skv\Lc\Event', 'eventHandler');
	}

	function UnInstallEvents()
	{
        \Bitrix\Main\EventManager::getInstance()->unRegisterEventHandler($this->MODULE_ID, 'TestEventD7', $this->MODULE_ID, '\Skv\Lc\Event', 'eventHandler');
	}

	function InstallFiles($arParams = array())
	{
        $path=$this->GetPath()."/install/components";

        if(\Bitrix\Main\IO\Directory::isDirectoryExists($path))
            CopyDirFiles($path, $_SERVER["DOCUMENT_ROOT"]."/bitrix/components", true, true);
        else
            throw new \Bitrix\Main\IO\InvalidPathException($path);

        if (\Bitrix\Main\IO\Directory::isDirectoryExists($path = $this->GetPath() . '/admin'))
        {
            CopyDirFiles($this->GetPath() . "/install/admin/", $_SERVER["DOCUMENT_ROOT"] . "/bitrix/admin"); //если есть файлы для копирования
            if ($dir = opendir($path))
            {
                while (false !== $item = readdir($dir))
                {
                    if (in_array($item,$this->exclusionAdminFiles))
                        continue;
                    file_put_contents($_SERVER['DOCUMENT_ROOT'].'/bitrix/admin/'.$this->MODULE_ID.'_'.$item,
                        '<'.'? require($_SERVER["DOCUMENT_ROOT"]."'.$this->GetPath(true).'/admin/'.$item.'");?'.'>');
                }
                closedir($dir);
            }
        }

        return true;
	}

	function UnInstallFiles()
	{
        \Bitrix\Main\IO\Directory::deleteDirectory($_SERVER["DOCUMENT_ROOT"] . '/bitrix/components/skv/');

        if (\Bitrix\Main\IO\Directory::isDirectoryExists($path = $this->GetPath() . '/admin')) {
            DeleteDirFiles($_SERVER["DOCUMENT_ROOT"] . $this->GetPath() . '/install/admin/', $_SERVER["DOCUMENT_ROOT"] . '/bitrix/admin');
            if ($dir = opendir($path)) {
                while (false !== $item = readdir($dir)) {
                    if (in_array($item, $this->exclusionAdminFiles))
                        continue;
                    \Bitrix\Main\IO\File::deleteFile($_SERVER['DOCUMENT_ROOT'] . '/bitrix/admin/' . $this->MODULE_ID . '_' . $item);
                }
                closedir($dir);
            }
        }
		return true;
	}

	function DoInstall()
	{
		global $APPLICATION;
        if($this->isVersionD7())
        {
            \Bitrix\Main\ModuleManager::registerModule($this->MODULE_ID);

            $this->InstallDB();
            $this->InstallEvents();
            $this->InstallFiles();

            #работа с .settings.php
            $configuration = Conf\Configuration::getInstance();
            $skv_module_lc=$configuration->get('skv_module_lc');
            $skv_module_lc['install']=$skv_module_lc['install']+1;
            $configuration->add('skv_module_lc', $skv_module_lc);
            $configuration->saveConfiguration();
            #работа с .settings.php
        }
        else
        {
            $APPLICATION->ThrowException(Loc::getMessage("SKV_LC_INSTALL_ERROR_VERSION"));
        }

        $APPLICATION->IncludeAdminFile(Loc::getMessage("SKV_LC_INSTALL_TITLE"), $this->GetPath()."/install/step.php");
	}

	function DoUninstall()
	{
        global $APPLICATION;

        $context = Application::getInstance()->getContext();
        $request = $context->getRequest();

        if($request["step"]<2)
        {
            $APPLICATION->IncludeAdminFile(Loc::getMessage("SKV_LC_UNINSTALL_TITLE"), $this->GetPath()."/install/unstep1.php");
        }
        elseif($request["step"]==2)
        {
            $this->UnInstallFiles();
			$this->UnInstallEvents();

            if($request["savedata"] != "Y")
                $this->UnInstallDB();

            \Bitrix\Main\ModuleManager::unRegisterModule($this->MODULE_ID);

            #работа с .settings.php
            $configuration = Conf\Configuration::getInstance();
            $skv_module_lc=$configuration->get('skv_module_lc');
            $skv_module_lc['uninstall']=$skv_module_lc['uninstall']+1;
            $configuration->add('skv_module_lc', $skv_module_lc);
            $configuration->saveConfiguration();
            #работа с .settings.php

            $APPLICATION->IncludeAdminFile(Loc::getMessage("SKV_LC_UNINSTALL_TITLE"), $this->GetPath()."/install/unstep2.php");
        }
	}

    function GetModuleRightList()
    {
        return array(
            "reference_id" => array("D","K","S","W"),
            "reference" => array(
                "[D] ".Loc::getMessage("SKV_LC_DENIED"),
                "[K] ".Loc::getMessage("SKV_LC_READ_COMPONENT"),
                "[S] ".Loc::getMessage("SKV_LC_WRITE_SETTINGS"),
                "[W] ".Loc::getMessage("SKV_LC_FULL"))
        );
    }
}
?>