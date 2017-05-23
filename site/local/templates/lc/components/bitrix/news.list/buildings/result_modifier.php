<?php

$arSelect = Array("ID", "NAME", "CODE", "PREVIEW_TEXT", "PREVIEW_PICTURE", "PROPERTY_ICON", "PROPERTY_ACTIVE_ICON");
$arFilter = Array("IBLOCK_ID"=>41, "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y");
$res = CIBlockElement::GetList(Array(), $arFilter, false, Array("nPageSize"=>50), $arSelect);
while($ob = $res->GetNextElement())
{
 $arFields = $ob->GetFields();
 $temp['ID'] = $arFields['ID'];
 $temp['CODE'] = $arFields['CODE'];
 $temp['NAME'] = $arFields['NAME'];
 $temp['PREVIEW_TEXT'] = $arFields['PREVIEW_TEXT'];
 $temp['PREVIEW_PICTURE'] = CFile::GetPath($arFields['PREVIEW_PICTURE']);
 $temp['ICON'] = CFile::GetPath($arFields['PROPERTY_ICON_VALUE']);
 $temp['ACTIVE_ICON'] = CFile::GetPath($arFields['PROPERTY_ACTIVE_ICON_VALUE']);
 $services[] = $temp;
}

$arResult['SERVICES'] = $services;

$minYear = $arResult['ITEMS'][0]['PROPERTIES']['BUILD_YEAR']['VALUE'];
$maxYear = $arResult['ITEMS'][0]['PROPERTIES']['BUILD_YEAR']['VALUE'];
foreach ($arResult['ITEMS'] as $key => $arItem) {
	$arItem['PROPERTIES']['SERVICES'] = null;
    if ($arItem['PROPERTIES']['BUILD_YEAR']['VALUE']>=$maxYear) {
        $maxYear = $arItem['PROPERTIES']['BUILD_YEAR']['VALUE'];
    }
    if ($arItem['PROPERTIES']['BUILD_YEAR']['VALUE']<=$minYear) {
        $minYear = $arItem['PROPERTIES']['BUILD_YEAR']['VALUE'];
    }
    if ($arItem['PROPERTIES']['SERVICE_TYPE']['VALUE']) {
	    foreach ($arItem['PROPERTIES']['SERVICE_TYPE']['VALUE'] as $val) {
	    	$arResult['ITEMS'][$key]['PROPERTIES']['SERVICES'] .= 'service_'.$val.' ';
	    }
    }
}

$arResult['YEARS']['MIN_YEAR'] = $minYear;
$arResult['YEARS']['MAX_YEAR'] = $maxYear;