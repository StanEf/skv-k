<?php
/**
 * Created by PhpStorm
 

 

 */
use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Skv\Lc\ObjectTable;

class LcOrmGetlistobject extends CBitrixComponent 
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
        $result = ObjectTable::getList(array(
            'select'  => array('*'), // имена полей, которые необходимо получить в результате
            //'group'   => array(), // явное указание полей, по которым нужно группировать результат
            'order'   => array('ID'=>'DESC'), // параметры сортировки
        ));

        return $result;
    }


    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        $result = $this->var1();

        //Вариант 1 получения данных
        /*while ($row = $result->fetch())
        {
            $this -> arResult[] = $row;
        }*/

        //Вариант 2 получения данных
        $this -> arResult = $result->fetchAll();

        $this->includeComponentTemplate();
    }
};