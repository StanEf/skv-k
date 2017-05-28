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
	}
	
    function showCameraData()
    {	
		
		if(isset($_GET["ID"])){
			$result = CameraTable::GetList(array(
				'filter' => array("=ID" => $_GET["ID"]),
			));
			while ($row = $result->fetch())
			{
				$this->arResult = $row;
			}
			echo '$this->arResult<pre>';
			print_r($this->arResult);
			echo '</pre>';
		}      
        //return $result;
    }

	function modifyCameraData(){
		$fields = CameraTable::getEntity()->getFields();

		foreach ($fields as $field) {
			$fieldName = $field->getName();
			if($fieldName != "ID" && $fieldName != "OBJECT"){
				$arToUpdate[$fieldName] = $_POST[$fieldName];
			}

		}
		/*echo '$arToUpdate<pre>';
		print_r($arToUpdate);
		echo '</pre>';*/
		$this->arResult = $arToUpdate;
		$result = CameraTable::update($_GET["ID"], $arToUpdate);
		return $result;
	}

    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

		if(isset($_POST["ACTION"]) && $_POST["ACTION"] == "EDIT"){
			/*echo '$_POST<pre>';
			print_r($_POST);
			echo '</pre>';*/
			$result = $this->modifyCameraData();
			 if ($result->isSuccess())
			{
				$id = $result->getId();
				$this->arResult["REQUEST"]='Камера с ID '.$id.' изменена';
			}
			else
			{
				$error=$result->getErrorMessages();
				$this->arResult["REQUEST"]='Произошла ошибка при добавлении: <pre>'.var_export($error,true).'</pre>';
			}
		}else {
			$this->showCameraData();
			$this->showObjectsData();
		}
        //$result = $this->addCamera();

        $this->includeComponentTemplate();
    }
};