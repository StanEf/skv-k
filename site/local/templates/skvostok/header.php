<!DOCTYPE html>
<html lang="en" data-ng-app="website">

<head>


    <meta charset="utf-8">
    <title><?=$APPLICATION->ShowTitle('title')?></title>
    <?$APPLICATION->ShowHead()?>
    <link rel="SHORTCUT ICON" href="/favicon.ico" type="image/vnd.microsoft.icon" />


    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

<!--
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400" rel="stylesheet">
-->
	<link href='https://fonts.googleapis.com/css?family=Roboto&subset=latin,greek,greek-ext,latin-ext,cyrillic' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Roboto+Condensed&subset=latin,greek,greek-ext,latin-ext,cyrillic' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/assets.min.css" />
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/styles.css" />
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/another_styles.css" />
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/ext_styles.css" />
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/owl.carousel.min.css">
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/owl.theme.default.min.css">
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/vendor/fancybox/jquery.fancybox.css">
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/vendor/csslider/animated-slider.css">
    <style>
        @import url(//fonts.googleapis.com/css?family=Asap:regular,italic,700,700italic|Cutive:regular|Lato:100,300,regular,italic,700|Open+Sans:300,300italic,regular,italic,600,600italic,700,700italic,800,800italic|PT+Sans:regular,italic,700,700italic&subset=latin,latin-ext);
        @import url(//fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900|Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic|Sarina:reqular&subset=latin,latin-ext);
    </style>

   <script src="<?=SITE_TEMPLATE_PATH?>/js/js1.js"></script>

    <script src="<?=SITE_TEMPLATE_PATH?>/js/js2.js"></script>

    <script src="<?=SITE_TEMPLATE_PATH?>/js/script.js"></script>

    <script src="<?=SITE_TEMPLATE_PATH?>/js/owl.carousel.min.js"></script>

    <script src="<?=SITE_TEMPLATE_PATH?>/vendor/fancybox/jquery.fancybox.js"></script>

    <script src="<?=SITE_TEMPLATE_PATH?>/vendor/cloud9/jquery.cloud9carousel.js"></script>

    <script src="<?=SITE_TEMPLATE_PATH?>/vendor/csslider/jquery.cssslider.min.js"></script>

    <script src="<?=SITE_TEMPLATE_PATH?>/vendor/swipe/jquery.touchSwipe.min.js"></script>
    
</head>

<body class="moto-background">
<?$APPLICATION->ShowPanel();?>

<div class="page">

<header id="section-header" class="header moto-section" data-widget="section" data-container="section">
    <div moto-sticky="{ }" data-css-name="moto-container_header_55607151" class="moto-widget moto-widget-container moto-container_header_55607151" data-widget="container" data-container="container">
        <div class="moto-widget moto-widget-row row-fixed" data-widget="row">
            <div class="container-fluid">
                <div class="row">
                    <div class="moto-cell col-sm-12" data-container="container">
                        <div data-widget-id="wid__menu__57eb867d2cd74" class="moto-widget moto-widget-menu moto-preset-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-preset="default" data-widget="menu">
                            <a href="#" class="moto-widget-menu-toggle-btn"><i class="moto-widget-menu-toggle-btn-icon fa fa-bars"></i></a>
                            <?$APPLICATION->IncludeComponent(
	"skvostok:menu", 
	"header", 
	array(
		"ROOT_MENU_TYPE" => "top",
		"MAX_LEVEL" => "2",
		"CHILD_MENU_TYPE" => "top",
		"USE_EXT" => "Y",
		"DELAY" => "N",
		"ALLOW_MULTI_SELECT" => "Y",
		"MENU_CACHE_TYPE" => "N",
		"MENU_CACHE_TIME" => "3600",
		"MENU_CACHE_USE_GROUPS" => "Y",
		"MENU_CACHE_GET_VARS" => array(
		),
		"SHOW_LAST_LEVEL_BUTTONS" => "N",
		"COMPONENT_TEMPLATE" => "header"
	),
	false
);?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div data-css-name="moto-container_header_5560f75a" class="moto-widget moto-widget-container moto-container_header_5560f75a" data-widget="container" data-container="container">
        <div class="moto-widget moto-widget-row row-fixed" data-widget="row">
            <div class="container-fluid">
                <div class="row">

                    <div class="moto-cell col-lg-8 col-md-3 col-sm-3 col-xs-12" data-container="container">
                        <div class="moto-widget moto-widget-row" data-widget="row">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="moto-cell col-sm-12 col-md-12 col-lg-8" data-container="container">
                                        <div style="padding-bottom: 25px;" data-widget-id="wid__image__57eb867d3169e" class="moto-widget moto-widget-image moto-preset-default moto-align-center moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto logo_mno" data-preset="default" data-widget="image">
											<a class="header_logo moto-widget-image-link moto-link" href="/" data-action="page" style="display: block">
                                                <?$APPLICATION->IncludeFile("/include/logo.php", Array(), Array("MODE"=>"text"));?>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="moto-cell col-sm-3 col-lg-3 col-md-3 col-xs-12" data-container="container">
                        <div class="moto-widget moto-widget-row" data-widget="row">
                            <div class="container-fluid header_fluid">
								<!--<div style="padding-top: 45px; font-size: 20px; font-weight: bold;">+7 (342) 225-29-23</div>-->
                            </div>
                        </div>
                    </div>

                    <div class="moto-cell col-sm-3 col-lg-3 col-md-3 col-xs-12" data-container="container">
                        <div class="moto-widget moto-widget-row" data-widget="row">
                            <div class="container-fluid header_fluid">
                                <div class="row">
                                    <div class="moto-cell col-sm-3 header_contact header_icon" data-container="container" style="padding-right: 5px;">
                                        <div data-widget-id="wid__image__57eb867d33486" class="moto-widget moto-widget-image moto-preset-default moto-align-center moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto " data-preset="default" data-widget="image">
                                            <div class="moto-widget-image-link header_link">
                                                <img src="<?=SITE_TEMPLATE_PATH?>/img/mt-0053-home-icon7.png" class="moto-widget-image-picture" data-id="223" title="" alt="" draggable="false">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="moto-cell col-sm-9 header_text contacts-wrap header_contact" data-container="container" style="padding-left: 0px;">
                                        <div class="moto-widget moto-widget-text moto-preset-default                                  moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="laaa">
                                            <div class="moto-widget-text-content moto-widget-text-editable ">
                                                <p class="moto-text_system_14"><span class="moto-color5_3">Тел./Факс:<br>+7 (342) 225-29-23</span></p>
                                                <p class="moto-text_system_14"><span class="moto-color5_3">E-mail: info@skv-k.ru</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="moto-cell col-sm-3 col-lg-3 col-md-3 col-xs-12" data-container="container">
                        <div class="moto-widget moto-widget-row" data-widget="row">
                            <div class="container-fluid header_fluid">
                                <div class="row">
                                    <div class="moto-cell col-sm-3 header_icon" data-container="container" style="padding-right: 5px;">
                                        <div data-widget-id="wid__image__57eb867d336a4" class="moto-widget moto-widget-image moto-preset-default moto-align-center moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto " data-preset="default" data-widget="image">
                                            <a class="moto-widget-image-link header_link moto-link" href="/contacts/" data-action="page">
                                                <img src="<?=SITE_TEMPLATE_PATH?>/img/mt-0053-home-icon8.png" class="moto-widget-image-picture" data-id="224" title="" alt="" draggable="false">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="moto-cell col-sm-9 header_text contacts-wrap" data-container="container" style="padding-left: 0px;">
                                        <div class="moto-widget moto-widget-text moto-preset-default                                     moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="lama">
                                            <div class="moto-widget-text-content moto-widget-text-editable">
                                                <p class="moto-text_system_14"><span class="moto-color5_3">Адрес:<br>Пермский край, г.Пермь 614036<br>Ул. Беляева, дом 19, офис 203</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<? if ($APPLICATION->GetCurDir() != '/') {?>
    <div class="header-line moto-container">
        <div class="bottom-line">
            <h1><?=$APPLICATION->GetDirProperty("title");?></h1>
			<?/*$APPLICATION->IncludeComponent("bitrix:breadcrumb","",Array(
                    "START_FROM" => "0", 
                    "PATH" => "", 
                    "SITE_ID" => "s1" 
                )
);*/?>
        </div>
    </div>
<? } ?>