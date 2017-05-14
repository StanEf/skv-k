<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

CJSCore::Init();


// echo '999<pre>';
// print_r($arResult);
// echo '</pre>';
?>
<style>
.modalDialog {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 99999;
	display: none;
	pointer-events: none;
}
.modalDialog:target {
	display: block;
	pointer-events: auto;
}
	#DIV_1 {
    box-sizing: border-box;
    color: rgb(109, 109, 109);
    height: 482px;
    text-decoration: none solid rgb(109, 109, 109);
    text-size-adjust: 100%;
    width: 1170px;
    column-rule-color: rgb(109, 109, 109);
    perspective-origin: 585px 241px;
    transform-origin: 585px 241px;
    caret-color: rgb(109, 109, 109);
    border: 0px none rgb(109, 109, 109);
    font: normal normal normal normal 14px / 23px Roboto, sans-serif;
    margin: 0px 366.5px;
    outline: rgb(109, 109, 109) none 0px;
    padding: 15px;
}
.container{
	padding: 15px;
}
.bx-authform{
	margin: 0 auto;
	max-width: 500px;
}
.bx-authform-formgroup-container{
	margin-bottom: 25px;
}
.bx-authform-label-container{
	font-size: 13px;
    color: #5a6c77;
    padding-bottom: 2px;
}
.bx-authform-input-container{
	position: relative;
}
form {
    display: block;
    margin-top: 0em;
}
.contacts-area {
    background-color: #f3f4f4;
    padding-left: 15px;
    padding-right: 15px;
}

.bx-authform{
	margin: 0 0 25px;
	max-width: 500px
}
/*block*/
.bx-authform-formgroup-container{
	margin-bottom: 25px;
}
.bx-authform-content-container,
.bx-authform-label-container{
	font-size:13px;
	color: #5a6c77;
	padding-bottom: 2px;
}
.bx-authform-input-container{
	position: relative;
}
.bx-authform-psw-protected{
  height: 38px;
  width: 38px;
  position: absolute;
  right: 1px;
  top: 50%;
  margin-top: -19px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzdEMTI3RjNGRkJEMTFFNDk2ODJDNEJEOTQ4OEQ1OEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzdEMTI3RjRGRkJEMTFFNDk2ODJDNEJEOTQ4OEQ1OEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3N0QxMjdGMUZGQkQxMUU0OTY4MkM0QkQ5NDg4RDU4QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3N0QxMjdGMkZGQkQxMUU0OTY4MkM0QkQ5NDg4RDU4QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi+O2x0AAAC4SURBVHjaYvz//z8DDJQ2dXEAqTQgdgFiRqjwfiCe3V1X9hmmjhGmCahBCkjNZMANcoEaH4AYTEiC06H0cyDOB2I/IM4G4odQ8ckoNgFtcQWy80ACQNN80a0Ayq8FUmxAPAcovxFmkxqUPoTDaXugtAqy8z5A6Vc4NL2B0h9BBAuUIwmlpYBO4QbSXFAD/wHxNyCWhsqLg/1U0ti5AEgLMxAPPjKRqAEE+JkYyADDVdNdEvU8BAgwAIw8L6DAodwVAAAAAElFTkSuQmCC") no-repeat center;
  -webkit-background-size: 11px auto;
  background-size: 11px auto;
}

.bx-authform-psw-protected-desc{
	display: none;
	background: #fff;
	position: absolute;
	width: 250px;
	left: 50%;
	margin-left: -125px;
	bottom: 100%;
	margin-bottom: 14px;
	border:1px solid #f0f1f2;
	padding: 10px 20px;
	font-size: 14px;
	z-index: 110;
	box-shadow: 0 6px 9px 0 rgba(0,0,0,.1)
}
.bx-authform-psw-protected:hover .bx-authform-psw-protected-desc{display: block;}
.bx-authform-psw-protected-desc>span{
	position: absolute;
	left: 0;
	right: 0;
	top: 100%;
	height: 14px;
	display: block;
	background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAOCAYAAAAxDQxDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjIzNzExNDdGRkJFMTFFNDg4RDM4NEY3NjNFRDYwRDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjIzNzExNDhGRkJFMTFFNDg4RDM4NEY3NjNFRDYwRDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMjM3MTE0NUZGQkUxMUU0ODhEMzg0Rjc2M0VENjBENSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMjM3MTE0NkZGQkUxMUU0ODhEMzg0Rjc2M0VENjBENSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PodxyuQAAAFASURBVHjarJS/SgNBEMZ3x00glj6DL2Fn5UtYi7WdlYUIYhGwCYgPYBeIjbUvIYikCxaCGk/wZvf2n98dCiEm521y2xwzOzO/m5tvTn5knyrG+LLZ6211ux3R5rHWCtZGhBBOCbaTUu7kzM9FYVuDeO+FNsWjD+EQ9S/px/8EY7ctmHVO5KwzwM5Iymu4pjRzP24D5tAJs34D7Bzm3a+f5uLWgpWfCzMZY+YHG0QXqDVdBloZZp0VXzmXAriCOZq/pyV5STB0Eo0pHqCufXQygCs2BTWCxUrC5eDZO+f7iL+BSy+KpX9ethZWSVibCSDHiLutK0QNPv9CGIpDXWaCPTkioj5c7+uC/sBctSccMfjBrITrjsQvKEXB25DufUepDPtyAnvYNFElrkrVGZZxD89hSqJaYflL2Gtq0rcAAwDa/ePzqfelnAAAAABJRU5ErkJggg==") no-repeat center bottom;
}
.bx-authform-input-container input[type="text"],
.bx-authform-input-container input[type="password"] {
  display: block;
  width: 100%;
  font-size: 18px;
  height: 38px;
  margin: 0;
  padding: 0 4px;
  border: 1px solid #CCD5DB;
  border-radius: 2px;
  background: #f8fafc;
  outline: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.bx-authform-input-container input[type="text"].bx-empty-field,
.bx-authform-input-container input[type="password"].bx-empty-field{
	border-color: #dd4b39;
}

.bx-authform-formgroup-container .bx-captcha{
	margin-bottom: 10px;
}


</style>
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
				<input type="submit" name="logout_butt" value="<?=GetMessage("AUTH_LOGOUT_BUTTON")?>" />
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