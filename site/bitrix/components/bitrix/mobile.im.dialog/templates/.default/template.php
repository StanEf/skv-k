<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$APPLICATION->AddHeadString('<link href="'.CUtil::GetAdditionalFileURL(BX_PERSONAL_ROOT.'/js/im/css/common.css').'" type="text/css" rel="stylesheet" />');

$composite = \Bitrix\Main\Page\Frame::getInstance();
$composite->setEnable();
$composite->setUseAppCache();
?>
<div id="im-dialog-wrap"></div>
<div id="im-dialog-invite"></div>
<div id="im-dialog-form"></div>
<?
$frame = $this->createFrame("im_component_dialog_v6_".$USER->GetId())->begin();
$frame->setBrowserStorage(true);
?>
<script type="text/javascript">
	<?=CIMMessenger::GetMobileTemplateJS(Array(), $arResult)?>
</script>
<?
$frame->beginStub();
?>
<script type="text/javascript">
	BXMobileApp.UI.Page.TopBar.title.setText('');
	BXMobileApp.UI.Page.TopBar.title.setDetailText('');
</script>
<?
$frame->end();
?>
