<?php

require_once('admin/config.php');

//print '<pre>';
//print_r($_POST);
//print '<pre>';

	function strip_tags_deep($value)
{
  return is_array($value) ?
    array_map('strip_tags_deep', $value) :
    strip_tags($value);
}
$_POST = strip_tags_deep($_POST);

function xss_clean($data)
{
	// Fix &entity\n;
	$data = str_replace(array('&amp;','&lt;','&gt;'), array('&amp;amp;','&amp;lt;','&amp;gt;'), $data);
	$data = preg_replace('/(&#*\w+)[\x00-\x20]+;/u', '$1;', $data);
	$data = preg_replace('/(&#x*[0-9A-F]+);*/iu', '$1;', $data);
	$data = html_entity_decode($data, ENT_COMPAT, 'UTF-8');
	
	// Remove any attribute starting with "on" or xmlns
	$data = preg_replace('#(<[^>]+?[\x00-\x20"\'])(?:on|xmlns)[^>]*+>#iu', '$1>', $data);
	
	// Remove javascript: and vbscript: protocols
	$data = preg_replace('#([a-z]*)[\x00-\x20]*=[\x00-\x20]*([`\'"]*)[\x00-\x20]*j[\x00-\x20]*a[\x00-\x20]*v[\x00-\x20]*a[\x00-\x20]*s[\x00-\x20]*c[\x00-\x20]*r[\x00-\x20]*i[\x00-\x20]*p[\x00-\x20]*t[\x00-\x20]*:#iu', '$1=$2nojavascript...', $data);
	$data = preg_replace('#([a-z]*)[\x00-\x20]*=([\'"]*)[\x00-\x20]*v[\x00-\x20]*b[\x00-\x20]*s[\x00-\x20]*c[\x00-\x20]*r[\x00-\x20]*i[\x00-\x20]*p[\x00-\x20]*t[\x00-\x20]*:#iu', '$1=$2novbscript...', $data);
	$data = preg_replace('#([a-z]*)[\x00-\x20]*=([\'"]*)[\x00-\x20]*-moz-binding[\x00-\x20]*:#u', '$1=$2nomozbinding...', $data);
	
	// Only works in IE: <span style="width: expression(alert('Ping!'));"></span>
	$data = preg_replace('#(<[^>]+?)style[\x00-\x20]*=[\x00-\x20]*[`\'"]*.*?expression[\x00-\x20]*\([^>]*+>#i', '$1>', $data);
	$data = preg_replace('#(<[^>]+?)style[\x00-\x20]*=[\x00-\x20]*[`\'"]*.*?behaviour[\x00-\x20]*\([^>]*+>#i', '$1>', $data);
	$data = preg_replace('#(<[^>]+?)style[\x00-\x20]*=[\x00-\x20]*[`\'"]*.*?s[\x00-\x20]*c[\x00-\x20]*r[\x00-\x20]*i[\x00-\x20]*p[\x00-\x20]*t[\x00-\x20]*:*[^>]*+>#iu', '$1>', $data);
	
	// Remove namespaced elements (we do not need them)
	$data = preg_replace('#</*\w+:\w[^>]*+>#i', '', $data);
	
	do
	{
			// Remove really unwanted tags
			$old_data = $data;
			$data = preg_replace('#</*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|i(?:frame|layer)|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|title|xml)[^>]*+>#i', '', $data);
	}
	while ($old_data !== $data);
	
	// we are done...
	return $data;
}

$amount = number_format('30',2);
$firstname = isset($_POST['firstname']) ? $_POST['firstname'] : ""; 
$lastname = isset($_POST['lastname']) ? $_POST['lastname'] : ""; 
$address = isset($_POST['address']) ? $_POST['address'] : ""; 
$city = isset($_POST['city']) ? $_POST['city'] : ""; 
$state = isset($_POST['state']) ? $_POST['state'] : ""; 
$zip = isset($_POST['zip']) ? $_POST['zip'] : ""; 
$email = isset($_POST['email']) ? $_POST['email'] : "";
$phone = isset($_POST['phone']) ? $_POST['phone'] : "";
$university = isset($_POST['university']) ? $_POST['university'] : "";
$interpreter = isset($_POST['interpreter']) ? $_POST['interpreter'] : "No"; 


