<?php
/**
 * Created by PhpStorm
 

 

 */
use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Skv\Lc\BookTable;

class LcOrmEvent2 extends CBitrixComponent
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
        $result = BookTable::update(11, array(
            'NAME' => 'Книга для теста измененная',
        ));

        return $result;
    }

    function var2()
    {
        $result = BookTable::update(11, array(
            'ISBN' => '52222222',
        ));

        return $result;
    }


    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        //Обновляем название
        //$result = $this->var1();

        //Обновляем ISBN
        $result = $this->var2();

        if ($result->isSuccess())
        {
            $id = $result->getId();
            $this->arResult='Запись изменена с id: '.$id;
        }
        else
        {
            $error=$result->getErrorMessages();
            $this->arResult='Произошла ошибка при изменении: <pre>'.var_export($error,true).'</pre>';
        }

        $this->includeComponentTemplate();
    }
};