<?php

use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Bitrix\Main\Entity;
use \Skv\Lc\CameraTable;


class LcOrmAddCamera extends CBitrixComponent 
{

    protected function checkModules()
    {
        if (!Main\Loader::includeModule('skv.lc'))
            throw new Main\LoaderException(Loc::getMessage('SKV_LC_MODULE_NOT_INSTALLED'));
    }

    function addCamera()
    {	
		echo 'component<pre>';
		print_r($_POST);
		echo '</pre>';		
		
		if(isset($_POST)){
			//$_POST['LINK'] = htmlspecialcharsEx($_POST['LINK']);
			$result = CameraTable::add(array(
				'NAME' => $_POST['NAME'],
				'LINK' => $_POST['LINK'],
				'OBJECT_ID' => $_POST['OBJECT_ID'],
			));								
		}      
        return $result;
    }

    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        $result = $this->addCamera();

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