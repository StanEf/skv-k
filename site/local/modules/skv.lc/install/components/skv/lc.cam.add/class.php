<?php

use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Bitrix\Main\Entity;
use \Skv\Lc\CameraTable;
use \Skv\Lc\ObjectTable;


class LcOrmAddCam extends CBitrixComponent
{

    protected function checkModules()
    {
        if (!Main\Loader::includeModule('skv.lc'))
            throw new Main\LoaderException(Loc::getMessage('SKV_LC_MODULE_NOT_INSTALLED'));
    }

    function showObjectsData()
    {
        $result = ObjectTable::GetList(array(
            'select' => array("ID", "NAME"),
        ));
        while ($row = $result->fetch())
        {
            $this->arResult["OBJECTS"][$row["ID"]] = $row["NAME"];
        }
/*        echo '<pre>';
        print_r($this->arResult["OBJECTS"]);
        echo '</pre>';*/
    }
    
    function addCamera()
    {	
		
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
        $this -> showObjectsData();
        
        $result = $this->addCamera();

        if ($result->isSuccess())
        {
            $id = $result->getId();
            $this->arResult["REQUEST"]='Запись добавлена с id: '.$id;
        }
        else
        {
            $error=$result->getErrorMessages();
            $this->arResult["REQUEST"] = 'Произошла ошибка при добавлении: <pre>'.var_export($error,true).'</pre>';
        }

        $this->includeComponentTemplate();
    }
};