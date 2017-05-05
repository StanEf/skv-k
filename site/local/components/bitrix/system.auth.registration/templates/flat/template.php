<?

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$APPLICATION->SetAdditionalCSS("/bitrix/css/main/system.auth/flat/style.css");
?>
<div class="bx-authform">

<?
if(!empty($arParams["~AUTH_RESULT"])):
	$text = str_replace(array("<br>", "<br />"), "\n", $arParams["~AUTH_RESULT"]["MESSAGE"]);
?>
	<div class="alert <?=($arParams["~AUTH_RESULT"]["TYPE"] == "OK"? "alert-success":"alert-danger")?>"><?=nl2br(htmlspecialcharsbx($text))?></div>
<?endif?>

<?if($arResult["USE_EMAIL_CONFIRMATION"] === "Y" && is_array($arParams["AUTH_RESULT"]) &&  $arParams["AUTH_RESULT"]["TYPE"] === "OK"):?>
	<div class="alert alert-success"><?echo GetMessage("AUTH_EMAIL_SENT")?></div>
<?else:?>

<?if($arResult["USE_EMAIL_CONFIRMATION"] === "Y"):?>
	<div class="alert alert-warning"><?echo GetMessage("AUTH_EMAIL_WILL_BE_SENT")?></div>
<?endif?>

<noindex>
	<form method="post" action="<?=$arResult["AUTH_URL"]?>" name="bform">
<?if($arResult["BACKURL"] <> ''):?>
		<input type="hidden" name="backurl" value="<?=$arResult["BACKURL"]?>" />
<?endif?>
		<input type="hidden" name="AUTH_FORM" value="Y" />
		<input type="hidden" name="TYPE" value="REGISTRATION" />

		<div class="bx-authform-formgroup-container">
			<div class="bx-authform-label-container"><span class="bx-authform-starrequired">*</span><?=GetMessage("AUTH_NAME")?></div>
			<div class="bx-authform-input-container">
				<input type="text" name="USER_NAME" maxlength="255" value="<?=$arResult["USER_NAME"]?>" />
			</div>
		</div>

		<div class="bx-authform-formgroup-container">
			<div class="bx-authform-label-container"><span class="bx-authform-starrequired">*</span><?=GetMessage("AUTH_LAST_NAME")?></div>
			<div class="bx-authform-input-container">
				<input type="text" name="USER_LAST_NAME" maxlength="255" value="<?=$arResult["USER_LAST_NAME"]?>" />
			</div>
		</div>

		<div class="bx-authform-formgroup-container">
			<div class="bx-authform-label-container"><span class="bx-authform-starrequired">*</span><?=GetMessage("AUTH_ROLE")?></div>
			<div class="bx-authform-input-container">
				<input type="text" name="USER_ROLE" maxlength="255" value="<?=$arResult["USER_ROLE"]?>" />
			</div>
		</div>

		<div class="bx-authform-formgroup-container">
			<div class="bx-authform-label-container"><?if($arResult["EMAIL_REQUIRED"]):?><span class="bx-authform-starrequired">*</span><?endif?><?=GetMessage("AUTH_EMAIL")?></div>
			<div class="bx-authform-input-container">
				<input type="text" name="USER_EMAIL" maxlength="255" value="<?=$arResult["USER_EMAIL"]?>" />
			</div>
		</div>

		<div class="bx-authform-formgroup-container">
			<input type="submit" class="btn btn-primary" name="Register" value="<?=GetMessage("AUTH_REGISTER")?>" />
		</div>



		<div class="bx-authform-link-container">
			<a href="<?=$arResult["AUTH_AUTH_URL"]?>" rel="nofollow"><b><?=GetMessage("AUTH_AUTH")?></b></a>
		</div>

	</form>
</noindex>

<script type="text/javascript">
//document.bform.USER_NAME.focus();
try{document.bform.USER_PASSWORD.focus();}catch(e){}
</script>

<?endif?>
</div>