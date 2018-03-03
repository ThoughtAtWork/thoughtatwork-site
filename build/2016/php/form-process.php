<?php
$fName = $_POST["fName"];
$lName = $_POST["lName"];
$email = $_POST["email"];
$concern = $_POST["concern"];
$message = $_POST["message"];

$EmailTo = "hello@thoughtatwork.org";

$Subject = "Thought At Work Contact Form Submission";

// prepare email body text
$Body .= "Name: ";
$Body .= $fName + " " + $lName;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Subject: ";
$Body .= $concern;
$Body .= "\n";

$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}

?>