function writeToDB()
{	
	global $mysqli, $db_table, $content;

	global $amount, $referenceId, $firstname, $lastname, $address, $city, $state, $zip, $email, $phone, $university, $interpreter;
	
	$insertStatement = "INSERT INTO $db_table (first, last, address, city, state, zipcode, email, phone, university, interpreterNeeded, amount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

	//echo $insertStatement;
	$stmt = $mysqli->prepare($insertStatement);
	
	if (! $stmt) {
    echo "Error: ".$mysqli->error;
    exit;
}

	$stmt->bind_param('sssssssssss', $firstname, $lastname, $address, $city, $state, $zip, $email, $phone, $university, $interpreter, $amount);
	$stmt->execute();
	
	
	$numRows = $stmt->affected_rows;
	//echo $stmt->error;
	if($numRows < 0) $content .=   "there was an error inserting your data";
	$stmt->close();
}

function getNextTransNum()
{
	global $mysqli, $db_table;
	$selectQuery = "SELECT MAX(trans_num) FROM $db_table";
	$stmt = $mysqli->prepare($selectQuery);
	$stmt->execute();
	$stmt->bind_result($lastTransNum);
	$stmt->fetch();
	$stmt->close();
	return $lastTransNum+1;
}

function sendError($vError)
{
	global $content;
	$content .=  '<br />
	<div style=\"text-align:left\">
		<div style="padding: 20px;">';
	$content .=   $vError;
	$content .=   '
		</div>
	</div>';
}

	#CHANGE THIS TO MAKE MORE REQUIREMENTS
	function verifyFormData()
	{ 
		global $amount, $firstname,  $lastname,  $address, $city,  $state, $zip, $email, $phone, $university;
		
		if( $amount == '' || $firstname == '' ||  $lastname == '' ||  $address == '' || $city == '' ||  $state == '' || $zip == '' || $email == '' )
		{
			return 0; 
	    } 
		else 
		{
	        return 1;
	    }
	}
	
	
	if(verifyFormData())
	{
	$transNum = getNextTransNum();
	
	writeToDB();
	//processMail( "Credit Card");
	
	$redirectURL = "https://".$_SERVER['HTTP_HOST']."/success.php";
	$formData = "<form action=\"$formAction\" name=\"form\" method=\"POST\" id=\"payment\"  style = \"vertical-align:middle;margin:0;margin-bottom:2em;font-size: 1.2em;
    line-height: 1.5em;\">";


	$formData .= "<input type=\"hidden\" name=\"orderType\" value=\"ThoughtAtWork\">";
	
	
	$formData .= "<input type=\"hidden\" name=\"orderNumber\" value=\"$transNum\">
	<input type=\"hidden\" name=\"amount\" value=\"".str_replace(array(".",","),"",$amount)."\">
	<input type=\"hidden\" name=\"redirectUrl\" value=\"$redirectURL\">
	<input type=\"hidden\" name=\"email\" value=\"$email\">
	<input type=\"hidden\" name=\"redirectUrlParameters\" value=\"transactionStatus,transactionType,transactionId,originalTransactionId,orderNumber,transactionTotalAmount\">
	
	Payment amount: \$$amount <div class=\"form-button\" style=\"float:none;width:auto;display:block;vertical-align:middle;line-height:1.5em;top:-13px;left:25px;\"><input type=\"submit\" name=\"submit\" value=\"Proceed to Payment\" id=\"submit\" style=\"vertical-align:middle;float:none;\" \></div>
	</form>
	";
     	

	$content .= $formData;
	
	$autoSubmit = "\n\n<script>
	
	
					
					$(document).ready(function(){ 
					
					$('#payment').css('display', 'none');
					$('body').css('display', 'none');
					$('#submit').click();
					
					});
					
					
				  </script>";
	

} 
else 
{
    $errorMsg = '<b>The following fields are required and were not filled:</b><br />';

   if( $amount == '' ){ $errorMsg.="Amount<br />"; }
   if( $firstname == '' ){ $errorMsg.="First Name<br />"; }
   if( $lastname == '' ) { $errorMsg .= "Last Name<br />"; }
   if( $address == '' ){ $errorMsg.="Address<br />"; }
   if( $city == '' ){ $errorMsg.="City<br />"; }
   if( $state == '' ){ $errorMsg.="State<br />"; }
   if( $zip == '' ){ $errorMsg.="Zipcode<br />"; }
   if( $email == ''){ $errorMsg.="Email<br />"; }
   $errorMsg.= '<br /><a href="javascript:history.go(-1)">Go Back and Retry</a>';

   sendError($errorMsg);

}

