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

$answer=[];

$query = "INSERT INTO users  SET email='".$_POST['email']."', passw='".$_POST['passw']."';";
$res = $mysqli->query($query);

if ($res!==false){
    $email_check['id'] = mysqli_insert_id($mysqli);;
} else {
    $email_check['id'] = 0;
}


$json_string = json_encode($email_check);

echo $json_string;

?>