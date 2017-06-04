<?php
 if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
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
		// echo '<pre>';
		// print_r($this->arParams);
		// echo '</pre>';
		
		// echo 'IBLOCK_ID ' . $this->arParams["IBLOCK_ID"].'<br>';
		$user_id = $_SESSION['SESS_AUTH']['USER_ID'];
		$userGroup = CUser::GetUserGroup($user_id);
		
		// echo 'userGroup<pre>';
		// print_r($userGroup);
		// echo '</pre>';
		$is_admin = 0;
		foreach($userGroup as $group_id){
			if($group_id == 1){
				$is_admin = 1;
			}
		}
		
		$result["IS_ADMIN"] = $is_admin;

        $objects = ObjectTable::getList(array(
            'select'  => array(
				'ID',
				'NAME',
				'USER_ID' => '\Skv\Lc\ObjectUser:OBJECT.USER.ID'
			
			),
			'filter' => array(
							'=\Skv\Lc\ObjectUser:OBJECT.USER.ID' => $user_id,
						)
        ));
		
		// $object_str = implode($result['objects']['ID'], ',');
		// echo 'object_str ' . $object_str . '<br/>';
		$result['objects'] = $objects->fetchAll();
		// echo '<pre>';
		// print_r($result['objects']);
		// echo '</pre>';
		
		$object_ids = array();
		foreach($result['objects'] as $one){
			$object_ids[] = $one['ID'];
		}
		
		// echo '2<pre>';
		// print_r($object_ids);
		// echo '</pre>';
		
		$cameras = CameraTable::getList(array(
            'select'  => array('*'),
			'filter' => array(
							'=OBJECT_ID' => $object_ids[0],
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
		// $result['ObjectUserTable'] = ObjectUserTable::getList(array(
            // 'select'  => array('*'),
        // ));
		//echo '---';
        return $result;
    }


    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        $result = $this->show();

        $this->arResult = $result;

        $this->includeComponentTemplate();
    }
};