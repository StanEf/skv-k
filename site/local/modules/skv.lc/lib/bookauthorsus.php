<?php
/**
 * Created by PhpStorm
 

 

 */

namespace Skv\Lc;

use \Bitrix\Main\Entity;
use \Bitrix\Main\Type;

class BookAuthorsUsTable extends Entity\DataManager
{
    public static function getTableName()
    {
        return 'bookauthorsus_lc';
    }

    public static function getMap()
    {
        return array(
            new Entity\IntegerField('ID', array(
                'primary' => true,
                'autocomplete' => true
            )),
            new Entity\IntegerField('BOOK_ID'),
            new Entity\ReferenceField(
                'BOOK',
                '\Skv\Lc\Book2Table',
                array('=this.BOOK_ID' => 'ref.ID')
            ),
            new Entity\IntegerField('AUTHOR_ID'),
            new Entity\ReferenceField(
                'AUTHOR',
                '\Skv\Lc\AuthorTable',
                array('=this.AUTHOR_ID' => 'ref.ID')
            )
        );
    }
}