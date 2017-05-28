<?php
/**
 * Created by PhpStorm
 

 

 */
use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;

class LcRight extends CBitrixComponent
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
        $arResult='У вас есть доступ к компоненту и здесь может быть ваш исполняемый код';

        return $arResult;
    }

    public function executeComponent()
    {
        global $APPLICATION;

        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        if($APPLICATION->GetGroupRight("skv.lc")<"K")
        {
            ShowError(Loc::getMessage("ACCESS_DENIED"));
        }
        else
        {
            $this->arResult = $this->var1();

            $this->includeComponentTemplate();
        }
    }
};