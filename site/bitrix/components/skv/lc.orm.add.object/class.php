<?php

use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Bitrix\Main\Entity;
use \Skv\Lc\ObjectTable;
use \Skv\Lc\ObjectUserTable;

class LcOrmAddObject extends CBitrixComponent 
{

    protected function checkModules()
    {
        if (!Main\Loader::includeModule('skv.lc'))
            throw new Main\LoaderException(Loc::getMessage('SKV_LC_MODULE_NOT_INSTALLED'));
    }


    function addObject()
    {
		
		echo 'component<pre>';
		print_r($_POST);
		echo '</pre>';
		
		
		if(isset($_POST)){
			$check = ObjectTable::getList(array(
						'filter' => array(
							'=NAME' => $_POST['NAME'],
						)
					));
			if(!empty($check)){
				$this->arResult='Объект с таким именем уже существует';
				$result = ObjectTable::add(array(
					'NAME' => $_POST['NAME'],
					'COORD_LAT' => $_POST['LATITYDE'],
					'COORD_LON' => $_POST['LONGITUDE'],
				));			
				$current_id = $result->getId();
			}	
		}
		
		if(isset($_POST['USER_ID']) && isset($current_id)){			
			ObjectUserTable::add(array(
				'OBJECT_ID' => $current_id,
				'USER_ID' => $_POST['USER_ID'],
			));
		}
      
        return $result;
    }

    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        $result = $this->addObject();

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