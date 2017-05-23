<?php

$minYear = $arResult['ITEMS'][0]['PROPERTIES']['BUILD_YEAR']['VALUE'];
$maxYear = $arResult['ITEMS'][0]['PROPERTIES']['BUILD_YEAR']['VALUE'];
foreach ($arResult['ITEMS'] as &$arItem) {
	if ($arItem['PROPERTIES']['SHOW_ON_HOME']['VALUE_XML_ID'] !== "YES") {
		//		unset($arItem);
$arItem = [];
		continue;
	}

    if ($arItem['PROPERTIES']['BUILD_YEAR']['VALUE']>=$maxYear) {
        $maxYear = $arItem['PROPERTIES']['BUILD_YEAR']['VALUE'];
    }
    if ($arItem['PROPERTIES']['BUILD_YEAR']['VALUE']<=$minYear) {
        $minYear = $arItem['PROPERTIES']['BUILD_YEAR']['VALUE'];
    }
}

$arResult['YEARS']['MIN_YEAR'] = $minYear;
$arResult['YEARS']['MAX_YEAR'] = $maxYear;