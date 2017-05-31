<?php
/**
 * Created by PhpStorm
 

 

 */
use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Skv\Lc\BookTable;

class LcOrmQuery extends CBitrixComponent
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
        $q = new Main\Entity\Query(BookTable::getEntity());

        $q->setSelect(array('ID','NAME_BOOK' =>'NAME','AGE_YEAR','WRITE_COUNT')); // имена полей, которые необходимо получить в результате

        $q->setFilter(array('WRITE_COUNT' => 0)); // описание фильтра для WHERE и HAVING

        $q->setOrder(array('ID'=>'DESC')); // параметры сортировки

        $q->setLimit(3); // количество записей

        $q->setOffset(2); // смещение для limit

        $result = $q->exec();

        return $result->fetchAll();
    }


    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        $this -> arResult = $this->var1();

        $this->includeComponentTemplate();
    }
};