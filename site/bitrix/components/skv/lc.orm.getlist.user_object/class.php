<?php

use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Skv\Lc\ObjectTable;
use \Skv\Lc\ObjectUserTable;
class LcOrmGetlistUserObject extends CBitrixComponent 
{

    /**
     * проверяет подключение необходиимых модулей
     * @throws LoaderException
     */
    protected function checkModules()
    {
        if (!Main\Loader::includeModule('skv.lc'))
            throw new Main\LoaderException(Loc::getMessage('SKV_LC_MODULE_NOT_INSTALLED'));
    }

    function show()
    {
		$result['ObjectUserTable'] = ObjectUserTable::getList(array(
            'select'  => array('*'),
        ));
        return $result;
    }


    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        $result = $this->show();

		$this->arResult['ObjectUserTable'] = $result['ObjectUserTable']->fetchAll();

        $this->includeComponentTemplate();
    }
};