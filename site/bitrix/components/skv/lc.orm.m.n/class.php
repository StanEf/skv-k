<?php
/**
 * Created by PhpStorm
 

 

 */
use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Skv\Lc\Book2Table;

class LcOrmMN extends CBitrixComponent
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
        $result = Book2Table::getList(array(
            'select'  => array(
                'NAME',
                //'AUTHOR_NAME' => '\Skv\Lc\BookAuthorsUsTable:BOOK.AUTHOR.NAME',
                //'AUTHOR_LAST_NAME' => '\Skv\Lc\BookAuthorsUsTable:BOOK.AUTHOR.LAST_NAME',
                '\Skv\Lc\BookAuthorsUsTable:BOOK.AUTHOR.NAME',
                '\Skv\Lc\BookAuthorsUsTable:BOOK.AUTHOR.LAST_NAME',
            ),
            "data_doubling"=>false
        ));

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