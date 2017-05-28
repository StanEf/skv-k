<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
//delayed function must return a string
if(empty($arResult))
	return "";
$strReturn = '<div class="wd-breadcrumb-navigation"><span class="wd-breadcrumb-navigation-header">'.GetMessage("WD_PATH").'</span>';
$itemSize = count($arResult);
for($index = 0; $index < $itemSize; $index++)
{
	if ($index <= 0)
		$strReturn .= '<span class="wd-crumb-item wd-crumb-first">';
	elseif ($index == $itemSize)
		$strReturn .= '</span> <span class="wd-crumb-item wd-crumb-last"><span>&nbsp;/&nbsp;</span>';
	else
		$strReturn .= '</span> <span class="wd-crumb-item"> <span>/&nbsp;</span>';

	if ($index <= 0)
		$title = (strlen($GLOBALS["tmp_STR_TITLE"]) > 0 ? htmlspecialcharsEx($GLOBALS["tmp_STR_TITLE"]) : htmlspecialcharsex($arResult[$index]["TITLE"]));
	else 
		$title = htmlspecialcharsex($arResult[$index]["TITLE"]);
	
	if($arResult[$index]["LINK"] <> "")
		$strReturn .= '<a href="'.$arResult[$index]["LINK"].'" title="'.$title.'">'.$title.'</a>';
	else
		$strReturn .= ''.$title.'';
}
$strReturn .= '</span></div>';
return $strReturn;
?>
