<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Skv\Lc\ObjectTable;
use \Skv\Lc\ObjectUserTable;

class LcOrmObjectEdit extends CBitrixComponent
{
	protected function checkModules()
	{
		if (!Main\Loader::includeModule('skv.lc'))
			throw new Main\LoaderException(Loc::getMessage('SKV_LC_MODULE_NOT_INSTALLED'));
	}

	function checkActions()
	{
		$application = \Bitrix\Main\Application::getInstance();
		$context = $application->getContext();
		$request = $context->getRequest();
/*		echo '<pre>';
		print_r($request);
		echo '</pre>' . Loc::getMessage("SKV_LC_OBJECT_EDIT_BUTTON_EDIT");*/
		if ($request["edit_object"] == Loc::getMessage("SKV_LC_OBJECT_EDIT_BUTTON_EDIT")) {
			$this->updateLicense($request);
		};
	}

	function updateLicense($request)
	{
		$object = array();
		$res = ObjectTable::getEntity()->getFields();
	/*	echo '$res <pre>';
		print_r($res);
		echo '</pre>';*/

		$auto = ObjectTable::getAutocomplete();
	/*	$date = ObjectTable::getDate();*/

		foreach ($res as $item) {
			$itName = $item->getName();
			//echo "$itName";
			if (!$auto[$itName]) {
				$object[$itName] = $request[$itName];
			};
		};
/*		echo '$object <pre>';
   		 print_r($object);
    	echo '</pre>';*/
		$result = ObjectTable::update($request["ID"], $object);
		if ($result->isSuccess()) {
			$id = $result->getId();
			$this->arResult["RESULT_MESSAGE"][] = Loc::getMessage("SKV_LC_OBJECT_EDIT_MESSAGE") . $id;
		} else {
			$error = $result->getErrorMessages();
			$this->arResult["RESULT_MESSAGE"][] = Loc::getMessage("SKV_LC_OBJECT_EDIT_ERROR_MESSAGE") . '<pre>' . var_export($error, true) . '</pre>';
		}
	}

	function constructTable($id)
	{
		$this->arResult["EDIT_BUTTON"] = Loc::getMessage("SKV_LC_OBJECT_EDIT_BUTTON_EDIT");
		$this->arResult["CLEAN_BUTTON"] = Loc::getMessage("SKV_LC_OBJECT_EDIT_BUTTON_CLEAN");
		$this->arResult["BACK_BUTTON"] = Loc::getMessage("SKV_LC_OBJECT_EDIT_BUTTON_BACK");
		$this->arResult["ID"] = $id;
		$lic = ObjectTable::getRowById($id);
		$res = ObjectTable::getEntity()->getFields();


		$req = ObjectTable::getRequired();
		/*echo '<pre>';
		print_r($req);
		echo '</pre>';*/
		$auto = ObjectTable::getAutocomplete();


		foreach ($res as $item) {
			$itName = $item->getName();
			if (!$auto[$itName]) {
				switch ($item->getDataType()) {
					case "string":
						$itType = "text";
						break;
					case "text":
						$itType = "textarea";
						break;
					case "date":
						$itType = "text";
						break;
					case "list":
						$itType = "list";
						break;
					case "boolean":
						$itType = "checkbox";
						break;
					default:
						$itType = "string";
						break;
				}
				echo "SKV_LC_OBJECT_EDIT_FORM_" . $itName . '<br>';
				$itN = Loc::getMessage("SKV_LC_OBJECT_EDIT_FORM_" . $itName);
				$this->arResult["TABLE"][$item->getName()] = array(
					"NAME" => $itName,
					"TYPE" => $itType,
					"TITLE" => $itN,
					"VALUE" => $lic[$itName],
					"REQ" => $req[$itName]
				);
			}
		}
	}

	public function executeComponent()
	{
		$this->includeComponentLang('class.php');
		$this->checkModules();
		$application = \Bitrix\Main\Application::getInstance();
		$context = $application->getContext();
		$request = $context->getRequest();
		$this->checkActions();
		$this->constructTable($request["ID"]);
		$this->includeComponentTemplate();
	}
}

?>