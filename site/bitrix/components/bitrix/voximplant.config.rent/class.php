<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

use Bitrix\Main\Loader;

class CVoxImplantComponentConfigRent extends \CBitrixComponent
{
	protected $showTemplate = true;

	protected function init()
	{
		$request = Bitrix\Main\Context::getCurrent()->getRequest();

		if (isset($request['AJAX_CALL']) && $request['AJAX_CALL'] == 'Y')
		{
			$this->showTemplate = false;
			return;
		}

		if(isset($this->arParams['TEMPLATE_HIDE']) && $this->arParams['TEMPLATE_HIDE'] === 'Y')
			$this->showTemplate = false;
	}

	protected function prepareData()
	{
		$this->arResult['LIST_RENT_NUMBERS'] = array();
		$res = Bitrix\Voximplant\ConfigTable::getList(array(
			'filter' => Array('=PORTAL_MODE' => CVoxImplantConfig::MODE_RENT)
		));
		while ($row = $res->fetch())
		{
			$this->arResult['LIST_RENT_NUMBERS'][$row['ID']] = array(
				'PHONE_NAME' => htmlspecialcharsbx($row['PHONE_NAME']),
				'PHONE_VERIFIED' => $row['PHONE_VERIFIED'] == 'Y',
				'PHONE_COUNTRY_CODE' => $row['PHONE_COUNTRY_CODE'],
				'TO_DELETE' => $row['TO_DELETE'] == 'Y',
			);
		}
	}

	/**
	 * Executes component
	 */
	public function executeComponent()
	{
		if (!Loader::includeModule('voximplant'))
			return false;

		$permissions = \Bitrix\Voximplant\Security\Permissions::createWithCurrentUser();
		if(!$permissions->canPerform(\Bitrix\Voximplant\Security\Permissions::ENTITY_LINE, \Bitrix\Voximplant\Security\Permissions::ACTION_MODIFY))
			return false;

		$this->init();
		$this->prepareData();
		if ($this->showTemplate)
			$this->includeComponentTemplate();

		return $this->arResult;
	}
}


?>