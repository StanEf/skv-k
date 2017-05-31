<?
namespace Skv\Lc;

use Bitrix\Main;


/**
 * Class IblockTable
 *
 * Fields:
 * <ul>
 * <li> ID int mandatory
 * <li> TIMESTAMP_X datetime mandatory default 'CURRENT_TIMESTAMP'
 * <li> IBLOCK_TYPE_ID string(50) mandatory
 * <li> LID string(2) mandatory
 * <li> CODE string(50) optional
 * <li> NAME string(255) mandatory
 * <li> ACTIVE bool optional default 'Y'
 * <li> SORT int optional default 500
 * <li> LIST_PAGE_URL string(255) optional
 * <li> DETAIL_PAGE_URL string(255) optional
 * <li> SECTION_PAGE_URL string(255) optional
 * <li> CANONICAL_PAGE_URL string(255) optional
 * <li> PICTURE int optional
 * <li> DESCRIPTION string optional
 * <li> DESCRIPTION_TYPE enum ('text', 'html') optional default 'text'
 * <li> RSS_TTL int optional default 24
 * <li> RSS_ACTIVE bool optional default 'Y'
 * <li> RSS_FILE_ACTIVE bool optional default 'N'
 * <li> RSS_FILE_LIMIT int optional
 * <li> RSS_FILE_DAYS int optional
 * <li> RSS_YANDEX_ACTIVE bool optional default 'N'
 * <li> XML_ID string(255) optional
 * <li> TMP_ID string(40) optional
 * <li> INDEX_ELEMENT bool optional default 'Y'
 * <li> INDEX_SECTION bool optional default 'N'
 * <li> WORKFLOW bool optional default 'Y'
 * <li> BIZPROC bool optional default 'N'
 * <li> SECTION_CHOOSER string(1) optional
 * <li> LIST_MODE string(1) optional
 * <li> RIGHTS_MODE string(1) optional
 * <li> SECTION_PROPERTY string(1) optional
 * <li> PROPERTY_INDEX string(1) optional
 * <li> VERSION int optional default 1
 * <li> LAST_CONV_ELEMENT int mandatory
 * <li> SOCNET_GROUP_ID int optional
 * <li> EDIT_FILE_BEFORE string(255) optional
 * <li> EDIT_FILE_AFTER string(255) optional
 * <li> SECTIONS_NAME string(100) optional
 * <li> SECTION_NAME string(100) optional
 * <li> ELEMENTS_NAME string(100) optional
 * <li> ELEMENT_NAME string(100) optional
 * <li> PICTURE reference to {@link \Bitrix\File\FileTable}
 * <li> IBLOCK_TYPE reference to {@link \Bitrix\Iblock\IblockTypeTable}
 * <li> LID reference to {@link \Bitrix\Lang\LangTable}
 * <li> SOCNET_GROUP reference to {@link \Bitrix\Sonet\SonetGroupTable}
 * </ul>
 *
 * @package Bitrix\Iblock
 **/

class DocumentTable extends Main\Entity\DataManager
{
    /**
     * Returns DB table name for entity.
     *
     * @return string
     */
    public static function getTableName()
    {
        return 'b_iblock';
    }

