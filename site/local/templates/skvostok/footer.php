<footer id="section-footer" class="footer moto-section" data-widget="section" data-container="section" data-moto-sticky="{mode:'smallHeight', direction:'bottom'}" <?if($APPLICATION->GetCurDir()=='/'){?>style="margin-top:0px;"<?}?>>
    <div data-css-name="moto-container_footer_5560e270" class="moto-widget moto-widget-container moto-container_footer_5560e270" data-widget="container" data-container="container">
        <div class="moto-widget moto-widget-divider moto-preset-default      moto-align-left moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="divider_horizontal" data-divider-type="horizontal" data-preset="default" data-align="left" data-spacing="laaa" data-width="0">
            <hr style="width: 0%;" class="moto-widget-divider-line">
        </div>
        <div class="moto-widget moto-widget-row row-fixed" data-widget="row">
            <div class="container-fluid">
                <div class="row">
                    <div class="moto-cell col-sm-9 col-xs-12" data-container="container">
                        <div class="row">
                            <div class="pull-left col-sm-4 col-xs-12">
                                <div class="moto-widget moto-widget-text moto-preset-default                       moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="masa">
                                    <div class="moto-widget-text-content moto-widget-text-editable">
                                        <p class="moto-text_system_7"><span class="moto-color2_5">О КОМПАНИИ<br></span></p>
                                    </div>
                                </div>
                                <div class="moto-widget moto-widget-text moto-preset-default                       moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="sasa">
                                    <div class="moto-widget-text-content moto-widget-text-editable">
                                        <p class="moto-text_system_8">
                                        <a data-action="pages" data-id="1" href="/">Главная</a><br>
                                        <a data-action="pages" data-id="4" href="/about/">О компании</a><br>
                                        <a data-action="pages" data-id="6" href="/services/">Услуги</a><br>
                                        <a data-action="pages" data-id="7" href="/news/">Новости</a><br>
                                        <a data-action="pages" data-id="8" href="/contacts/">Контакты</a><br></p>
                                    </div>
                                </div>
                            </div>
                            <div class="pull-left col-sm-4 col-xs-12">
                                <div class="moto-widget moto-widget-text moto-preset-default                       moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="masa">
                                    <div class="moto-widget-text-content moto-widget-text-editable">
                                        <p class="moto-text_system_7"><span class="moto-color2_5">УСЛУГИ<br></span></p>
                                    </div>
                                </div>
                                <div class="moto-widget moto-widget-text moto-preset-default                       moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="sasa">
                                    <div class="moto-widget-text-content moto-widget-text-editable">
                                    <? $APPLICATION->IncludeComponent(
    	"bitrix:news.list", 
    	"footer_services", 
    	array(
    		"DISPLAY_DATE" => "Y",
    		"DISPLAY_NAME" => "Y",
    		"DISPLAY_PICTURE" => "Y",
    		"DISPLAY_PREVIEW_TEXT" => "Y",
    		"AJAX_MODE" => "Y",
    		"IBLOCK_TYPE" => "site_information",
    		"IBLOCK_ID" => "41",
    		"NEWS_COUNT" => "999",
    		"SORT_BY1" => "ACTIVE_FROM",
    		"SORT_ORDER1" => "DESC",
    		"SORT_BY2" => "SORT",
    		"SORT_ORDER2" => "ASC",
    		"FILTER_NAME" => "",
    		"FIELD_CODE" => array(
    			0 => "ID",
    			1 => "",
    		),
    		"PROPERTY_CODE" => array(
    			0 => "",
    			1 => "DESCRIPTION",
    			2 => "",
    		),
    		"CHECK_DATES" => "Y",
    		"DETAIL_URL" => "",
    		"PREVIEW_TRUNCATE_LEN" => "",
    		"ACTIVE_DATE_FORMAT" => "d.m.Y",
    		"SET_TITLE" => "N",
    		"SET_BROWSER_TITLE" => "N",
    		"SET_META_KEYWORDS" => "N",
    		"SET_META_DESCRIPTION" => "N",
    		"SET_LAST_MODIFIED" => "N",
    		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
    		"ADD_SECTIONS_CHAIN" => "N",
    		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
    		"PARENT_SECTION" => "",
    		"PARENT_SECTION_CODE" => "",
    		"INCLUDE_SUBSECTIONS" => "Y",
    		"CACHE_TYPE" => "A",
    		"CACHE_TIME" => "3600",
    		"CACHE_FILTER" => "Y",
    		"CACHE_GROUPS" => "Y",
    		"DISPLAY_TOP_PAGER" => "Y",
    		"DISPLAY_BOTTOM_PAGER" => "Y",
    		"PAGER_TITLE" => "Новости",
    		"PAGER_SHOW_ALWAYS" => "Y",
    		"PAGER_TEMPLATE" => "",
    		"PAGER_DESC_NUMBERING" => "Y",
    		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
    		"PAGER_SHOW_ALL" => "Y",
    		"PAGER_BASE_LINK_ENABLE" => "Y",
    		"SET_STATUS_404" => "Y",
    		"SHOW_404" => "Y",
    		"MESSAGE_404" => "",
    		"PAGER_BASE_LINK" => "",
    		"PAGER_PARAMS_NAME" => "arrPager",
    		"AJAX_OPTION_JUMP" => "N",
    		"AJAX_OPTION_STYLE" => "Y",
    		"AJAX_OPTION_HISTORY" => "N",
    		"AJAX_OPTION_ADDITIONAL" => "",
    		"COMPONENT_TEMPLATE" => "footer_services",
    		"FILE_404" => ""
    	),
    	false
    );?>
                                    </div>
                                </div>
                            </div>
                            <div class="pull-left col-sm-4 col-xs-12">
                                
                                <div class="moto-widget moto-widget-text moto-preset-default                       moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="masa">
                                    <div class="moto-widget-text-content moto-widget-text-editable">
                                        <p class="moto-text_system_7"><span class="moto-color2_5">СОЦСЕТИ<br></span></p>
                                    </div>
                                </div>
                                <div class="moto-widget moto-widget-row" data-widget="row">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="moto-cell col-sm-2 col-xs-2" data-container="container">
                                                <div data-widget-id="wid__social_links__57eb867d4207c" class="moto-widget moto-widget-social-links moto-preset-2 moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto " data-widget="social_links" data-preset="2" data-animation="" data-align="{&quot;desktop&quot;:&quot;left&quot;,&quot;tablet&quot;:&quot;&quot;,&quot;mobile-h&quot;:&quot;&quot;,&quot;mobile-v&quot;:&quot;&quot;}" data-spacing="aaaa">


                                                    <ul class="moto-widget-social-links-list">

                                                        <li class="moto-widget-social-links-item">
                                                            <a href="javascript:void(0)" class="moto-widget-social-links-link moto-widget-social-links-link_facebook" data-provider="facebook" target="_blank"></a>
                                                        </li>

                                                    </ul>


                                                </div>
                                            </div>
                                            <div class="moto-cell col-sm-10 col-xs-10" data-container="container">
                                                <div class="moto-widget moto-widget-text moto-preset-default                     moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="aaaa">
                                                    <div class="moto-widget-text-content moto-widget-text-editable">
                                                        <p class="moto-text_system_8"><a data-action="url" href="javascript:void(0)" target="_blank">Facebook</a><br></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="moto-widget moto-widget-row" data-widget="row">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="moto-cell col-sm-2 col-xs-2" data-container="container">
                                                <div data-widget-id="wid__social_links__57eb867d422fe" class="moto-widget moto-widget-social-links moto-preset-2 moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto " data-widget="social_links" data-preset="2" data-animation="" data-align="{&quot;desktop&quot;:&quot;left&quot;,&quot;tablet&quot;:&quot;&quot;,&quot;mobile-h&quot;:&quot;&quot;,&quot;mobile-v&quot;:&quot;&quot;}" data-spacing="aaaa">


                                                    <ul class="moto-widget-social-links-list">

                                                        <li class="moto-widget-social-links-item">
                                                            <a href="javascript:void(0)" class="moto-widget-social-links-link moto-widget-social-links-link_instagram" data-provider="instagram" target="_blank"></a>
                                                        </li>

                                                    </ul>


                                                </div>
                                            </div>
                                            <div class="moto-cell col-sm-10 col-xs-10" data-container="container">
                                                <div class="moto-widget moto-widget-text moto-preset-default                     moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="aaaa">
                                                    <div class="moto-widget-text-content moto-widget-text-editable">
                                                        <p class="moto-text_system_8"><a data-action="url" href="https://www.instagram.com/sk.vostok/" target="_blank">Instagram</a><br></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="moto-cell col-sm-3 col-xs-12" data-container="container">
                        <div class="moto-widget moto-widget-text moto-preset-default                       moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="masa">
                            <div class="moto-widget-text-content moto-widget-text-editable">
                                <p style="text-align: right;" class="moto-text_system_7"><span class="moto-color2_5">КОНТАКТЫ<br></span></p>
                            </div>
                        </div>
                        <div class="moto-widget moto-widget-text moto-preset-default                       moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="sasa">
                            <div class="moto-widget-text-content moto-widget-text-editable">
                                <p class="moto-text_system_8" style="text-align: right;">Телефон: +7 (342) 225-29-23</p>
                                <p class="moto-text_system_8" style="text-align: right;">E-mail:<a data-action="email" href="mailto:info@skv-k.ru"> info@skv-k.ru</a><br></p>
                            </div>
                        </div>
                        <div class="moto-widget moto-widget-text moto-preset-default                       moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="masa">
                            <div class="moto-widget-text-content moto-widget-text-editable">
                                <p class="moto-text_system_7" style="text-align: right;"><span class="moto-color2_5">НАШ АДРЕС<br></span></p>
                            </div>
                        </div>
                        <div class="moto-widget moto-widget-text moto-preset-default                       moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="sasa">
                            <div class="moto-widget-text-content moto-widget-text-editable">
                                <p class="moto-text_system_8" style="text-align: right;">Пермский край, г.Пермь 614036<br></p>
                                <p class="moto-text_system_8" style="text-align: right;">Ул. Беляева, дом 19, офис 203<br></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="moto-widget moto-widget-divider moto-preset-default       moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto" data-widget="divider_horizontal" data-divider-type="horizontal" data-preset="default" data-align="left" data-spacing="aala" data-width="0">
            <hr style="width: 0%;" class="moto-widget-divider-line">
        </div>
    </div>
    <div data-css-name="moto-container_footer_5560e273" class="moto-widget moto-widget-container moto-container_footer_5560e273" data-widget="container" data-container="container">
        <div class="moto-widget moto-widget-row row-fixed" data-widget="row">
            <div class="container-fluid">
                <div class="row">
                    <div class="moto-cell col-sm-4" data-container="container">
                        <div class="moto-widget moto-widget-row" data-widget="row">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="moto-cell col-sm-12" data-container="container">
                                        <div class="logo_footer">
                                            <?$APPLICATION->IncludeFile("/include/logo-inversed.php", Array(), Array("MODE"=>"text"));?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="moto-cell col-sm-8" data-container="container">
                        <div class="moto-widget moto-widget-text moto-preset-default                               moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="laaa">
                            <div class="moto-widget-text-content moto-widget-text-editable">
                                <p style="text-align: right;" class="moto-text_system_9"><span class="moto-color2_5">
                                    <a href="https://primesoftpro.ru/">
                                        Праймсофт &nbsp; © <span id="year"></span>
                                    </a>
                                </span><br></p>
                            </div>
                        </div>
                        <?/*$APPLICATION->IncludeComponent("skvostok:menu","footer",Array(
                                "ROOT_MENU_TYPE" => "top",
                                "MAX_LEVEL" => "1",
                                "CHILD_MENU_TYPE" => "top",
                                "USE_EXT" => "Y",
                                "DELAY" => "N",
                                "ALLOW_MULTI_SELECT" => "Y",
                                "MENU_CACHE_TYPE" => "N",
                                "MENU_CACHE_TIME" => "3600",
                                "MENU_CACHE_USE_GROUPS" => "Y",
                                "MENU_CACHE_GET_VARS" => "",
                                "SHOW_LAST_LEVEL_BUTTONS" => "N"
                            )
                        );*/?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

<script src="<?=SITE_TEMPLATE_PATH?>/vendor/fancybox/jquery.fancybox.pack.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
        $('.fancyimage').fancybox();
    });
</script>

</div>

</body>

</html>