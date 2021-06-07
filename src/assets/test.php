<?php
header('Content-Type: text/javascript; charset=utf8');
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

//header("Access-Control-Allow-Headers: *");

$arr1[] = ["id" => "01","name" => "Маша"];
$arr1[] = ["id" => "02","name" => "Паша"];
$arr1[] = ["id" => "03","name" => "Гоша"];




$arr = [
    "MsgList" => $arr1];

print_r (json_encode($arr, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE));


?>
