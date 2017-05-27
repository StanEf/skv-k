<?php
/**
 * Created by PhpStorm
 

 

 */
use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Skv\Lc\ObjectTable;
use \Skv\Lc\ObjectUserTable;

class LcObjectDelete extends CBitrixComponent
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

    function deleteFromObjectTable()
    {
        //Удаление записи (нужно указать верный id)
        $object_id = $_GET["ID"];

        $result = ObjectTable::delete($object_id);

        return $result;
    }

    function deleteFromObjectUserTable()
    {
        //Удаление записи (нужно указать верный id)
        $object_id = $_GET["ID"];
        $ObjectList = ObjectUserTable::GetList(
            array(
                "select" => array('ID'),
                "filter" => array("OBJECT_ID" => $object_id),
            )
        );
        while ($bond = $ObjectList->fetch()) {
            ObjectUserTable::delete($bond["ID"]);
        }
    }

    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        $result = $this->deleteFromObjectTable();

        $this->deleteFromObjectUserTable();

        if ($result->isSuccess())
        {
            $this->arResult='Объект был удален';
        }
        else
        {
            $error=$result->getErrorMessages();
            $this->arResult='Произошла ошибка при удалении: <pre>'.var_export($error,true).'</pre>';
        }

        $this->includeComponentTemplate();
    }
};