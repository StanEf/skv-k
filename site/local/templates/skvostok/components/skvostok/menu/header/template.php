<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<ul class="moto-widget-menu-list moto-widget-menu-list_horizontal">
    <li class="moto-widget-menu-item">
        <a href="/" data-action="page" class="moto-widget-menu-link moto-widget-menu-link-level-1<?if($APPLICATION->GetCurDir()=='/') {?> moto-widget-menu-link-active<?}?> moto-link">Главная</a>
    </li>
    <?
    $previousLevel = 0;
    foreach($arResult as $arItem):?>

            <?if ($previousLevel && $arItem["DEPTH_LEVEL"] < $previousLevel):?>
                <?=str_repeat("</ul></li>", ($previousLevel - $arItem["DEPTH_LEVEL"]));?>
            <?endif?>

            <?if ($arItem["IS_PARENT"]):?>

                <?if ($arItem["DEPTH_LEVEL"] == 1):?>
                    <li class="moto-widget-menu-item <?if ($arItem["SELECTED"]):?> item-selected<?endif?>">
                        <a class="moto-widget-menu-link moto-widget-menu-link-level-<?=$arItem['DEPTH_LEVEL']?> moto-widget-menu-link-submenu moto-link" href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a>
                            <ul class="moto-widget-menu-sublist">
                <?else:?>
                    <li class="moto-widget-menu-item<?if ($arItem["SELECTED"]):?> item-selected<?endif?>">
                        <a class="moto-widget-menu-link moto-widget-menu-link-level-<?=$arItem['DEPTH_LEVEL']?> moto-widget-menu-link-submenu moto-link" href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a>
                            <ul class="moto-widget-menu-sublist">
                <?endif?>

            <?else:?>

                <?if ($arItem["DEPTH_LEVEL"] == 1):?>
                    <li class="moto-widget-menu-item">
                        <a href="<?=$arItem["LINK"]?>" data-action="page" class="moto-widget-menu-link moto-widget-menu-link-level-<?=$arItem['DEPTH_LEVEL']?> <?if ($arItem["SELECTED"]):?>moto-widget-menu-link-active<?endif?> moto-link"><?=$arItem["TEXT"]?></a>
                    </li>
                <?else:?>
                    <li class="moto-widget-menu-item">
                        <a href="<?=$arItem["LINK"]?>" data-action="page" class="moto-widget-menu-link moto-widget-menu-link-level-<?=$arItem['DEPTH_LEVEL']?> <?if ($arItem["SELECTED"]):?>moto-widget-menu-link-active<?endif?> moto-link"><?=$arItem["TEXT"]?></a>
                    </li>
                <?endif?>

            <?endif?>

            <?$previousLevel = $arItem["DEPTH_LEVEL"];?>

    <?endforeach?>
    <?if ($previousLevel > 1)://close last item tags?>
        <?=str_repeat("</ul></li>", ($previousLevel-1) );?>
    <?endif?>
</ul>