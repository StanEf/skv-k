<?php

namespace Skv\Lc;

use \Bitrix\Main\Entity;
use \Bitrix\Main\Type;

class ObjectTable extends Entity\DataManager
{
    public static function getTableName() 
    {
        return 'object_lc';
    }

    public static function getUfId()
    {
        return 'OBJECT_LC';
    }

    public static function getMap()
    {
        return array(
            //ID
            new Entity\IntegerField('ID', array(
                'primary' => true,
                'autocomplete' => true
            )),
			//���
            new Entity\StringField('NAME', array(
                'required' => true,
            )),
            //������
            new Entity\StringField('COORD_LAT', array(
                'required' => true,
            )),
			//�������
            new Entity\StringField('COORD_LON', array(
                'required' => true,
            )),
        );
    }


    // public static function onBeforeUpdate(Entity\Event $event)
    // {
        // $result = new Entity\EventResult;
        // $data = $event->getParameter("fields");

        // if (isset($data['ISBN'])) {
            // $result->addError(new Entity\FieldError(
                // $event->getEntity()->getField('ISBN'),
                // '��������� ������ ISBN ��� � ������������ ����'
            // ));
        // }

        // return $result;
    // }
}