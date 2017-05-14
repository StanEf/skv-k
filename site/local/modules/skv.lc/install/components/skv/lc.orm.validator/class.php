<?php
/**
 * Created by PhpStorm
 

 

 */
use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Skv\Lc\BookTable;

class LcOrmValidator extends CBitrixComponent
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
        $result = BookTable::add(array(
            'NAME' => 'Книга для теста',
            'RELEASED' => '2002',
            'ISBN' => '00000000001',
            'AUTHOR' => 'Сергей Покоев',
            'TIME_ARRIVAL' => new Type\DateTime('04.09.2015 00:00:00'),
            'DESCRIPTION' => 'тестовый текст
            вторая строчка'
        ));

        return $result;
    }

    function var2()
    {
        $result = BookTable::add(array(
            'NAME' => 'Книга для теста',
            'RELEASED' => '2002',
            'ISBN' => '0000-000D 002',
            'AUTHOR' => 'Сергей Покоев',
            'TIME_ARRIVAL' => new Type\DateTime('04.09.2015 00:00:00'),
            'DESCRIPTION' => 'тестовый текст
            вторая строчка'
        ));

        return $result;
    }

    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        //Первая часть.
        //$result = $this->var1();

        //Вторая часть
        $result = $this->var2();

        if ($result->isSuccess())
        {
            $id = $result->getId();
            $this->arResult='Запись добавлена с id: '.$id;
        }
        else
        {
            $error=$result->getErrorMessages();
            $this->arResult='Произошла ошибка при добавлении: <pre>'.var_export($error,true).'</pre>';
        }

        $this->includeComponentTemplate();
    }
};