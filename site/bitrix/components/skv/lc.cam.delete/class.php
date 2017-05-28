<?php

use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Skv\Lc\CameraTable;

class LcCamDelete extends CBitrixComponent
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

    function var1()
    {
        //Удаление записи (нужно указать верный id)
        $result = CameraTable::delete($_GET["ID"]);

        return $result;
    }


    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        $result = $this->var1();

        if ($result->isSuccess())
        {
            $this->arResult='Камера была удалена';
        }
        else
        {
            $error=$result->getErrorMessages();
            $this->arResult='Произошла ошибка при удалении: <pre>'.var_export($error,true).'</pre>';
        }

        $this->includeComponentTemplate();
    }
};