<?php
use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Skv\Lc\ObjectTable;
use \Skv\Lc\ObjectUserTable;
class LcOrmUpdateObject extends CBitrixComponent
{

    /**
     * проверяет подключение необходиимых модулей
     * @throws LoaderException
     */
    protected function checkModules()
    {
        if (!Main\Loader::includeModule('skv.lc'))
            throw new Main\LoaderException(Loc::getMessage('SKV_LC_MODULE_NOT_INSTALLED'));
    }

    function updateObject()
    {
		$object_id = $_POST['ID'];
		$array_to_change = array();
		
		if(!empty($_POST['NAME'])){
			$array_to_change['NAME'] = $_POST['NAME'];
		}
		
		if(!empty($_POST['LATITYDE'])){
			$array_to_change['COORD_LAT'] = $_POST['LATITYDE'];
		}
		
		if(!empty($_POST['LONGITUDE'])){
			$array_to_change['COORD_LON'] = $_POST['LONGITUDE'];
		}
		
		if(!empty($_POST['ID']) && !empty($array_to_change)){
			$result['ObjectTable'] = ObjectTable::update($_POST['ID'], $array_to_change);
		}
		
		if(!empty($_POST['USER_ID']) && !empty($_POST['ID'])){
			$check = ObjectUserTable::getList(array(
						'filter' => array(
							'=OBJECT_ID' => $_POST['ID'],
							'=USER_ID' => $_POST['USER_ID'],
						)
					));
			if(empty($check)){
				$result['ObjectUserTable'] = ObjectUserTable::add(array(
					'OBJECT_ID' => $_POST['ID'],
					'USER_ID' => $_POST['USER_ID'],
				));
			}else{
				 $this->arResult='ObjectUserTable такая запись уже существует';
			}		
			
		}		
		
        return $result;
    }


    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        $result = $this->updateObject();
		if(!empty($result['ObjectUserTable'])){
			if ($result['ObjectUserTable']->isSuccess())
			{
				$id = $result['ObjectUserTable']->getId();
				$this->arResult='ObjectUserTable Запись изменена с id: '.$id;
			}
			else
			{
				$error=$result['ObjectUserTable']->getErrorMessages();
				$this->arResult='ObjectUserTable Произошла ошибка при изменении: <pre>'.var_export($error,true).'</pre>';
			}
		}
		if(!empty($result['ObjectTable'])){
			if ($result['ObjectTable']->isSuccess())
			{
				$id = $result['ObjectTable']->getId();
				$this->arResult='ObjectTable Запись изменена с id: '.$id;
			}
			else
			{
				$error=$result['ObjectTable']->getErrorMessages();
				$this->arResult='ObjectTable Произошла ошибка при изменении: <pre>'.var_export($error,true).'</pre>';
			}
		}
        $this->includeComponentTemplate();
    }
};