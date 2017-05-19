<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
   die();
?>
<?
//покажем панель с кнопками
$APPLICATION->IncludeComponent(
   "bitrix:main.interface.toolbar",
   "",
   array(
      "BUTTONS"=>array(
         array(
            "TEXT"=>"Список",
            "TITLE"=>"Список пользователей",
            "LINK"=>$APPLICATION->GetCurPage(),
            "ICON"=>"btn-list",
         ),
         array("SEPARATOR"=>true), 
         array(
            "TEXT"=>"Скопировать админа",
            "TITLE"=>"Скопировать пользователя номер 1",
            "LINK"=>"/bitrix/admin/user_edit.php?COPY_ID=1",
            "ICON"=>"btn-copy",
         ),
         array(
            "TEXT"=>"Скопировать себя",
            "TITLE"=>"Скопировать пользователя номер 1",
            "LINK"=>"/bitrix/admin/user_edit.php?COPY_ID=".$GLOBALS["USER"]->GetID(),
            "ICON"=>"btn-copy",
         ),
         array("NEWBAR"=>true), 
         array(
            "TEXT"=>"Добавить",
            "TITLE"=>"Добавить пользователя или группу",
            "MENU"=>array(
               array("ICONCLASS"=>"add", "TEXT"=>"Пользователя", "ONCLICK"=>"jsUtils.Redirect(arguments, '/bitrix/admin/user_edit.php')"),
               array("ICONCLASS"=>"add", "TEXT"=>"Группу пользователей", "ONCLICK"=>"jsUtils.Redirect(arguments, '/bitrix/admin/group_edit.php')"),
            ),
            "ICON"=>"btn-new",
         ),
      ),
   ),
   $component
);?>
8888888888
<?
//вызовем компонент грида для отображения данных
$APPLICATION->IncludeComponent(
   "bitrix:main.interface.grid",
   "",
   array(
//уникальный идентификатор грида
      "GRID_ID"=>$arResult["GRID_ID"],
//описание колонок грида, поля типизированы
      "HEADERS"=>array(
         array("id"=>"LOGIN", "name"=>"Логин", "sort"=>"login", "default"=>true, "editable"=>false),
         array("id"=>"ACTIVE", "name"=>"Активен", "default"=>true, "type"=>"checkbox", "editable"=>true),
         array("id"=>"TIMESTAMP_X", "name"=>"Изменено", "sort"=>"timestamp_x", "default"=>false),
         array("id"=>"NAME", "name"=>"Имя", "sort"=>"name",   "default"=>true, "editable"=>array("size"=>20, "maxlength"=>255)),
         array("id"=>"LAST_NAME", "name"=>"Фамилия",  "sort"=>"last_name", "default"=>true, "editable"=>array("size"=>20, "maxlength"=>255)),
         array("id"=>"SECOND_NAME", "name"=>"Отчество",  "sort"=>"second_name"),
         array("id"=>"EMAIL", "name"=>"Email",  "sort"=>"email", "default"=>true, "editable"=>array("size"=>20, "maxlength"=>255)),
         array("id"=>"LAST_LOGIN", "name"=>"Аторизовывался", "sort"=>"last_login"),
         array("id"=>"DATE_REGISTER", "name"=>"Зарегистрирован", "sort"=>"date_register"),
         array("id"=>"ID", "name"=>"ИД", "sort"=>"id", "default"=>true, "align"=>"right"),
         array("id"=>"PERSONAL_BIRTHDAY", "name"=>"День рождения", "sort"=>"personal_birthday", "default"=>true, "type"=>"date", "editable"=>true),
         array("id"=>"PERSONAL_PROFESSION", "name"=>"Профессия", "sort"=>"personal_profession"),
         array("id"=>"PERSONAL_WWW", "name"=>"Веб", "sort"=>"personal_www"),
         array("id"=>"PERSONAL_ICQ", "name"=>"АйСикЮ", "sort"=>"personal_icq"),
         array("id"=>"PERSONAL_GENDER", "name"=>"Пол", "sort"=>"personal_gender", "default"=>true, "type"=>"list", "editable"=>array("items"=>array(""=>"(пол)", "M"=>"Мужской", "F"=>"Женский"))),
         array("id"=>"PERSONAL_PHONE", "name"=>"Телефон", "sort"=>"personal_phone"),
         array("id"=>"PERSONAL_MOBILE", "name"=>"Мобильник", "sort"=>"personal_mobile"),
         array("id"=>"PERSONAL_CITY", "name"=>"Город", "sort"=>"personal_city"),
         array("id"=>"PERSONAL_STREET", "name"=>"Улица", "sort"=>"personal_street"),
         array("id"=>"WORK_COMPANY", "name"=>"Компания", "sort"=>"work_company"),
         array("id"=>"WORK_DEPARTMENT", "name"=>"Отдел", "sort"=>"work_department"),
         array("id"=>"WORK_POSITION", "name"=>"Должность", "sort"=>"work_position"),
         array("id"=>"WORK_WWW", "name"=>"Раб. веб", "sort"=>"work_www"),
         array("id"=>"WORK_PHONE", "name"=>"Раб. тел.", "sort"=>"work_phone"),
         array("id"=>"WORK_CITY", "name"=>"Раб. город", "sort"=>"work_city"),
         array("id"=>"XML_ID", "name"=>"Символьный код", "sort"=>"xml_id"),
         array("id"=>"EXTERNAL_AUTH_ID", "name"=>"Внешний код"),
      ),
//сортировка
      "SORT"=>$arResult["SORT"],
//это необязательный
      "SORT_VARS"=>$arResult["SORT_VARS"],
//данные
      "ROWS"=>$arResult["ROWS"],
//футер списка, можно задать несколько секций
      "FOOTER"=>array(array("title"=>"Всего", "value"=>$arResult["ROWS_COUNT"])),
//групповые действия
      "ACTIONS"=>array(
//можно удалять
         "delete"=>true, 
//выпадающий список действий
         "list"=>array("activate"=>"Активировать", "deactivate"=>"Деактивировать"),
//либо произвольный html
         "custom_html"=>'
            <select name="action_on_files" onchange="this.form.folder_id.style.display=(this.value==\'move\'? \'\':\'none\');">
               <option>- действия -</option>
               <option value="move">Переместить</option>
            </select>
            <select name="folder_id" style="display:none">
               <option value="folder1">folder1</option>
               <option value="folder2">folder2</option>
            </select>
         ',
      ),
//разрешить действия над всеми элементами
      "ACTION_ALL_ROWS"=>true,
//разрешено редактирование в списке
      "EDITABLE"=>true,
//объект постранички
      "NAV_OBJECT"=>$arResult["NAV_OBJECT"],
//можно использовать в режиме ajax
      "AJAX_MODE"=>"Y",
      "AJAX_OPTION_JUMP"=>"N",
      "AJAX_OPTION_STYLE"=>"Y",
//фильтр
      "FILTER"=>$arResult["FILTER"],
   ),
   $component
);
?>