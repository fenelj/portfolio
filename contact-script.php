<?php

session_name("contactform");
session_start();


$_SESSION['n1'] = rand(1,20);
$_SESSION['n2'] = rand(1,20);
$_SESSION['expect'] = $_SESSION['n1']+$_SESSION['n2'];


$str='';
if($_SESSION['errStr'])
{
  $str='<div class="error">'.$_SESSION['errStr'].'</div>';
  unset($_SESSION['errStr']);
}

$success='';
if($_SESSION['sent'])
{
  $success='<h1>Thank you!</h1>';
  
  $css='<style type="text/css">#contact-form{display:none;}</style>';
  
  unset($_SESSION['sent']);
}
?>
