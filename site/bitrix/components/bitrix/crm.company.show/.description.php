<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true) die();

$arComponentDescription = array(
	'NAME' => GetMessage('CRM_COMPANY_SHOW_NAME'),
	'DESCRIPTION' => GetMessage('CRM_COMPANY_SHOW_DESCRIPTION'),
	'ICON' => '/images/icon.gif',
	'SORT' => 40,
	'PATH' => array(
		'ID' => 'crm',
		'NAME' => GetMessage('CRM_NAME'),
		'CHILD' => array(
			'ID' => 'company',
			'NAME' => GetMessage('CRM_COMPANY_NAME')
		)
	),
	'CACHE_PATH' => 'Y'
);
?>