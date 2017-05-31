<?php

use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Skv\Lc\ObjectTable;
use \Skv\Lc\ObjectUserTable;
use \Skv\Lc\CameraTable;
class LcView extends CBitrixComponent 
{

    protected function checkModules()
    {
        if (!Main\Loader::includeModule('skv.lc'))
            throw new Main\LoaderException(Loc::getMessage('SKV_LC_MODULE_NOT_INSTALLED'));
    }

    function show()
    {
		//echo "999 $arParams[OBJECT_ID]" . $arParams["OBJECT_ID"] . '<br>';
		$cameras = CameraTable::getList(array(
            'select'  => array('*'),
			'filter' => array(
							'=OBJECT_ID' => $this->arParams["OBJECT_ID"],
						)
        ));
		$result['cameras'] = $cameras->fetchAll();
		$objects_cameras = array();
		foreach($result['cameras'] as $camera){
			$objects_cameras[$camera['OBJECT_ID']][] = $camera;
		}
		$result['cameras'] = $objects_cameras;
		// echo '3<pre>';
		// print_r($result);
		// echo '</pre>';

        return $result;
    }


    public function executeComponent()
    {
        //$this -> includeComponentLang('class.php');

        $this -> checkModules();

        $result = $this->show();

        $this->arResult = $result;

        $this->includeComponentTemplate();
    }
};