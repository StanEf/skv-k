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
		$object_id = $_POST('ID');
		$array_to_change = array();
		
		if(isset($_POST('NAME'))){
			$array_to_change['NAME'] = $_POST('NAME');
		}
		
		if(isset($_POST('LATITYDE'))){
			$array_to_change['LATITYDE'] = $_POST('LATITYDE');
		}
		
		if(isset($_POST('LONGITUDE'))){
			$array_to_change['LONGITUDE'] = $_POST('LONGITUDE');
		}
		
		if(isset($_POST('ID')) && !empty($array_to_change)){
			$result['ObjectTable'] = ObjectTable::update($_POST('ID'), $array_to_change);
		}
		
		if(isset($_POST('USER_ID')) && isset($_POST('ID'))){
			$result['ObjectUserTable'] = ObjectUserTable::add(array(
				'OBJECT_ID' => $_POST('ID'),
				'USER_ID' => $_POST['USER_ID'],
			));
		}		
		
        return $result;
    }


    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        $result = $this->updateObject();

        if ($result->isSuccess())
        {
            $id = $result->getId();
            $this->arResult='Запись изменена с id: '.$id;
        }
        else
        {
            $error=$result->getErrorMessages();
            $this->arResult='Произошла ошибка при изменении: <pre>'.var_export($error,true).'</pre>';
        }

        $this->includeComponentTemplate();
    }
};