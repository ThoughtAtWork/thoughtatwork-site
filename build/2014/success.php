

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

	
	$message = "Thank you for registering for Thought at Work, a design student conference to be held Oct 24-26, 2014, at Rochester Institute of Technology.\n\nThe following is the information you provided:\n\n";
	
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
		
		sendEmail( $email, "Thought At Work <vedant@thoughtatwork.org>", 'Thought At Work Registration', $message );

		
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
    <title>Thought at Work</title>
    <meta name="description" content="Thought at Work | Industrial and Interaction Design Student Conference">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="new_css/normalize.css">
    <link rel="stylesheet" href="new_css/css_main.css">
    <link rel="stylesheet" href="new_css/index.css">
    <link rel="stylesheet" href="new_css/tablet.css" type="text/css" media="only screen and ( max-width: 780px )"/>
    <link rel="stylesheet" href="new_css/phone.css" type="text/css" media="only screen and ( max-width: 640px )"/>
    <link rel="stylesheet" href="new_css/small.css" type="text/css" media="only screen and ( max-width: 360px )"/>
    
    <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="js/main.js"></script>
	<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900' rel='stylesheet' type='text/css'>
	<link rel="icon" type="image/ico" href="favicon.ico">
</head>
<body>
    <a href="register"><div id="flag"></div></a>
   <section id="header">
        <div class="content">
            <a href="index"><div id="logo" class="home_nav"></div></a>
            <h1>THOUGHT AT WORK</h1>
            
            <div id="nav_bar">
                <a href="about.html" id="about_nav">About</a>
                <a href="history.html" id="history_nav">History</a>
                <a href="ourteam" id="team_nav">Our Team</a>
                <a href="schedule.html" id="schedule_nav">Schedule</a>
                <a href="travel.html" id="tavel_nav">Travel</a> 
                <a href="contact.html" id="contact_nav">Contact Us</a> 
                <a href="register" id="register_nav">Register</a> 
            </div>
            
            <div id="nav_btn"></div>
        </div>
    </section>
    
    <div id="nav_box">
                <a href="about.html" id="about_nav">About</a>
                <a href="history.html" id="history_nav">History</a>
                <a href="ourteam" id="team_nav">Our Team</a>
                <a href="schedule.html" id="schedule_nav">Schedule</a>
                <a href="travel.html" id="tavel_nav">Travel</a> 
                <a href="contact.html" id="contact_nav">Contact Us</a> 
                <a href="register" id="register_nav">Register</a> 
    </div>
    
     <section id="register" style = "bottom:0px;">
    	<div class="content">
   <p>&nbsp;</p> 
   <p>Thank You for Registering for ThoughtAtWork</p>
																				
	<p>Your payment has been processed successfully, and a confirmation email is on its way to you.</p>
    <?php print $message; ?>                                                                            
																				
    	</div>
     </section>
<div class="push"></div>
    </div>
   
<section id="footer">
        <div class="content">
            <div class="footer_text">
                <!-- <a href="register"><h2>Register</h2></a> -->
                    <h2>Info</h2>
                      <h3><a href="about">About</a><br>
                    <a href="history">History</a><br>
                    <a href="ourteam">Our Team</a><br>
                    <a href="schedule">Schedule</a><br>
                    <a href="travel">Travel</a><br>
                    <a href="register">Register</a>
                    </h3>
                <!-- <h3><a href="freebies">Freebies</a></h3> -->
            </div>
            <div class="footer_text">
                <h2>Connect</h2>
                <h3><a href="mailto:hello@thoughtatwork.org" target="_blank">E-mail</a><br>
                <a href="https://www.facebook.com/ThoughtAtWork?fref=ts" target="_blank">Facebook</a><br>
                <a href="https://twitter.com/thoughtatwork13" target="_blank">Twitter</a></h3>
            </div>
            <div class="footer_text">
                <h2>Interest in</h2>
                <h3>Sponsoring?<br>
                    Speaking?<br>
                    <span id="get_in_touch"><a href="mailto:mick@thoughtatwork.org" target="_blank">Get in Touch</a></h3></span>
            </div>
            <div class="footer_text">
                <h2>Special Thanks to</h2>
                <h3>Adam Smith<br>
                Josh Owen<br>
            </div>
        </div>
    </section>
</body>
</html>

