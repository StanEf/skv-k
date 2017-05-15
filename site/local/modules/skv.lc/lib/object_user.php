<?
namespace Skv\Lc;

use \Bitrix\Main\Entity;
use \Bitrix\Main\Type;

class ObjectUserTable extends Entity\DataManager
{
    public static function getTableName()
    {
        return 'object_lc_to_b_user';
    }

    public static function getMap()
    {
        return array(
            new Entity\IntegerField('OBJECT_ID', array(
                'primary' => true
            )),
            new Entity\ReferenceField(
                'OBJECT',
                'Skv\Lc\Object',
                array('=this.OBJECT_ID' => 'ref.ID')
            ),
            new Entity\IntegerField('USER_ID', array(
                'primary' => true
            )),
            new Entity\ReferenceField(
                'USER',
                'Skv\Lc\User',
                array('=this.USER_ID' => 'ref.ID')
            )
        );
    }
}
