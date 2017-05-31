<?php

use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Skv\Lc\ObjectTable;
use \Skv\Lc\ObjectUserTable;
class LcOrmGetlistObject extends CBitrixComponent 
{

    /**
     * проверяет подключение необходиимых модулей
     * @throws LoaderException
     */
    protected function checkModules()
    {
        if (!Main\Loader::includeModule('skv.lc'))
            throw new Main\LoaderException(Loc::getMessage('SKV_LC_MODULE_NOT_INSTALLED'));
       // echo Loc::getMessage('SKV_LC_MODULE_NOT_INSTALLED');
    }

    protected function getFilter($grid_options)
    {
        $this->arResult["FILTER"] = array();
        $iList = $this->itemList;
        foreach ($iList as $key => $value) {
            if ($value != "list") {
                switch ($key) {
                    default:
                        $this->arResult["FILTER"][] = array("id" => $key, "name" => Loc::getMessage('SKV_LC_CLIENTS_LIST_HEADER_' . $key), "type" => $value);
                        break;
                }
            }
        }

        // не понял зачем это
        $Filter = $grid_options->GetFilter($this->arResult["FILTER"]);
/*        echo '$Filter<pre>';
        print_r($Filter);
        echo '</pre>';*/
        $result = array();
#		if ($Filter["GRID_FILTER_APPLIED"] == true) {
        foreach ($Filter as $key => $value) {
            if ($key == "GRID_FILTER_APPLIED" || $key == "GRID_FILTER_ID") {
            } elseif ($iList[$key] == "checkbox") {
                if ($value == "Y") {
                    $result[$key] = true;
                } else {
                    $result[$key] = false;
                }
            } else {
                $result[$key] = $value;
            }
        }
#		}
        return $result;
    }

    protected function getSort($grid_options)
    {
        $sort = $grid_options->GetSorting(array("sort" => array("ID" => "asc"), "vars" => array("by" => "by", "order" => "order")));
/*        echo '$sort<pre>';
        print_r($sort);
        echo '</pre>';*/
        $this->arResult["SORT"] = $sort["sort"];
        $this->arResult["SORT_VARS"] = $sort["vars"];
        return $sort["sort"];
    }

    protected function isEditable($arg1)
    {
        switch ($arg1) {
            case("ID"):
                return false;
                break;
            default:
                return true;
                break;
        }
    }

    protected function getItemList()
    {
        $res = ObjectTable::getEntity()->getFields();
        foreach ($res as $item) {
            $itName = $item->getName();
            switch ($item->getDataType()) {
                case "string":
                    $itType = "text";
                    break;
                case "integer":
                    $itType = "text";
                    break;
                case "text":
                    $itType = "notext";
                    break;
                case "date":
                    $itType = "date";
                    break;
                case "boolean":
                    $itType = "checkbox";
                    break;
                default:
                    $itType = "list";
                    break;
            }
            $this->itemList[$itName] = $itType;
        }
/*        echo '$this->itemList <pre>';
        print_r($this->itemList);
        echo '</pre>';*/
    }

    function getList()
    {
        $this->arResult["GRID_NAME"] = "object";

        $nav = new \Bitrix\Main\UI\PageNavigation($this->arResult["GRID_NAME"]);
        $grid_options = new CGridOptions($this->arResult["GRID_NAME"]);
        $filter = $this->getFilter($grid_options);
        $sort = $this->getSort($grid_options);
        $grid_params = $grid_options->GetNavParams();
        $nav->allowAllRecords(true)
            ->setPageSize($grid_params["nPageSize"])
            ->initFromUri();

        $ObjectList = ObjectTable::getList(
            array(
                "select" => array('*'),
                "count_total" => true,
                "offset" => $nav->getOffset(),
                "limit" => $nav->getLimit(),
                "filter" => $filter,
                "order" => $sort
            )
        );

        $rows = array();
        while ($object = $ObjectList->fetch()) {
           /* echo '$object<pre>';
            print_r($object);
            echo '</pre>';*/
            $actions = Array(
                array("ICONCLASS" => "edit", "TEXT" => Loc::getMessage('SKV_LC_CLIENTS_LIST_CHANGE_BUTTON'), "ONCLICK" => "jsUtils.Redirect(arguments, 'object_edit.php?ID=" . $object["ID"] . "')", "DEFAULT" => true),
                array("SEPARATOR" => true),
                array("ICONCLASS" => "delete", "TEXT" => Loc::getMessage('SKV_LC_CLIENTS_LIST_DELETE_BUTTON'), "ONCLICK" => "if(confirm('" . Loc::getMessage('SKV_LC_CLIENTS_LIST_DELETE_CONFIRM') . "')) window.location='?action=delete_object&ID=" . $object["ID"] . "&" . bitrix_sessid_get() . "';"),
            );
            $cols = array();
            $res = array();
            foreach ($this->itemList as $key => $value) {
                if ($key == "ID") {
                    $res[$key] = $object[$key];
                } elseif ($value == "checkbox") {
                    if ($object[$key] == true) {
                        $object[$key] = Loc::getMessage('SKV_LC_CLIENTS_LIST_TRUE_TEXT');
                        $res["~" . $key] = "Y";
                    } else {
                        $client[$key] = Loc::getMessage('SKV_LC_CLIENTS_LIST_FALSE_TEXT');
                        $res["~" . $key] = "N";
                    }
                } else {
                    $res["~" . $key] = $object[$key];
                }

                if ($value == "list") {
                    $cols[$key . "_ID"] = $object["BLIZARD_SKV_LC_ELEMENTS_CLIENTS_" . $key . "_NAME"];
                } else {
                    $cols[$key] = $object[$key];
                }
            }
            $rows[] = array(
                "data" => $res,
                "columns" => $cols,
                "actions" => $actions,
                "editable" => true,
            );
        }
        $this->arResult["ROWS"] = $rows;
        $this->arResult["HEADERS"] = array();
        foreach ($this->itemList as $key => $value) {
            if ($key == "ID" || $value == "notext") {
                $this->arResult["HEADERS"][] = array(
                    "id" => $key,
                    "name" => Loc::getMessage('SKV_LC_CLIENTS_LIST_HEADER_' . $key),
                    "sort" => $key,
                    "default" => true,
                    "type" => $value
                );
            } elseif ($value != "list") {
                $edit = $this->isEditable($key);
                if ($key == "OWNER_ID" || $key == "DEVTYPE_ID" || $key == "SERVERRACK_ID") {
                    $value = "list";
                }
                $this->arResult["HEADERS"][] = array(
                    "id" => $key,
                    "name" => Loc::getMessage('SKV_LC_CLIENTS_LIST_HEADER_' . $key),
                    "sort" => $key,
                    "default" => true,
                    "editable" => $edit,
                    "type" => $value
                );

            }
        }
        $nav->setRecordCount($ObjectList->getCount());
        $this->arResult["COUNT"] = $ObjectList->getCount();
        $this->arResult["NAV"] = $nav;
    }

    function show()
    {
        $result['ObjectTable'] = ObjectTable::getList(array(
            'select'  => array('*'), 
        ));
		$result['ObjectUserTable'] = ObjectUserTable::getList(array(
            'select'  => array('*'),
        ));
        return $result;
    }


    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();
        $this -> getItemList();

        $this->getList();

        //$result = $this->show();

        //$this->arResult['ObjectTable'] = $result['ObjectTable']->fetchAll();
		//$this->arResult['ObjectUserTable'] = $result['ObjectUserTable']->fetchAll();

        $this->includeComponentTemplate();
    }
};