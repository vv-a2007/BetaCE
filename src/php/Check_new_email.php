<?php
/**
 * Created by PhpStorm.
 * User: vladimiranokhin
 * Date: 29.05.18
 * Time: 17:58
 */
global $mysqli;
if (!headers_sent()) {
    header('Access-Control-Allow-Origin: *');
}
$mysqli = new mysqli("localhost:3306", "vladimiranokhin", "vladimir2071654", "SiteCollection");

$email_check = [];

print_r($_GET['email']);

$query = "SELECT * FROM users WHERE email='".$_GET['email']."';";
$res = $mysqli->query($query);

if ($res!==false){
    $email_check['check'] = 0;
} else {
    $email_check['check'] = 1;
}


$json_string = json_encode($email_check);

echo $json_string;

?>