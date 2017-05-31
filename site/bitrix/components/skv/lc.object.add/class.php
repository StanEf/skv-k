<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Skv\Lc\ObjectTable;


class LcOrmObjectAdd extends CBitrixComponent
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
		$request = $context->getRequest()->getPostList();
		if ($request["add_object"] == Loc::getMessage("SKV_LC_OBJECT_ADD_BUTTON_ADD")) {
			$this->addObject($request);
		};
	}

	function addObject($request)
	{

		$object = array();
		$res = ObjectTable::getEntity()->getFields();
		$auto = ObjectTable::getAutocomplete();
		//$date = ObjectTable::getDate();
		foreach ($res as $item) {
			$itName = $item->getName();
			if (!$auto[$itName]) {
				$object[$itName] = $request[$itName];
			};
		};
		echo '<pre>';
		print_r($object);
		echo '</pre>';
		$result = ObjectTable::add($object);
		if ($result->isSuccess()) {
			$id = $result->getId();
			$this->arResult["RESULT_MESSAGE"][] = Loc::getMessage("SKV_LC_OBJECT_ADD_MESSAGE") . $id;
		} else {
			$error = $result->getErrorMessages();
			$this->arResult["RESULT_MESSAGE"][] = Loc::getMessage("SKV_LC_OBJECT_ADD_ERROR_MESSAGE") . '<pre>' . var_export($error, true) . '</pre>';
		}
	}

	function constructTable()
	{
		$this->arResult["ADD_BUTTON"] = Loc::getMessage("SKV_LC_OBJECT_ADD_BUTTON_ADD");
		$this->arResult["CLEAN_BUTTON"] = Loc::getMessage("SKV_LC_OBJECT_ADD_BUTTON_CLEAN");
		$this->arResult["BACK_BUTTON"] = Loc::getMessage("SKV_LC_OBJECT_ADD_BUTTON_BACK");
		$res = ObjectTable::getEntity()->getFields();
		$req = ObjectTable::getRequired();
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
						$itType = "text";
						break;
				}
				$itN = Loc::getMessage("SKV_LC_OBJECT_ADD_FORM_" . $itName);
				if($item->getName() != "ID") {
					$this->arResult["TABLE"][$item->getName()] = array(
						"NAME" => $itName,
						"TITLE" => $itN,
						"TYPE" => $itType,
						"REQ" => $req[$itName]
					);
				}
			}
		}
	}

	public
	function executeComponent()
	{
		$this->includeComponentLang('class.php');
		$this->checkModules();
		$this->checkActions();
		$this->constructTable();
		$this->includeComponentTemplate();
	}
}

?>