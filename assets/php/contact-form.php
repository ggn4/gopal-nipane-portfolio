<?php

$error = "";

$myemail = 'nipanegopal5@gmail.com';

if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['project']) || empty($_POST['message'])){
    $error = "\n Error:all fields are required";
    echo $error;
}

$name = $_POST['name'];
$email = $_POST['email'];
$project = $_POST['project'];
$message = $_POST['message'];


if(!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email)){
    $error .= "\n Error: Invalid email address";
    echo $error;
}

if(empty($error)){
    $to = $myemail;

    $email_subject = `Contact form submission: $name`;

    $email_body = "You have received a new message.".`Here are the details:\n Name: $name \n`.`Email: $email \n \nProject \n $project Message \n $message`;
    
    $headers = `From: $myemail \n`;

    $headers .=`Reply-To: $email`;

    if(mail($to,$email_subject,$email_body,$headers)){
        echo "Form submitted";
        
    }

    //redirect to the same page
    header("location: ../../index.html");
    
}
?>