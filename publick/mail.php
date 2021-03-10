<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $phone = htmlspecialchars($phone);

    $name = urldecode($name);
    $email = urldecode($email);
    $phone = urldecode($phone);

    $name = trim($name);
    $email = trim($email);
    $phone = trim($phone);

    if(mail("yaroslavberkuta@gmail.com",
            "Нове повідомлення",
            "Имя:".$name."\n".
            "E-mail:".$email."\n".
            "Номер:".$phone."\n",
            "From: no-reply@mydomain.gmail")
    )
?>