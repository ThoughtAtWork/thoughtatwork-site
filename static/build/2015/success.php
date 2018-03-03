

<?php
//Need correct CC number
//Need to know how to retrieve transNum
require_once('admin/config.php');
$curDT = date('c');


$transStatus = isset($_POST['transactionStatus']) ? $_POST['transactionStatus'] : (isset($_GET['transactionStatus']) ? $_GET['transactionStatus'] : "");
$newTransNum = isset($_POST['transactionId']) ? $_POST['transactionId'] : (isset($_GET['transactionId']) ? $_GET['transactionId'] : "");
$originalTransNo = isset($_POST['orderNumber']) ? $_POST['orderNumber'] : (isset($_GET['orderNumber']) ? $_GET['orderNumber'] : "");

//original transactionid = what transaction id we sent
//transaction id = their transaction id


switch($transStatus)
{
	case 1:
		$status = "Accepted credit card payment/refund (successful).";
		$transText = "1 - Accepted";
		updateDB($transStatus, $transText);

		break;
	case 2:
		$status = "Rejected credit card payment/refund (declined).";
		$transText = "2 - Rejected";
		updateDB($transStatus, $transText);

		break;
	case 3:
		$status =  "Error credit car payment/refund (error).";
		$transText = "3 - Error";
		updateDB($transStatus, $transText);

		break;
	case 4:
		$status  = "Unkown credit car payment/refund (unknown).";
		$transText = "4 - Unknown credit card";
		updateDB($transStatus, $transText);

		break;
	case 5:
		$status =  "Accepted eCheck payment (successful).";
		$transText = "5 - Accepted eCheck";
		updateDB($transStatus, $transText);

		break;
	case 6:
		$status = "Posted eCheck payment (successful).";
		$transText = "6 - Posted eCheck";
		updateDB($transStatus, $transText);
		break;
	case 7:
		$status = "Returned eCheck payment (failed).";
		$transText = "7 - Returned eCheck";
		updateDB($transStatus, $transText);
		break;
	case 8:
		$status = "NOC eCheck payment (successful).";
		$transText = "8 - NOC";
		updateDB($transStatus, $transText);

		break;
	default:
		$status = "Unknown status.";
		break;
}

//echo $status;

function updateDB($transStatus, $transText)
{
	global $mysqli, $db_table, $originalTransNo, $newTransNum;

	if($transStatus == 1 || $transStatus == 5 || $transStatus == 6 || $transStatus == 8)
	{
		$updateStatement = "UPDATE $db_table SET refID = ? WHERE trans_num = ?";

		$stmt = $mysqli->prepare($updateStatement);
		$stmt->bind_param('ss', $newTransNum, $originalTransNo);
		$stmt->execute();
		//echo "<br />Errors: ".$stmt->error." <br />";
		//if($stmt->affected_rows < 1) echo "<br />There was an error updating your data into the database.";
		//else echo "updated ".$stmt->affected_rows." rows";
		$stmt->close();
		processMail( "Credit Card");
	}
}
function processMail($money_type)
{
	global $mysqli, $db_table, $originalTransNo, $newTransNum;

	$payroll = "";

	global $mysqli, $db_table;
	$selectQuery = "SELECT * FROM $db_table WHERE trans_num = ?";
	//echo $selectQuery;
	//echo "original transno: $originalTransNo";
	$stmt = $mysqli->prepare($selectQuery);
	$stmt->bind_param("s", $originalTransNo);
	$stmt->execute();
	$stmt->bind_result($trans_num, $timestamp, $refID, $recordId, $firstname, $lastname, $address, $city, $state, $zip, $email, $phone, $university, $interpreter, $amount, $mailSent);
	$stmt->fetch();
	$stmt->close();

	
	$message = "Thank you for registering for Thought At Work, a design student conference to be held Oct 23-25, 2015, at Rochester Institute of Technology.\n\nThe following is the information you provided:\n\n";
	
	$message .= "Name: " . $firstname .  " " . $lastname . "\n";
	$message .= "Address:\n";
	$message .= $address . "\n";
	$message .= $city . ", " . $state . " " . $zip . "\n\n";
	if($phone != "") $message .= "Phone: " . $phone . "\n";
	if($email != "") $message .= "E-mail: " . $email . "\n";
	if($university != "") $message .= "University: " . $university . "\n";
	if($interpreter != "") $message .= "Interpreter Requested: " . $interpreter . "\n";
	$message .= "Amount Paid: $30\n";
	$message .= "\nVisit the conference website here: http://thoughtatwork.cias.rit.edu";
	

	

	//only send the email if it hasn't already been sent
	if($mailSent != 1) {

		$testerEmail = "gpltwc@rit.edu";
		$adminEmail;

		# Customized Thank You Email
		
		sendEmail( $email, "Thought At Work <hello@thoughtatwork.org>", 'Thought At Work Registration', $message );

		
		//echo  $message2;


		$debug_info = print_r($_SERVER, true)."\n";
		$debug_info .= print_r($_REQUEST, true);
		global $curDT;
		$debug_info .=  $curDT . '<hr />' . $debug_info;
		$debug_info .=  "<p>Previous page: $previousPage";
		$debug_info .=  "<p style=\"color:#ffffff\">Message 1<br />$message";
		$debug_info .=  "<p style=\"color:#ffffff\">Message 2<br />$message2";
		//echo $debug_info;
		//sendEmail("dan14lev@gmail.com", "Fund for RIT <giving@rit.edu>", 'New Donation '.$curDT, $debug_info);

		//update the database to indicate that mail message has been sent
		$stmt = $mysqli->stmt_init();
		$updateStatement = "UPDATE $db_table SET mailSent = 1 WHERE trans_num = ?";
		$stmt->prepare($updateStatement);
		$stmt->bind_param('s', $originalTransNo);
		$stmt->execute();
		$stmt->close();
	}
}
function sendEmail($toAddress, $fromAddress, $subject, $body)
{
	mail($toAddress, $subject, $body);
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
               <li><a href="/register.html">REGISTER</a></li>
               <li><a href="contact.html">CONTACT</a></li>
               <li><a href="travel.html">TRAVEL</a></li>
               <li><a href="/schedule.html">SCHEDULE</a></li>
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
                <h1 style="margin-top: 60px;">THANK YOU</h1>
            </hgroup>

            <p style="margin-bottom:0px;">Thank You for registering for Thought At Work!</p>
            <p style="margin-bottom:50px;">Your payment has been processed successfully, and a confirmation email is on its way to you.</p>
            <?php print $message; ?> 

    
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