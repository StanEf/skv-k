<?
namespace Skv\Lc;

use \Bitrix\Main\Entity;
use \Bitrix\Main\Type;

class CameraTable extends Entity\DataManager
{
    public static function getTableName() 
    {
        return 'camera_lc';
    }

    public static function getUfId()
    {
        return 'CAMERA_LC';
    }

    public static function getMap()
    {
        return array(
            //ID
            new Entity\IntegerField('ID', array(
                'primary' => true,
                'autocomplete' => true
            )),
			//Имя
            new Entity\StringField('NAME', array(
                'required' => true,
            )),
			new Entity\StringField('LINK', array(
                'required' => true,
            )),
            new Entity\IntegerField('OBJECT_ID', array(
                'required' => true,
            )),
			new Entity\ReferenceField(
                'OBJECT',
                'Skv\Lc\Object',
                array('=this.OBJECT_ID' => 'ref.ID')
            )
        );
    }


    // public static function onBeforeUpdate(Entity\Event $event)
    // {
        // $result = new Entity\EventResult;
        // $data = $event->getParameter("fields");

        // if (isset($data['ISBN'])) {
            // $result->addError(new Entity\FieldError(
                // $event->getEntity()->getField('ISBN'),
                // 'Запрещено менять ISBN код у существующих книг'
            // ));
        // }

        // return $result;
    // }
}