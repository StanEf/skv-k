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
			//Имя
            new Entity\StringField('NAME', array(
                'required' => true,
            )),
            //Широта
            new Entity\IntegerField('COORD_LAT', array(
                'required' => true,
            )),
			//Долгота
            new Entity\IntegerField('COORD_LON', array(
                'required' => true,
            )),
        );
    }

    /**
     *
     */
    public static function getRequired()
    {
        $required = array();
        $res = ObjectTable::getEntity()->getFields();
        foreach($res as $name => $item){
            $required[$name] = $item->isRequired();
        }
        return $required;
    }
    
    public static function getAutocomplete()
    {
        $autocomplete = array();
        $res = ObjectTable::getEntity()->getFields();
        foreach($res as $name => $item){
            $autocomplete[$name] = $item->isAutocomplete();
        }
        return $required;
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