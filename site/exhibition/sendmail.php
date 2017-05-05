<?php
error_reporting(0);
$request = $_REQUEST;
$name = $request['name'];
$email = $request['email'];
$sendcheck = mail('info@primesoftpro.ru', 'Заявка на выставку онлайн', 'С лендинга осуществлена заявка на имя '.$name.'. Связаться можно по email - '.$email);
if ($sendcheck) {
    echo "<h4 style='color: black; width: 100%; display: inline-block; padding: 30px 10% 0px;'>Заявка успешно отправлена!</h4>";
} else {
    echo "<h4 style='color: black; width: 100%; display: inline-block; padding: 30px 10% 0px;'>Произошла ошибка</h4>";
}