    /**
     * Returns entity map definition.
     *
     * @return array
     */
    public static function getMap()
    {
        return array(
            'ID' => array(
                'data_type' => 'integer',
                'primary' => true,
                'autocomplete' => true,
            ),
            'TIMESTAMP_X' => array(
                'data_type' => 'datetime',
                'required' => true,
            ),
            'IBLOCK_TYPE_ID' => array(
                'data_type' => 'string',
                'required' => true,
                'validation' => array(__CLASS__, 'validateIblockTypeId'),
            ),
            'LID' => array(
                'data_type' => 'string',
                'required' => true,
                'validation' => array(__CLASS__, 'validateLid'),
            ),
            'CODE' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateCode'),
            ),
            'NAME' => array(
                'data_type' => 'string',
                'required' => true,
                'validation' => array(__CLASS__, 'validateName'),
            ),
            'ACTIVE' => array(
                'data_type' => 'boolean',
                'values' => array('N', 'Y'),
            ),
            'SORT' => array(
                'data_type' => 'integer',
            ),
            'LIST_PAGE_URL' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateListPageUrl'),
            ),
            'DETAIL_PAGE_URL' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateDetailPageUrl'),
            ),
            'SECTION_PAGE_URL' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateSectionPageUrl'),
            ),
            'CANONICAL_PAGE_URL' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateCanonicalPageUrl'),
            ),
            'PICTURE' => array(
                'data_type' => 'integer',
            ),
            'DESCRIPTION' => array(
                'data_type' => 'text',
            ),
            'DESCRIPTION_TYPE' => array(
                'data_type' => 'enum',
                'values' => array('text', 'html'),
            ),
            'RSS_TTL' => array(
                'data_type' => 'integer',
            ),
            'RSS_ACTIVE' => array(
                'data_type' => 'boolean',
                'values' => array('N', 'Y'),
            ),
            'RSS_FILE_ACTIVE' => array(
                'data_type' => 'boolean',
                'values' => array('N', 'Y'),
            ),
            'RSS_FILE_LIMIT' => array(
                'data_type' => 'integer',
            ),
            'RSS_FILE_DAYS' => array(
                'data_type' => 'integer',
            ),
            'RSS_YANDEX_ACTIVE' => array(
                'data_type' => 'boolean',
                'values' => array('N', 'Y'),
            ),
            'XML_ID' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateXmlId'),
            ),
            'TMP_ID' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateTmpId'),
            ),
            'INDEX_ELEMENT' => array(
                'data_type' => 'boolean',
                'values' => array('N', 'Y'),
            ),
            'INDEX_SECTION' => array(
                'data_type' => 'boolean',
                'values' => array('N', 'Y'),
            ),
            'WORKFLOW' => array(
                'data_type' => 'boolean',
                'values' => array('N', 'Y'),
            ),
            'BIZPROC' => array(
                'data_type' => 'boolean',
                'values' => array('N', 'Y'),
            ),
            'SECTION_CHOOSER' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateSectionChooser'),
            ),
            'LIST_MODE' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateListMode'),
            ),
            'RIGHTS_MODE' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateRightsMode'),
            ),
            'SECTION_PROPERTY' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateSectionProperty'),
            ),
            'PROPERTY_INDEX' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validatePropertyIndex'),
            ),
            'VERSION' => array(
                'data_type' => 'integer',
            ),
            'LAST_CONV_ELEMENT' => array(
                'data_type' => 'integer',
                'required' => true,
            ),
            'SOCNET_GROUP_ID' => array(
                'data_type' => 'integer',
            ),
            'EDIT_FILE_BEFORE' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateEditFileBefore'),
            ),
            'EDIT_FILE_AFTER' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateEditFileAfter'),
            ),
            'SECTIONS_NAME' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateSectionsName'),
            ),
            'SECTION_NAME' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateSectionName'),
            ),
            'ELEMENTS_NAME' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateElementsName'),
            ),
            'ELEMENT_NAME' => array(
                'data_type' => 'string',
                'validation' => array(__CLASS__, 'validateElementName'),
            ),
            'PICTURE' => array(
                'data_type' => 'Bitrix\File\File',
                'reference' => array('=this.PICTURE' => 'ref.ID'),
            ),
            'IBLOCK_TYPE' => array(
                'data_type' => 'Bitrix\Iblock\IblockType',
                'reference' => array('=this.IBLOCK_TYPE_ID' => 'ref.ID'),
            ),
            'LID' => array(
                'data_type' => 'Bitrix\Lang\Lang',
                'reference' => array('=this.LID' => 'ref.LID'),
            ),
            'SOCNET_GROUP' => array(
                'data_type' => 'Bitrix\Sonet\SonetGroup',
                'reference' => array('=this.SOCNET_GROUP_ID' => 'ref.ID'),
            ),
        );
    }
    /**
     * Returns validators for IBLOCK_TYPE_ID field.
     *
     * @return array
     */
    public static function validateIblockTypeId()
    {
        return array(
            new Main\Entity\Validator\Length(null, 50),
        );
    }
    /**
     * Returns validators for LID field.
     *
     * @return array
     */
    public static function validateLid()
    {
        return array(
            new Main\Entity\Validator\Length(null, 2),
        );
    }
    /**
     * Returns validators for CODE field.
     *
     * @return array
     */
    public static function validateCode()
    {
        return array(
            new Main\Entity\Validator\Length(null, 50),
        );
    }
    /**
     * Returns validators for NAME field.
     *
     * @return array
     */
    public static function validateName()
    {
        return array(
            new Main\Entity\Validator\Length(null, 255),
        );
    }
    /**
     * Returns validators for LIST_PAGE_URL field.
     *
     * @return array
     */
    public static function validateListPageUrl()
    {
        return array(
            new Main\Entity\Validator\Length(null, 255),
        );
    }
    /**
     * Returns validators for DETAIL_PAGE_URL field.
     *
     * @return array
     */
    public static function validateDetailPageUrl()
    {
        return array(
            new Main\Entity\Validator\Length(null, 255),
        );
    }
    /**
     * Returns validators for SECTION_PAGE_URL field.
     *
     * @return array
     */
    public static function validateSectionPageUrl()
    {
        return array(
            new Main\Entity\Validator\Length(null, 255),
        );
    }
    /**
     * Returns validators for CANONICAL_PAGE_URL field.
     *
     * @return array
     */
    public static function validateCanonicalPageUrl()
    {
        return array(
            new Main\Entity\Validator\Length(null, 255),
        );
    }
    /**
     * Returns validators for XML_ID field.
     *
     * @return array
     */
    public static function validateXmlId()
    {
        return array(
            new Main\Entity\Validator\Length(null, 255),
        );
    }
    /**
     * Returns validators for TMP_ID field.
     *
     * @return array
     */
    public static function validateTmpId()
    {
        return array(
            new Main\Entity\Validator\Length(null, 40),
        );
    }
    /**
     * Returns validators for SECTION_CHOOSER field.
     *
     * @return array
     */
    public static function validateSectionChooser()
    {
        return array(
            new Main\Entity\Validator\Length(null, 1),
        );
    }
    /**
     * Returns validators for LIST_MODE field.
     *
     * @return array
     */
    public static function validateListMode()
    {
        return array(
            new Main\Entity\Validator\Length(null, 1),
        );
    }
    /**
     * Returns validators for RIGHTS_MODE field.
     *
     * @return array
     */
    public static function validateRightsMode()
    {
        return array(
            new Main\Entity\Validator\Length(null, 1),
        );
    }
    /**
     * Returns validators for SECTION_PROPERTY field.
     *
     * @return array
     */
    public static function validateSectionProperty()
    {
        return array(
            new Main\Entity\Validator\Length(null, 1),
        );
    }
    /**
     * Returns validators for PROPERTY_INDEX field.
     *
     * @return array
     */
    public static function validatePropertyIndex()
    {
        return array(
            new Main\Entity\Validator\Length(null, 1),
        );
    }
    /**
     * Returns validators for EDIT_FILE_BEFORE field.
     *
     * @return array
     */
    public static function validateEditFileBefore()
    {
        return array(
            new Main\Entity\Validator\Length(null, 255),
        );
    }
    /**
     * Returns validators for EDIT_FILE_AFTER field.
     *
     * @return array
     */
    public static function validateEditFileAfter()
    {
        return array(
            new Main\Entity\Validator\Length(null, 255),
        );
    }
    /**
     * Returns validators for SECTIONS_NAME field.
     *
     * @return array
     */
    public static function validateSectionsName()
    {
        return array(
            new Main\Entity\Validator\Length(null, 100),
        );
    }
    /**
     * Returns validators for SECTION_NAME field.
     *
     * @return array
     */
    public static function validateSectionName()
    {
        return array(
            new Main\Entity\Validator\Length(null, 100),
        );
    }
    /**
     * Returns validators for ELEMENTS_NAME field.
     *
     * @return array
     */
    public static function validateElementsName()
    {
        return array(
            new Main\Entity\Validator\Length(null, 100),
        );
    }
    /**
     * Returns validators for ELEMENT_NAME field.
     *
     * @return array
     */
    public static function validateElementName()
    {
        return array(
            new Main\Entity\Validator\Length(null, 100),
        );
    }
}

?>