<?
namespace Skv\Lc;
use \Bitrix\Main\Localization\Loc;
class UserTable extends \Bitrix\Main\Entity\DataManager
{
	/**
	 * Returns DB table name for entity.
	 *
	 * @return string
	 */
	public static function getTableName()
	{
		return 'b_user';
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
				'title' => Loc::getMessage('USER_ENTITY_ID_FIELD'),
			),
			'TIMESTAMP_X' => array(
				'data_type' => 'datetime',
				'required' => true,
				'title' => Loc::getMessage('USER_ENTITY_TIMESTAMP_X_FIELD'),
			),
			'LOGIN' => array(
				'data_type' => 'string',
				'required' => true,
				'validation' => array(__CLASS__, 'validateLogin'),
				'title' => Loc::getMessage('USER_ENTITY_LOGIN_FIELD'),
			),
			'PASSWORD' => array(
				'data_type' => 'string',
				'required' => true,
				'validation' => array(__CLASS__, 'validatePassword'),
				'title' => Loc::getMessage('USER_ENTITY_PASSWORD_FIELD'),
			),
			'CHECKWORD' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateCheckword'),
				'title' => Loc::getMessage('USER_ENTITY_CHECKWORD_FIELD'),
			),
			'ACTIVE' => array(
				'data_type' => 'boolean',
				'values' => array('N', 'Y'),
				'title' => Loc::getMessage('USER_ENTITY_ACTIVE_FIELD'),
			),
			'NAME' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateName'),
				'title' => Loc::getMessage('USER_ENTITY_NAME_FIELD'),
			),
			'LAST_NAME' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateLastName'),
				'title' => Loc::getMessage('USER_ENTITY_LAST_NAME_FIELD'),
			),
			'EMAIL' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateEmail'),
				'title' => Loc::getMessage('USER_ENTITY_EMAIL_FIELD'),
			),
			'LAST_LOGIN' => array(
				'data_type' => 'datetime',
				'title' => Loc::getMessage('USER_ENTITY_LAST_LOGIN_FIELD'),
			),
			'DATE_REGISTER' => array(
				'data_type' => 'datetime',
				'required' => true,
				'title' => Loc::getMessage('USER_ENTITY_DATE_REGISTER_FIELD'),
			),
			'LID' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateLid'),
				'title' => Loc::getMessage('USER_ENTITY_LID_FIELD'),
			),
			'PERSONAL_PROFESSION' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validatePersonalProfession'),
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_PROFESSION_FIELD'),
			),
			'PERSONAL_WWW' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validatePersonalWww'),
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_WWW_FIELD'),
			),
			'PERSONAL_ICQ' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validatePersonalIcq'),
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_ICQ_FIELD'),
			),
			'PERSONAL_GENDER' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validatePersonalGender'),
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_GENDER_FIELD'),
			),
			'PERSONAL_BIRTHDATE' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validatePersonalBirthdate'),
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_BIRTHDATE_FIELD'),
			),
			'PERSONAL_PHOTO' => array(
				'data_type' => 'integer',
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_PHOTO_FIELD'),
			),
			'PERSONAL_PHONE' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validatePersonalPhone'),
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_PHONE_FIELD'),
			),
			'PERSONAL_FAX' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validatePersonalFax'),
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_FAX_FIELD'),
			),
			'PERSONAL_MOBILE' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validatePersonalMobile'),
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_MOBILE_FIELD'),
			),
			'PERSONAL_PAGER' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validatePersonalPager'),
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_PAGER_FIELD'),
			),
			'PERSONAL_STREET' => array(
				'data_type' => 'text',
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_STREET_FIELD'),
			),
			'PERSONAL_MAILBOX' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validatePersonalMailbox'),
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_MAILBOX_FIELD'),
			),
			'PERSONAL_CITY' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validatePersonalCity'),
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_CITY_FIELD'),
			),
			'PERSONAL_STATE' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validatePersonalState'),
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_STATE_FIELD'),
			),
			'PERSONAL_ZIP' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validatePersonalZip'),
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_ZIP_FIELD'),
			),
			'PERSONAL_COUNTRY' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validatePersonalCountry'),
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_COUNTRY_FIELD'),
			),
			'PERSONAL_NOTES' => array(
				'data_type' => 'text',
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_NOTES_FIELD'),
			),
			'WORK_COMPANY' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateWorkCompany'),
				'title' => Loc::getMessage('USER_ENTITY_WORK_COMPANY_FIELD'),
			),
			'WORK_DEPARTMENT' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateWorkDepartment'),
				'title' => Loc::getMessage('USER_ENTITY_WORK_DEPARTMENT_FIELD'),
			),
			'WORK_POSITION' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateWorkPosition'),
				'title' => Loc::getMessage('USER_ENTITY_WORK_POSITION_FIELD'),
			),
			'WORK_WWW' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateWorkWww'),
				'title' => Loc::getMessage('USER_ENTITY_WORK_WWW_FIELD'),
			),
			'WORK_PHONE' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateWorkPhone'),
				'title' => Loc::getMessage('USER_ENTITY_WORK_PHONE_FIELD'),
			),
			'WORK_FAX' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateWorkFax'),
				'title' => Loc::getMessage('USER_ENTITY_WORK_FAX_FIELD'),
			),
			'WORK_PAGER' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateWorkPager'),
				'title' => Loc::getMessage('USER_ENTITY_WORK_PAGER_FIELD'),
			),
			'WORK_STREET' => array(
				'data_type' => 'text',
				'title' => Loc::getMessage('USER_ENTITY_WORK_STREET_FIELD'),
			),
			'WORK_MAILBOX' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateWorkMailbox'),
				'title' => Loc::getMessage('USER_ENTITY_WORK_MAILBOX_FIELD'),
			),
			'WORK_CITY' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateWorkCity'),
				'title' => Loc::getMessage('USER_ENTITY_WORK_CITY_FIELD'),
			),
			'WORK_STATE' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateWorkState'),
				'title' => Loc::getMessage('USER_ENTITY_WORK_STATE_FIELD'),
			),
			'WORK_ZIP' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateWorkZip'),
				'title' => Loc::getMessage('USER_ENTITY_WORK_ZIP_FIELD'),
			),
			'WORK_COUNTRY' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateWorkCountry'),
				'title' => Loc::getMessage('USER_ENTITY_WORK_COUNTRY_FIELD'),
			),
			'WORK_PROFILE' => array(
				'data_type' => 'text',
				'title' => Loc::getMessage('USER_ENTITY_WORK_PROFILE_FIELD'),
			),
			'WORK_LOGO' => array(
				'data_type' => 'integer',
				'title' => Loc::getMessage('USER_ENTITY_WORK_LOGO_FIELD'),
			),
			'WORK_NOTES' => array(
				'data_type' => 'text',
				'title' => Loc::getMessage('USER_ENTITY_WORK_NOTES_FIELD'),
			),
			'ADMIN_NOTES' => array(
				'data_type' => 'text',
				'title' => Loc::getMessage('USER_ENTITY_ADMIN_NOTES_FIELD'),
			),
			'STORED_HASH' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateStoredHash'),
				'title' => Loc::getMessage('USER_ENTITY_STORED_HASH_FIELD'),
			),
			'XML_ID' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateXmlId'),
				'title' => Loc::getMessage('USER_ENTITY_XML_ID_FIELD'),
			),
			'PERSONAL_BIRTHDAY' => array(
				'data_type' => 'date',
				'title' => Loc::getMessage('USER_ENTITY_PERSONAL_BIRTHDAY_FIELD'),
			),
			'EXTERNAL_AUTH_ID' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateExternalAuthId'),
				'title' => Loc::getMessage('USER_ENTITY_EXTERNAL_AUTH_ID_FIELD'),
			),
			'CHECKWORD_TIME' => array(
				'data_type' => 'datetime',
				'title' => Loc::getMessage('USER_ENTITY_CHECKWORD_TIME_FIELD'),
			),
			'SECOND_NAME' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateSecondName'),
				'title' => Loc::getMessage('USER_ENTITY_SECOND_NAME_FIELD'),
			),
			'CONFIRM_CODE' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateConfirmCode'),
				'title' => Loc::getMessage('USER_ENTITY_CONFIRM_CODE_FIELD'),
			),
			'LOGIN_ATTEMPTS' => array(
				'data_type' => 'integer',
				'title' => Loc::getMessage('USER_ENTITY_LOGIN_ATTEMPTS_FIELD'),
			),
			'LAST_ACTIVITY_DATE' => array(
				'data_type' => 'datetime',
				'title' => Loc::getMessage('USER_ENTITY_LAST_ACTIVITY_DATE_FIELD'),
			),
			'AUTO_TIME_ZONE' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateAutoTimeZone'),
				'title' => Loc::getMessage('USER_ENTITY_AUTO_TIME_ZONE_FIELD'),
			),
			'TIME_ZONE' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateTimeZone'),
				'title' => Loc::getMessage('USER_ENTITY_TIME_ZONE_FIELD'),
			),
			'TIME_ZONE_OFFSET' => array(
				'data_type' => 'integer',
				'title' => Loc::getMessage('USER_ENTITY_TIME_ZONE_OFFSET_FIELD'),
			),
			'TITLE' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateTitle'),
				'title' => Loc::getMessage('USER_ENTITY_TITLE_FIELD'),
			),
			'BX_USER_ID' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateBxUserId'),
				'title' => Loc::getMessage('USER_ENTITY_BX_USER_ID_FIELD'),
			),
			'LANGUAGE_ID' => array(
				'data_type' => 'string',
				'validation' => array(__CLASS__, 'validateLanguageId'),
				'title' => Loc::getMessage('USER_ENTITY_LANGUAGE_ID_FIELD'),
			),
		);
	}
	/**
	 * Returns validators for LOGIN field.
	 *
	 * @return array
	 */
	public static function validateLogin()
	{
		return array(
			new Main\Entity\Validator\Length(null, 50),
		);
	}
	/**
	 * Returns validators for PASSWORD field.
	 *
	 * @return array
	 */
	public static function validatePassword()
	{
		return array(
			new Main\Entity\Validator\Length(null, 50),
		);
	}
	/**
	 * Returns validators for CHECKWORD field.
	 *
	 * @return array
	 */
	public static function validateCheckword()
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
			new Main\Entity\Validator\Length(null, 50),
		);
	}
	/**
	 * Returns validators for LAST_NAME field.
	 *
	 * @return array
	 */
	public static function validateLastName()
	{
		return array(
			new Main\Entity\Validator\Length(null, 50),
		);
	}
	/**
	 * Returns validators for EMAIL field.
	 *
	 * @return array
	 */
	public static function validateEmail()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
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
	 * Returns validators for PERSONAL_PROFESSION field.
	 *
	 * @return array
	 */
	public static function validatePersonalProfession()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for PERSONAL_WWW field.
	 *
	 * @return array
	 */
	public static function validatePersonalWww()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for PERSONAL_ICQ field.
	 *
	 * @return array
	 */
	public static function validatePersonalIcq()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for PERSONAL_GENDER field.
	 *
	 * @return array
	 */
	public static function validatePersonalGender()
	{
		return array(
			new Main\Entity\Validator\Length(null, 1),
		);
	}
	/**
	 * Returns validators for PERSONAL_BIRTHDATE field.
	 *
	 * @return array
	 */
	public static function validatePersonalBirthdate()
	{
		return array(
			new Main\Entity\Validator\Length(null, 50),
		);
	}
	/**
	 * Returns validators for PERSONAL_PHONE field.
	 *
	 * @return array
	 */
	public static function validatePersonalPhone()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for PERSONAL_FAX field.
	 *
	 * @return array
	 */
	public static function validatePersonalFax()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for PERSONAL_MOBILE field.
	 *
	 * @return array
	 */
	public static function validatePersonalMobile()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for PERSONAL_PAGER field.
	 *
	 * @return array
	 */
	public static function validatePersonalPager()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for PERSONAL_MAILBOX field.
	 *
	 * @return array
	 */
	public static function validatePersonalMailbox()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for PERSONAL_CITY field.
	 *
	 * @return array
	 */
	public static function validatePersonalCity()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for PERSONAL_STATE field.
	 *
	 * @return array
	 */
	public static function validatePersonalState()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for PERSONAL_ZIP field.
	 *
	 * @return array
	 */
	public static function validatePersonalZip()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for PERSONAL_COUNTRY field.
	 *
	 * @return array
	 */
	public static function validatePersonalCountry()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for WORK_COMPANY field.
	 *
	 * @return array
	 */
	public static function validateWorkCompany()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for WORK_DEPARTMENT field.
	 *
	 * @return array
	 */
	public static function validateWorkDepartment()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for WORK_POSITION field.
	 *
	 * @return array
	 */
	public static function validateWorkPosition()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for WORK_WWW field.
	 *
	 * @return array
	 */
	public static function validateWorkWww()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for WORK_PHONE field.
	 *
	 * @return array
	 */
	public static function validateWorkPhone()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for WORK_FAX field.
	 *
	 * @return array
	 */
	public static function validateWorkFax()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for WORK_PAGER field.
	 *
	 * @return array
	 */
	public static function validateWorkPager()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for WORK_MAILBOX field.
	 *
	 * @return array
	 */
	public static function validateWorkMailbox()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for WORK_CITY field.
	 *
	 * @return array
	 */
	public static function validateWorkCity()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for WORK_STATE field.
	 *
	 * @return array
	 */
	public static function validateWorkState()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for WORK_ZIP field.
	 *
	 * @return array
	 */
	public static function validateWorkZip()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for WORK_COUNTRY field.
	 *
	 * @return array
	 */
	public static function validateWorkCountry()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for STORED_HASH field.
	 *
	 * @return array
	 */
	public static function validateStoredHash()
	{
		return array(
			new Main\Entity\Validator\Length(null, 32),
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
	 * Returns validators for EXTERNAL_AUTH_ID field.
	 *
	 * @return array
	 */
	public static function validateExternalAuthId()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for SECOND_NAME field.
	 *
	 * @return array
	 */
	public static function validateSecondName()
	{
		return array(
			new Main\Entity\Validator\Length(null, 50),
		);
	}
	/**
	 * Returns validators for CONFIRM_CODE field.
	 *
	 * @return array
	 */
	public static function validateConfirmCode()
	{
		return array(
			new Main\Entity\Validator\Length(null, 8),
		);
	}
	/**
	 * Returns validators for AUTO_TIME_ZONE field.
	 *
	 * @return array
	 */
	public static function validateAutoTimeZone()
	{
		return array(
			new Main\Entity\Validator\Length(null, 1),
		);
	}
	/**
	 * Returns validators for TIME_ZONE field.
	 *
	 * @return array
	 */
	public static function validateTimeZone()
	{
		return array(
			new Main\Entity\Validator\Length(null, 50),
		);
	}
	/**
	 * Returns validators for TITLE field.
	 *
	 * @return array
	 */
	public static function validateTitle()
	{
		return array(
			new Main\Entity\Validator\Length(null, 255),
		);
	}
	/**
	 * Returns validators for BX_USER_ID field.
	 *
	 * @return array
	 */
	public static function validateBxUserId()
	{
		return array(
			new Main\Entity\Validator\Length(null, 32),
		);
	}
	/**
	 * Returns validators for LANGUAGE_ID field.
	 *
	 * @return array
	 */
	public static function validateLanguageId()
	{
		return array(
			new Main\Entity\Validator\Length(null, 2),
		);
	}
}