function sendEmail($toAddress, $fromAddress, $subject, $body)
{
	mail($toAddress, $subject, $body, "From: $fromAddress\r\nContent-type: text/plain; charset=utf-8\r\n");
}


?>


<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Thought At Work</title>
    <meta name="description" content="Thought At Work | Industrial and Interaction Design Student Conference">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/main.css" type="text/css">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="js/bundle.js"></script>
	<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900' rel='stylesheet' type='text/css'>
	<link rel="icon" type="image/ico" href="favicon.ico">
</head>
<body style="height:100vh;">
       <nav>
           <a data-target="main-section" href="/"><img class="brand" src="img/Page_elements/brand.svg"></a>
           <ul class="desktop-nav">
               <!--<li><a href="/register.html">REGISTER</a></li>-->
               <li><a href="contact.html">CONTACT</a></li>
               <li><a href="travel.html">TRAVEL</a></li>
               <!--<li><a href="/schedule.html">SCHEDULE</a></li>-->
               <li><a href="info.html">INFO</a></li>
               <li><a href="index.html">HOME</a></li>
           </ul>
           <ul class="mobile-nav">
               <li><a>&#9776;</a></li>
           </ul>
       </nav>

    <a href="register"><div id="flag"></div></a>

     <section id="register" class="section-fullscreen light">
    	<div class="section-content">
    		<hgroup>
                <h1 style="margin-top: 60px;">ALMOST THERE</h1>
            </hgroup>

            <p style="margin-bottom:0px;">Thank you for completing the first step in your registration. To make your secure credit card payment, click the button below.</p>
            <p style="margin-bottom:50px;">Immediately after the payment transaction is processed, you will receive an email verifying the information you provided.</p>
    
    <?php


	//print '<pre>';print_r($_POST);print '</pre>';
	echo $content;

    ?>

    	</div>
     </section>

<!-- footer coded and stuff not responsive yet -->

<!-- first line: contact and socail media icons -->
<footer style="position:relative; bottom:0;">

    <div class = 'icons'>
        <div class = 'iconsbar'>
        <!---- !!!!!fix the names and resize this shit tommorow, also add the alt and size properties -->
        <a id = 'emailIcon' class = 'tiltLeft' href='#'><img src ='img/footer/email.png' height="24px"></a> 
        <a id = 'facebookIcon' class='tiltRight' href= 'https://www.facebook.com/ThoughtAtWork'><img src = 'img/footer/facebook.png' height="24"></a>
        <a id = 'twitterIcon' class = 'tiltLeft' href = 'https://twitter.com/taw_rit'><img src = 'img/footer/twitter.png' height="24"></a>
        </div>    

    </div>



    <!-- second row: suggestions, faq, get in touch -->
    <div class = 'list2'>
        <ul>
            <a href="http://thoughtatwork.cias.rit.edu/contact.html"><li>suggestions</li></a>
            <a id = 'fact' href="http://thoughtatwork.cias.rit.edu/faq.html"><li>FAQ</li></a>
            <a href = "http://thoughtatwork.cias.rit.edu/contact.html"><li>get in touch</li></a>
        </ul>    
    </div>    


    <!-- third row: appreciation -->
    <!-- !!!!!might not even need this div/ try without it -->
    <div class = 'justsometext'>
        <p id = 'thanks'>Special thanks to Lorraine Justice, Adam Smith, and Josh Owen</p>
    </div>

</footer>
</body>
</html>