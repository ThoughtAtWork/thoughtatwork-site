<?php
  header('Location: register.php');
  use RIT\Prod\Nelnet as Nelnet;

  require_once('admin/config.php');
  require_once("nelnet-library/src/autoload.php");
  $curDT = date('c');

  $freeOrder = false;
  $transNum = '';
  if(isset($_GET['freeSuccess'])){

    $transStatus = 10;
    $newTransNum = "0 - Free Order using Coupon Code Free0TAW16";
    $originalTransNo = $_GET['freeSuccess'];


    $freeOrder = true;

  }else{

    $nelnet = new Nelnet\Nelnet();
    $nelnet->sharedSecret = $hashCode;
    $response = $nelnet->buildResponse($_GET);

    if( $response->validate()){

      //print '<pre>';print_r($response); print '</pre>';

      $originalTransNo = $response->orderNumber;
      $newTransNum = $response->transactionId;
      $transStatus = $response->transactionStatus;
      $transactionTotalAmount = $response->transactionTotalAmount;

    }



    /*$transStatus = isset($_POST['transactionStatus']) ? $_POST['transactionStatus'] : (isset($_GET['transactionStatus']) ? $_GET['transactionStatus'] : "");
    $newTransNum = isset($_POST['transactionId']) ? $_POST['transactionId'] : (isset($_GET['transactionId']) ? $_GET['transactionId'] : "");
    $originalTransNo = isset($_POST['orderNumber']) ? $_POST['orderNumber'] : (isset($_GET['orderNumber']) ? $_GET['orderNumber'] : "");*/

  }

  if($freeOrder){

    $transStatus = '10';
    $transText = "Free Order using Coupon Code Free0TAW16";
    updateDB($transStatus, $transText);

  }else if(isset($transStatus)){

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

  }

  function updateDB($transStatus, $transText)
  {
  	global $mysqli, $db_table, $originalTransNo, $newTransNum;

  	if($transStatus == 1 || $transStatus == 5 || $transStatus == 6 || $transStatus == 8 || $transStatus == 10)
  	{
  		$updateStatement = "UPDATE $db_table SET refID = ? WHERE trans_num = ?";

  		$stmt = $mysqli->prepare($updateStatement);
  		$stmt->bind_param('ss', $newTransNum, $originalTransNo);
  		$stmt->execute();
  		//echo "<br />Errors: ".$stmt->error." <br />";
  		//if($stmt->affected_rows < 1) echo "<br />There was an error updating your data into the database.";
  		//else echo "updated ".$stmt->affected_rows." rows";
  		$stmt->close();
  		processMail("Credit Card");
  	}
  }
  function processMail($money_type)
  {
  	global $mysqli, $db_table, $originalTransNo, $newTransNum;

  	$selectQuery = "SELECT * FROM $db_table WHERE trans_num = ?";
  	//echo $selectQuery;
  	//echo "original transno: $originalTransNo";
  	$stmt = $mysqli->prepare($selectQuery);
  	$stmt->bind_param("s", $originalTransNo);
  	$stmt->execute();
  	$stmt->bind_result($trans_num, $timestamp, $refID, $recordId, $firstname, $lastname, $address, $city, $state, $zip, $email, $phone, $university, $title, $dietary, $interpreter, $amount, $mailSent);
  	$stmt->fetch();
  	$stmt->close();


  	$message = "Thank you for registering for Thought At Work, a design student conference to be held Oct 21-23, 2016, at Rochester Institute of Technology.\n\nThe following is the information you provided:\n\n";

  	$message .= "Name: " . $firstname .  " " . $lastname . "\n";
  	$message .= "Address:\n";
  	$message .= $address . "\n";
  	$message .= $city . ", " . $state . " " . $zip . "\n\n";
  	if($phone != "") $message .= "Phone: " . $phone . "\n";
  	if($email != "") $message .= "E-mail: " . $email . "\n";
  	if($university != "") $message .= "University or Employer: " . $university . "\n";
    if($title != "") $message .= "Major or Job Title: " . $title . "\n";
    if($dietary != "") $message .= "Dietary Needs: " . $dietary . "\n";
  	if($interpreter != "") $message .= "Interpreter Requested: " . $interpreter . "\n";
  	$message .= "Amount Paid: $".$amount."\n";
  	$message .= "\nVisit the conference website here: http://thoughtatwork.cias.rit.edu";




  	//only send the email if it hasn't already been sent
  	if($mailSent != 1) {

  		$testerEmail = "gpltwc@rit.edu";
  		$adminEmail = "hello@thoughtatwork.org";
      $from = "Thought At Work <hello@thoughtatwork.org>";
      $headers = 'From: ' . $from . "\r\n";

  		# Customized Thank You Email

  		sendEmail( $email, $from, 'Thought At Work Registration', $message );
      sendEmail( $adminEmail, $from, 'Thought At Work Registration', $message );
      //sendEmail( $testerEmail, $from, 'Thought At Work Registration', $message );

  		$debug_info = print_r($_SERVER, true)."\n";
  		$debug_info .= print_r($_REQUEST, true);
  		global $curDT;
  		$debug_info .=  $curDT . '<hr />' . $debug_info;
  		//$debug_info .=  "<p>Previous page: $previousPage";
  		$debug_info .=  "<p style=\"color:#ffffff\">Message 1<br />$message";
  		//$debug_info .=  "<p style=\"color:#ffffff\">Message 2<br />$message2";
  		//echo $debug_info;
  		//sendEmail($testerEmail, $from, 'Thought at Work Debug '.$curDT, $debug_info);

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

    $headers = 'From: ' . $fromAddress . "\r\n";
  	mail($toAddress, $subject, $body, $headers);
  }

?>

<!DOCTYPE html>
<html lang="en">
	<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Thought At Work - Register</title>
  <meta name="description" content="Our Website">
  <meta name="author" content="Thought at Work">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/register.css">

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="img/favicon.png">


<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

<!-- Jquery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

<!-- <script src="../constantlyUpdatingScript.js"></script> -->

	</head>
	<body>
        <!--Web Team

    Spiritual Leader:Jacob Frank
    Moral Support: Cole Johnson
    Loopy Lady: Amy Pham
    Dude With Beard: Conner Hasbrouck

    In Loving Memory of Sara Artese
-->
<nav id="nav-background-color" class="navbar navbar-fixed-top p-a-9 nav" role="navigation">
    <div class="container-fluid navColorChange">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand title p-l-12 mobile-hide" href="index.php"><div class="tempHover">Thought at Work</div></a>
        </div>
        <div id="menu" class="navbar-collapse collapse navbar-inner pull-right drop-down" >
            <span class="x">
            <button type="button" class="navbar-toggle exit" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <i class="close" aria-hidden="true"></i>
            </button>
            </span>
            <ul class="nav navbar-nav navbar-right p-r-9 mobile-center menu-pad">
                <li class="mobile-home"><a href="index.php">Home</a></li>
                <li><a href="speakers.php">Speakers</a></li>
                <li><a href="schedule.php">Schedule</a></li>
                <li class="text-nowrap"><a href="getready.php">Get Ready</a></li>
                <li class="text-nowrap"><a href="about.php">About Us</a></li>
               <li><a href="contact.php">Contact</a></li>
               <li><a class="nav-register menu-pad" href="register.php">Register</a></li>
            </ul>
        </div>
    </div>
</nav>

<!--Underline effect for current page in nav-->
<script>
    $('.nav').find('a').each(function(){
        var href = document.location.href;
        var fileName = href.substr(href.lastIndexOf('/') + 1);
        if($(this).attr('href') == fileName && fileName != "index.php"){
            if(fileName == "register.php")
                $(this).addClass('currentRegister');
            else
                $(this).addClass('currentPage');
        }
    });
</script>

 <!--  -->
		<!-- HEADER / SPLASH -->
		<div class="container-fluid about-splash-words">
			<div class="row">
				<div class="col-lg-12 ">
					<h1 class="title">Success</h1>
				</div>
			</div>
		</div>
     <div class="navOff"></div>

    <div class="container-fluid contact-top-buffer about-mobile-top">
      <div class="row about-margins">
        <div class="col-lg-10 col-md-offset-1">

          <?php if(isset($transStatus) && ($transStatus == 1 || $transStatus == 5 || $transStatus == 6 || $transStatus == 8 || $transStatus == 10)){ ?>

            <div class = "elliot" style= "text-align:center;">

              <h2 class = "confirm-heading">Thank You For Registering!</h2>
              <p class = "checkmark"><img src = "img/confirm_check.png" /></p>
              <p class = "confirm-email">You will be receiving a confirmation email from <a href = "mailto:hello@thoughtatwork.org">hello@thoughtatwork.org</a></p>
              <p class = "confirm-action"><a href = "getready.php">Getting Ready &#8594;</a></p>

            </div>

          <?php }else{ ?>

            <div class = "elliot" style= "text-align:center;">

              <h2 class = "confirm-heading">There was a problem processing your order.</h2>
              <p class = "confirm-email">Please contact <a href = "mailto:hello@thoughtatwork.org">hello@thoughtatwork.org</a></p>

            </div>

          <?php } ?>

        </div>
      </div>
    </div>


    <script src="js/contactScript.js"></script>
        <!--- Footer Include-->
		<!-- SPONSORS -->
<div class="container-fluid sponsors tablet-top">
<div class="row sponsor-top">
<!--Because tiny fish is currently not a spnsor they've been removed but this code is still here just in case-->
<div class="center-mid">
<div class="col-sm-3 firstRow-sponsor-images">
    <a href="https://www.keyshot.com/" target="_blank">
   <img class="sponsor-img" src="img/sponsor-logos-01.png" />
    </a>
        </div>
<div class="col-sm-3">
    <a href="http://www.autodesk.com" target="_blank">
   <img class="sponsor-img" src="img/sponsor-logos-02.png" />
    </a>
</div>
<div class="col-sm-3  firstRow-sponsor-images">
    <a href="http://www.core77.com/" target="_blank">
   <img class="sponsor-img" src="img/sponsor-logos-03.png" />
    </a>
</div>
<div class="col-sm-3">
    <a href="http://fitc.ca/" target="_blank">
   <img class="sponsor-img" src="img/sponsor-logos-04.png" />
    </a>
</div>
</div>
</div>
<div class="row sponsor-top mobile-remove-sponsor-top">
<div class="center-mid">
   <div class="col-sm-3 firstRow-sponsor-images">
       <a href="http://www.eastman.com/" target="_blank">
           <img class="sponsor-img" src="img/sponsor-logos-05.png" />
        </a>
   </div>
<div class="col-sm-3">
   <a href="https://www.raymondcorp.com/" target="_blank">
   <img class="sponsor-img" src="img/sponsor-logos-06.png" />
    </a>
</div>
<div class="col-sm-3  firstRow-sponsor-images">
   <a href="http://www.wacom.com/" target="_blank">
   <img class="sponsor-img" src="img/sponsor-logos-07.png" />
    </a>
</div>
<div class="col-sm-3">
    <a href="http://cias.rit.edu/" target="_blank">
   <img class="sponsor-img" src="img/sponsor-logos-08.png" />
    </a>
</div>
</div>
</div>
<div class="row sponsor-top mobile-remove-sponsor-top">
<div class="center-mid">
   <div class="col-sm-3 firstRow-sponsor-images">
       <a href="http://industrialdesign.cias.rit.edu/community/idsa-student-chapter/" target="_blank">
           <img class="sponsor-img" src="img/sponsor-logos-09.png" />
        </a>
   </div>
<div class="col-sm-3">
   <a href="http://www.tinyfishprinting.com/" target="_blank">
           <img class="sponsor-img" src="img/sponsor-logos-10.png" />
    </a>
</div>
<div class="col-sm-3  firstRow-sponsor-images">
   <a href="https://www.stickermule.com/" target="_blank">
       <img class="sponsor-img" src="img/sponsor-logos-11.png" />
    </a>
</div>
<div class="col-sm-3">
    <a href="http://www.javascafe.com/" target="_blank">
       <img class="sponsor-img" src="img/sponsor-logos-12.png" />
    </a>
</div>
</div>
</div>
<div class="row tablet-bot">
<div class="col-lg-12 sponsor-want center-mid">
<div class="row-spacer">&nbsp;</div>
<a href="contact.php" class="elliot-bold dark link-effect">WANT TO SPONSOR?</a>
</div>
</div>
</div>
<!-- FOOTER -->
<footer class="tablet-top">
<div class="container footer-nav navbar-inner">
<div class="row">
<div class="col-sm-10 col-md-offset-1 text-center">
   <!-- <div class="col-sm-2"><a href="schedule.php"  class="link-effect">SCHEDULE</a></div> -->
   <div class="col-sm-2"><a href="getready.php" class="link-effect">GET READY</a></div>
   <div class="col-sm-2"><a href="register.php" class="link-effect">REGISTER</a></div>
   <div class="col-sm-2 text-nowrap footer-logo-mobile"><a href="contact.php" class="link-effect">GET IN TOUCH</a></div>
   <div class="col-sm-2 tablet-hide">
       <div class="circle-footer"></div>
       <div class="line-footer"></div>
   </div>
</div>
</div>
</div>
<div class="container">
<div class="container footer-text">
<div class="footer-logo"></div>
<p class="special">Special thanks to Lorraine Justice, Josh Owen, Bruce Leonard, Adam Smith, and Benjamin Thomas</p>
<p class="copyright">&copy; 2016 Thought At Work. All rights reserved.</p>
</div>
</div>
</footer>
<script type="text/javascript">
   $('p').each(function(){
   var string = $(this).html();
   string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
   $(this).html(string);
});
</script>

       <script type="text/javascript" src="js/navScript.js"></script>
	</body>
</html>
