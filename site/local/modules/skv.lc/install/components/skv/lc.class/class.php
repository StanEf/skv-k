<?php
/**
 * Created by PhpStorm
 

 

 */
use \Bitrix\Main\Loader;
use \Bitrix\Main\Localization\Loc;

class LcClass extends CBitrixComponent
{
    var $test;

    protected function checkModules()
    {
        if (!Loader::includeModule('skv.lc'))
        {
            ShowError(Loc::getMessage('SKV_LC_MODULE_NOT_INSTALLED'));
            return false;
        }

        return true;
    }

    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        if($this -> checkModules())
        {
            /*Ваш код*/

            $this->includeComponentTemplate();
        }
    }
};