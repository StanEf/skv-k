<?php
/**
 * Created by PhpStorm
 

 

 */
use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Skv\Lc\BookTable;

class LcOrmAdd extends CBitrixComponent
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

    //Корректное добавление записи
    function var1()
    {
        $result = BookTable::add(array(
            'NAME' => 'Книга для теста',
            'RELEASED' => '2002',
            'ISBN' => '978-0321127456',
            'AUTHOR' => 'Сергей Покоев',
            'TIME_ARRIVAL' => new Type\DateTime('04.09.2015 00:00:00'),
            'DESCRIPTION' => 'тестовый текст
            вторая строчка'
        ));

        return $result;
    }

    //Добавление записи без обязательного поля "Название".
    function var2()
    {
        $result = BookTable::add(array(
            'RELEASED' => '2002',
            'ISBN' => '978-0321127443',
            'AUTHOR' => 'Сергей Покоев',
            'TIME_ARRIVAL' => new Type\DateTime('04.09.2015 00:00:00'),
            'DESCRIPTION' => 'тестовый текст
            вторая строчка'
        ));

        return $result;
    }

    //Добавление записи без указания поля, для которого установлено значение по умолчанию
    function var3()
    {
		
		echo 'component<pre>';
print_r($_POST);
echo '</pre>';
		
		
		if(isset($_POST)){
			$result = BookTable::add(array(
				'NAME' => $_POST['NAME'],
				'RELEASED' => $_POST['RELEASED'],
				'ISBN' => $_POST['ISBN'],
				'AUTHOR' => $_POST['AUTHOR'],
				'DESCRIPTION' => $_POST['DESCRIPTION']
			));
		}
		
      
        return $result;
    }

    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        //все верно
        //$result = $this->var1();

        //Не указал обязательное поле: название
        //$result = $this->var2();

        //Добавление используя поле по умолчанию.
        $result = $this->var3();

        if ($result->isSuccess())
        {
            $id = $result->getId();
            $this->arResult='Запись добавлена с id: '.$id;
        }
        else
        {
            $error=$result->getErrorMessages();
            $this->arResult='Произошла ошибка при добавлении4: <pre>'.var_export($error,true).'</pre>';
        }

        $this->includeComponentTemplate();
    }
};