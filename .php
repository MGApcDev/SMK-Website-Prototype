<?php
    $lang = $_GET['lang'];
    if($lang == 'eng'){
        include_once('index2.php');
    }else{
        include_once('index.php');
    }
?>