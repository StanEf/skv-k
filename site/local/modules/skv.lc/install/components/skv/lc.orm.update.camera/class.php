<?php
use \Bitrix\Main;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Type;
use \Skv\Lc\CameraTable;
class LcOrmUpdateCamera extends CBitrixComponent
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

    function updateCamera()
    {
		$object_id = $_POST('ID');
		$array_to_change = array();
		
		if(isset($_POST('NAME'))){
			$array_to_change['NAME'] = $_POST('NAME');
		}
		
		if(isset($_POST('LINK'))){
			$array_to_change['LINK'] = $_POST('LINK');
		}
		
		if(isset($_POST('OBJECT_ID'))){
			$array_to_change['OBJECT_ID'] = $_POST('OBJECT_ID');
		}	
		
		$result['ObjectTable'] = CameraTable::update($_POST('ID'), $array_to_change);
		
        return $result;
    }


    public function executeComponent()
    {
        $this -> includeComponentLang('class.php');

        $this -> checkModules();

        $result = $this->updateCamera();

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