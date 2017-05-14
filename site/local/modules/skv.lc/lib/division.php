<?php
/**
 * Created by PhpStorm
 

 

 *
 * файл division.php
 */

namespace Skv\Lc;

class Division
{
    public static function divided($parameters1 = 0, $parameters2 = 0)
    {
        if($parameters2===0)
            throw new DivisionError('Деление на ноль',$parameters1,$parameters2);

        $result = $parameters1/$parameters2;
        return $result;
    }
}
