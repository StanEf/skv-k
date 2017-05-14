<?php
/**
 * Created by PhpStorm
 

 

 *
 * файл event.php
 */

namespace Skv\Lc;

class event
{
    public function eventHandler(\Bitrix\Main\Entity\Event $event)
    {
        //die();
        $result = new \Bitrix\Main\Entity\EventResult;

        echo'Тело события<br>';

        //$result = 'Сообщение вернул обработчик'; //Не правильно

        $result->modifyFields(array('result' => 'Сообщение вернул обработчик'));

        return $result;
    }
}