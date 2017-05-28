<?php
/**
 * Created by PhpStorm
 

 

 */
use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Skv\Lc\Division;

class LcException extends CBitrixComponent
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
        //$arResult = Division::divided(4,2);

        $arResult = Division::divided(4,0);

        return $arResult;
    }

    public function executeComponent()
    {
        try
        {
            $this -> includeComponentLang('class.php');

            $this -> checkModules();

            $this->arResult = $this->var1();

            $this->includeComponentTemplate();
        }
        catch (\Skv\Lc\DivisionError $e)
        {
            ShowError($e -> getMessage());
            var_dump($e -> getParameters1());
            var_dump($e -> getParameters2());
        }
    }
};