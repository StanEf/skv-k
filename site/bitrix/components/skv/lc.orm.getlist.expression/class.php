<?php
/**
 * Created by PhpStorm
 

 

 */
use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Skv\Lc\BookTable;

class LcOrmGetlistExpression extends CBitrixComponent
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
        $result = BookTable::getList(array(
            'select' => array('CNT'),
            'runtime' => array(
                new Main\Entity\ExpressionField('CNT', 'COUNT(*)')
            ),
        ));

        return $result->fetch();
    }

    function var2()
    {
        $result = BookTable::getList(array(
            'select' => array(
                new Main\Entity\ExpressionField('CNT', 'COUNT(*)')
            ),
        ));

        return $result->fetch();
    }

    function var3()
    {
        $result = BookTable::getList(array(
            'select' => array(
                'ID','NAME', 'ACTIVITY'
            ),
            'filter'  => array('ACTIVITY' => 1),
            'runtime' => array(
                new Main\Entity\IntegerField('ACTIVITY'),
            )
        ));

        return $result->fetchAll();
    }

    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        //$this -> arResult = $this->var1();

        //$this -> arResult = $this->var2();

        $this -> arResult = $this->var3();

        $this->includeComponentTemplate();
    }
};