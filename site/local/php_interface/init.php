<?php
/**
 * Created by PhpStorm
 * User: Sergey Pokoev
 * www.pokoev.ru
 * @ Академия 1С-Битрикс - 2015
 * @ academy.1c-bitrix.ru
 *
 * файл init.php
 */
// Используем в 17 уроке
\Bitrix\Main\EventManager::getInstance()->addEventHandler('academy.d7', '\Academy\D7\Book::OnBeforeAdd', Array("MyClass", "MyOrmEvent"));
//В случае, если нужно зарегистрировать обработчик "по старому". Тогда вернется в обработчик не объект, а массив.
//\Bitrix\Main\EventManager::getInstance()->addEventHandlerCompatible('academy.d7', '\Academy\D7\Book::OnBeforeAdd', Array("MyClass", "MyOrmEvent"));

class MyClass
{
    static public function MyOrmEvent(\Bitrix\Main\Entity\Event $event)
    {
        $fields = $event->getParameter("fields");

        echo'<pre>';
        echo'Обработчик события из файла init.php
        ';
        var_dump($fields);
        echo'</pre>';
    }
}
