<?php

use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Bitrix\Main\Entity;
use \Skv\Lc\ObjectUserTable;

class LcOrmAddUserObject extends CBitrixComponent 
{

    protected function checkModules()
    {
        if (!Main\Loader::includeModule('skv.lc'))
            throw new Main\LoaderException(Loc::getMessage('SKV_LC_MODULE_NOT_INSTALLED'));
    }


    function addUserObject()
    {

		echo 'component2<pre>';
		print_r($_POST);
		echo '</pre>';
		
		if(isset($_POST['USER_ID']) && isset($_POST['OBJECT_ID'])){			
			$result = ObjectUserTable::add(array(
				'OBJECT_ID' => $_POST['OBJECT_ID'],
				'USER_ID' => $_POST['USER_ID'],
			));
		}
      
        return $result;
    }

    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        $result = $this->addUserObject();

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