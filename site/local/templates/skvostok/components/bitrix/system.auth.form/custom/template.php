<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

CJSCore::Init();


// echo '999<pre>';
// print_r($arResult);
// echo '</pre>';
?>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

<?if($arResult["FORM_TYPE"] == "login"):?>

<div class="container" style="padding: 15px;">
	<div class="bx-authform" style="margin: 0 auto;">
		<h3 class="bx-title">
			Пожалуйста, авторизуйтесь
		</h3>
		<form name="form_auth" method="post" action="/support/index.php?login=yes" id="FORM_5">
			<input type="hidden" name="AUTH_FORM" value="Y" id="INPUT_6" />
			<input type="hidden" name="TYPE" value="AUTH" id="INPUT_7" />
			<input type="hidden" name="backurl" value="/support/index.php" id="INPUT_8" />
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Логин
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="USER_LOGIN" maxlength="255" id="INPUT_12" />
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Пароль
				</div>
				<div class="bx-authform-input-container">
					<input type="password" name="USER_PASSWORD" maxlength="255" id="INPUT_16" />
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<div class="checkbox">
					 
					<label class="bx-filter-param-label">
						<input type="checkbox" id="USER_REMEMBER" name="USER_REMEMBER" value="Y" /> 
						<span class="bx-filter-param-text">Запомнить меня на этом компьютере</span>
					</label>
				</div> 
				<a href="#openModal">Зарегистрироваться</a>
			</div>
			<div class="bx-authform-formgroup-container">
				<input type="submit" name="Login" value="Войти" id="INPUT_24" />
			</div>
		</form>
	</div>
</div>



<div id="openModal" class="modalDialog modal fade in" style="padding-right: 17px;">
	<div class="row">
		<div class="col-sm-offset-3 col-sm-6">
			<div class="contacts-area promtech-form" style="padding: 30px !important; margin-top: 130px;">
				<div id="TWODIV_4">
					<form name="SIMPLE_FORM_18" action="/support/" method="POST" enctype="multipart/form-data" >
						<input type="hidden" name="sessid" id="TWOINPUT_6" value="f33d820991cf510fe69fc6bf3717fc8c" />
						<input type="hidden" name="WEB_FORM_ID" value="18" id="TWOINPUT_7" />
						<div class="form-group">
							 
							<label for="SIMPLE_QUESTION_132">
								Ваше ФИО
							</label>
							<input type="text" id="SIMPLE_QUESTION_132" class="form-control" placeholder="Ваше ФИО" name="form_text_121" />
						</div>
						<div class="form-group">
							 
							<label for="SIMPLE_QUESTION_843">
								Ваш email
							</label>
							<input type="text" id="SIMPLE_QUESTION_843" class="form-control"  placeholder="Ваш email" name="form_text_122" />
						</div>
						<div class="form-group">
							 
							<label for="SIMPLE_QUESTION_511">
								Название компании
							</label>
							<input type="text" id="SIMPLE_QUESTION_511" class="form-control"placeholder="Название компании" name="form_text_123" />
						</div>
						<div class="form-group">							 
							<label for="SIMPLE_QUESTION_512">
								Должность
							</label>
							<input type="text" id="SIMPLE_QUESTION_512" class="form-control"placeholder="Должность" name="form_text_124" />
						</div>
						<!--
						<div class="form-group">	 
							<label id="TWOLABEL_18">
								Защита от автоматического заполнения
							</label>
							<div class="row">
								<input type="hidden" id="TWOINPUT_20" name="captcha_sid" value="01900ea632253519cf29a2bd523e64c7" />
								<div class="col-xs-6">
									<input type="text" name="captcha_word" size="30" maxlength="50" id="TWOINPUT_22" class="form-control"/>
								</div>
								<div class="col-xs-6 captcha-form">
									<img id="TWOIMG_24" src="/bitrix/tools/captcha.php?captcha_sid=01900ea632253519cf29a2bd523e64c7" width="180" height="45" alt='' />
								</div>
							</div>
						</div>
						-->
						
						<input type="submit" name="web_form_submit" value="Отправить"/>
						<input type="button" class="modal_close_button" value="Закрыть"/>
						<div style="display: none;">
							<a href="#close" class="close_link">Закрыть</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<?else:?>
<div class="container" style="padding: 15px;">
	<div class="bx-authform" style="margin: 0 auto;">
		<form action="<?=$arResult["AUTH_URL"]?>">
			
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container" style="text-align:center;">
					<?=$arResult["USER_NAME"]?>
				</div>
				<div class="bx-authform-label-container" style="text-align:center;">
					<?=$arResult["USER_LOGIN"]?>
				</div>
				<div class="bx-authform-label-container" style="text-align:center;">
					<a href="/lc/" title="<?=GetMessage("AUTH_PROFILE")?>"><?=GetMessage("AUTH_PROFILE")?></a>
				</div>
			</div>
			<div class="bx-authform-formgroup-container" style="text-align:center;">
				<a href="/support/?logout=yes&amp;login=yes" ><?=GetMessage("AUTH_LOGOUT_BUTTON")?></a>
			</div>
		</form>
	</div>
</div>
<?endif?>

<script>
	$(function() {
		$(".modal_close_button").on("click", function(e){			
			var link = $(".close_link")[0];
			var linkEvent = null;
			if (document.createEvent) {
				linkEvent = document.createEvent('MouseEvents');
				linkEvent.initEvent('click', true, true);
				link.dispatchEvent(linkEvent);
			}
			else if (document.createEventObject) {
				linkEvent = document.createEventObject();
				link.fireEvent('onclick', linkEvent);
			}

			e.preventDefault();
		});
});
</script>