<?php

use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Skv\Lc\ObjectTable;

class LcOrmAddobject extends CBitrixComponent 
{

    protected function checkModules()
    {
        if (!Main\Loader::includeModule('skv.lc'))
            throw new Main\LoaderException(Loc::getMessage('SKV_LC_MODULE_NOT_INSTALLED'));
    }


    function var3()
    {
		
		echo 'component<pre>';
		print_r($_POST);
		echo '</pre>';
		
		
		if(isset($_POST)){
			$result = ObjectTable::add(array(
				'NAME' => $_POST['NAME'],
				'COORD_LAT' => $_POST['RELEASED'],
				'COORD_LON' => $_POST['ISBN'],
			));
		}
		
      
        return $result;
    }

    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

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