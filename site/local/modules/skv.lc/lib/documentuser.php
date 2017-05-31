<?
namespace Skv\Lc;

use \Bitrix\Main\Entity;
use \Bitrix\Main\Type;

class DocumentUserTable extends Entity\DataManager
{
    public static function getTableName()
    {
        return 'document_lc_to_b_user';
    }

    public static function getMap()
    {
        return array(
            new Entity\IntegerField('ID', array(
                'primary' => true,
                'autocomplete' => true,
            )),
            new Entity\IntegerField('DOCUMENT_ID', array(
                'required' => true,
            )),
            new Entity\ReferenceField(
                'DOCUMENT',
                'Skv\Lc\Document',
                array('=this.DOCUMENT_ID' => 'ref.ID')
            ),
            new Entity\IntegerField('USER_ID', array(
                'required' => true,
            )),
            new Entity\ReferenceField(
                'USER',
                'Skv\Lc\User',
                array('=this.USER_ID' => 'ref.ID')
            ),
            new Entity\BooleanField('EDIT', array(
                'values' => array('N', 'Y'),
                'default_value' => 'Y',
            )),
            new Entity\BooleanField('SHOW', array(
                'values' => array('N', 'Y'),
                'default_value' => 'Y',
            )),


        );
    }

    public static function getUsers($object_id)
    {
        $obUsers = ObjectUserTable::getList(array(
                'select' => array('USER_ID'),
                'filter' => array(
                    '=OBJECT_ID' => $object_id
                ),
            )
        );

        while($user = $obUsers->fetch()){
            $arUsers[] = $user["USER_ID"];
        }
        /*  echo '$arUsers<pre>';
          print_r($arUsers);
          echo '</pre>';*/

        return $arUsers;
        return implode(",", $arUsers);

    }
}
