<?php
 
require 'function.php';
global $db;

if (isset($_SESSION["login"])) {
    $id = $_SESSION["login"];
}else{
    header("Location: index.php");
}

$tz = 'Asia/Jakarta';
$dt = new DateTime("now", new DateTimeZone($tz));
$timestamp = $dt->format('Y-m-d G:i:s');
mysqli_query($db, "UPDATE riwayat_perjalanan SET checkout='$timestamp'");
mysqli_query($db,"DELETE FROM checkin WHERE id_user='$id'");
setcookie('checkin','',time()-86400);
setcookie('id','',time()-86400);
header("Location: index.php");
 
?>