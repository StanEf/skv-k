<?php
/**
 * Created by PhpStorm
 

 

 */

namespace Skv\Lc;

use \Bitrix\Main\Entity;
use \Bitrix\Main\Type;

class AuthorTable extends Entity\DataManager
{
    public static function getTableName()
    {
        return 'author_lc';
    }

    public static function getMap()
    {
        return array(
            //ID
            new Entity\IntegerField('ID', array(
                'primary' => true,
                'autocomplete' => true
            )),
            //Название
            new Entity\StringField('NAME', array(
                'required' => true,
            )),
            //Фамилия
            new Entity\StringField('LAST_NAME')
        );
    }
}