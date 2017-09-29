<?php

  //print '<pre>';print_r($_POST); print '</pre>';

  header('Location: register.html');
  use RIT\Prod\Nelnet as Nelnet;

  // require_once('admin/config.php');
  require_once("nelnet-library/src/autoload.php");

  $proceed = false;
  $speaker = false;

  //print '<pre>';print_r($_POST); print '</pre>';

  if( isset($_POST['submit']) && !empty($_POST['orderNumber']) ){

    $orderID = $_POST['orderNumber'];
    $sql = "SELECT email, amount FROM $db_table WHERE trans_num = $orderID";

    $result = $mysqli->query($sql);
    print $sql;
    print_r($result);
    if ($result->num_rows == 1) {

      $row = $result->fetch_assoc();
      $orderAmount = $row['amount'];
      $orderEmail = $row['email'];
      if($orderAmount > 0){$proceed = true;}

    }



    if($proceed){

      $nelnet = new Nelnet\Nelnet();
      $nelnet->orderType = $paymentType;
      $nelnet->sharedSecret = $hashCode;
      $nelnet->redirectUrl = $redirectURL;
      $nelnet->setNelnetEnvironment('production');

      $params = array(
          "id" => $orderID,
          "amount" => ($orderAmount * 100),
          "email" => $orderEmail,
      );

      $request = $nelnet->buildRequest();
      $request->send($params);
    }else{



    }

  }


  $insertedID = '';

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

  #CHANGE THIS TO MAKE MORE REQUIREMENTS
  function verifyFormData()
  {
    global $amount, $firstname,  $lastname,  $address, $city,  $state, $zip, $email, $phone, $university;

    if( $amount == '' || $firstname == '' ||  $lastname == '' ||  $email == '' || !filter_var($email, FILTER_VALIDATE_EMAIL))
    {
      return 0;
      }
    else
    {
          return 1;
      }
  }

  function writeToDB()
  {
  	global $mysqli, $db_table, $content;

  	global $adjustedAmount, $referenceId, $firstname, $lastname, $address, $city, $state, $zip, $email, $phone, $university, $title, $dietary, $interpreter, $insertedID;

  	$insertStatement = "INSERT INTO $db_table (first, last, address, city, state, zipcode, email, phone, university, title, dietary, interpreterNeeded, amount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

  	//echo $insertStatement;
  	$stmt = $mysqli->prepare($insertStatement);

  	if (! $stmt) {
        echo "Error: ".$mysqli->error;
        exit;
    }

  	$stmt->bind_param('sssssssssssss', $firstname, $lastname, $address, $city, $state, $zip, $email, $phone, $university, $title, $dietary, $interpreter, $adjustedAmount);
  	$stmt->execute();


  	$numRows = $stmt->affected_rows;
  	//echo $stmt->error;
  	if($numRows < 0){
      $content .=   "there was an error inserting your data";
    }else{

      $insertedID = $mysqli->insert_id;
      //print $insertedID;
    }
  	$stmt->close();
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




  $adjustedAmount = '40';



  $amount = number_format($adjustedAmount,2);
  $firstname = isset($_POST['first-name']) ? $_POST['first-name'] : "";
  $lastname = isset($_POST['last-name']) ? $_POST['last-name'] : "";
  $address = isset($_POST['address']) ? $_POST['address'] : "";
  $city = isset($_POST['city']) ? $_POST['city'] : "";
  $state = isset($_POST['state']) ? $_POST['state'] : "";
  $zip = isset($_POST['zip']) ? $_POST['zip'] : "";
  $email = isset($_POST['email']) ? $_POST['email'] : "";
  $phone = isset($_POST['phone']) ? $_POST['phone'] : "";
  $university = isset($_POST['employer']) ? $_POST['employer'] : "";
  $title = isset($_POST['title']) ? $_POST['title'] : "";
  $dietary = isset($_POST['dietary']) ? $_POST['dietary'] : "";
  $interpreter = isset($_POST['interpret']) ? $_POST['interpret'] : "No";
  $coupon = isset($_POST['coupon']) ? $_POST['coupon'] : "";

  $query = "SELECT `refID` FROM `registrations` WHERE `refID` != ''";
	$numOrders = mysqli_num_rows($mysqli->query( $query ));



  if(strtolower($coupon) == strtolower('Free0TAW17') ){

    $adjustedAmount = '0';

  }else if(strtolower($coupon) == strtolower('30ISBETTERTHAN40')){

    $adjustedAmount = '30';

  }else if($numOrders < 100 && strtotime("1 October 2017") > strtotime('now')){

    $adjustedAmount = '35';

  }



  if(verifyFormData()){


  	writeToDB();



    $transNum = $insertedID;

    if($adjustedAmount === '0'){

      header("Status: 301 Moved Permanently");
      header("Location:./success.php?freeSuccess=". $transNum);


    }
  	//processMail( "Credit Card");

  	//$redirectURL = "https://".$_SERVER['HTTP_HOST']."/success.php";
  	$formData = "<form action=\"\" name=\"form\" method=\"POST\" id=\"payment\"  style = \"vertical-align:middle;margin:0;margin-bottom:2em;font-size: 1.2em;
      line-height: 1.5em;\">";


  	$formData .= "<input type=\"hidden\" name=\"orderType\" value=\"ThoughtAtWork\">";


  	$formData .= "<input type=\"hidden\" name=\"orderNumber\" value=\"$transNum\">
  	<input type=\"hidden\" name=\"amount\" value=\"".str_replace(array(".",","),"",$adjustedAmount)."\">
  	<input type=\"hidden\" name=\"redirectUrl\" value=\"$redirectURL\">
  	<input type=\"hidden\" name=\"email\" value=\"$email\">
  	<input type=\"hidden\" name=\"redirectUrlParameters\" value=\"transactionStatus,transactionType,transactionId,originalTransactionId,orderNumber,transactionTotalAmount\">

  	<span class=\"elliot\"><strong></strong>Payment amount: \$$adjustedAmount</strong></span> <br /><br /><input type=\"submit\" name=\"submit\" value=\"Proceed to Payment\" id=\"submit\" class=\"btn contact-btn btn-effect elliot\" \>
  	</form>
  	";


  	$content .= $formData;

  }else{

    $errorMsg = '<b>The following fields are required and were not filled:</b><br />';
    $emailInvalid = '';
    if( $amount == '' ){ $errorMsg.="Amount<br />"; }
    if( $firstname == '' ){ $errorMsg.="First Name<br />"; }
    if( $lastname == '' ) { $errorMsg .= "Last Name<br />"; }
    if( $address == '' ){ $errorMsg.="Address<br />"; }
    if( $city == '' ){ $errorMsg.="City<br />"; }
    if( $state == '' ){ $errorMsg.="State<br />"; }
    if( $zip == '' ){ $errorMsg.="Zipcode<br />"; }
    if( $email == ''){ $errorMsg.="Email<br />"; }
    else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){$emailInvalid = '<p>The email you entered is invalid.</p>';}
    $errorMsg.= $emailInvalid.'<br /><a href="javascript:history.go(-1)">Go Back and Retry</a>';

    sendError($errorMsg);

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
  <link rel="icon" type="image/png" href="http://thoughtatwork.cias.rit.edu/img/favicon.png">


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
            <a class="navbar-brand title p-l-12 mobile-hide" href="index.html"><div class="tempHover">Thought at Work</div></a>
        </div>
        <div id="menu" class="navbar-collapse collapse navbar-inner pull-right drop-down" >
            <span class="x">
            <button type="button" class="navbar-toggle exit" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <i class="close" aria-hidden="true"></i>
            </button>
            </span>
            <ul class="nav navbar-nav navbar-right p-r-9 mobile-center menu-pad">
                <li class="mobile-home"><a href="index.html">Home</a></li>
                <li><a href="speakers.html">Speakers</a></li>
                <li><a href="schedule.html">Schedule</a></li>
                <li class="text-nowrap"><a href="getready.html">Get Ready</a></li>
                <li class="text-nowrap"><a href="about.html">About Us</a></li>
               <li><a href="contact.html">Contact</a></li>
               <li><a class="nav-register menu-pad" href="register.html">Register</a></li>
            </ul>
        </div>
    </div>
</nav>

<!--Underline effect for current page in nav-->
<script>
    $('.nav').find('a').each(function(){
        var href = document.location.href;
        var fileName = href.substr(href.lastIndexOf('/') + 1);
        if($(this).attr('href') == fileName && fileName != "index.html"){
            if(fileName == "register.html")
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
					<h1 class="title">Register</h1>
				</div>
			</div>
		</div>
     <div class="navOff"></div>

    <div class="container-fluid contact-top-buffer about-mobile-top">
      <div class="row about-margins">
        <div class="col-lg-10 col-md-offset-1">

          <a href="register"><div id="flag"></div></a>

           <section id="register" class="section-fullscreen light">
          	<div class="section-content">
          		<h2 class="elliot">Register</h2>

                  <p class="elliot" class >Thank you for completing the first step in your registration. To make your secure credit card payment, click the button below.</p>
                  <p class="elliot">Immediately after the payment transaction is processed, you will receive an email verifying the information you provided.</p>

          <?php


      	//print '<pre>';print_r($_POST);print '</pre>';
      	echo $content;

          ?>

          	</div>
           </section>


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
   <img class="sponsor-img" src="http://thoughtatwork.cias.rit.edu/img/sponsor-logos-01.png" />
    </a>
        </div>
<div class="col-sm-3">
    <a href="http://www.autodesk.com" target="_blank">
   <img class="sponsor-img" src="http://thoughtatwork.cias.rit.edu/img/sponsor-logos-02.png" />
    </a>
</div>
<div class="col-sm-3  firstRow-sponsor-images">
    <a href="http://www.core77.com/" target="_blank">
   <img class="sponsor-img" src="http://thoughtatwork.cias.rit.edu/img/sponsor-logos-03.png" />
    </a>
</div>
<div class="col-sm-3">
    <a href="http://fitc.ca/" target="_blank">
   <img class="sponsor-img" src="http://thoughtatwork.cias.rit.edu/img/sponsor-logos-04.png" />
    </a>
</div>
</div>
</div>
<div class="row sponsor-top mobile-remove-sponsor-top">
<div class="center-mid">
   <div class="col-sm-3 firstRow-sponsor-images">
       <a href="http://www.eastman.com/" target="_blank">
           <img class="sponsor-img" src="http://thoughtatwork.cias.rit.edu/img/sponsor-logos-05.png" />
        </a>
   </div>
<div class="col-sm-3">
   <a href="https://www.raymondcorp.com/" target="_blank">
   <img class="sponsor-img" src="http://thoughtatwork.cias.rit.edu/img/sponsor-logos-06.png" />
    </a>
</div>
<div class="col-sm-3  firstRow-sponsor-images">
   <a href="http://www.wacom.com/" target="_blank">
   <img class="sponsor-img" src="http://thoughtatwork.cias.rit.edu/img/sponsor-logos-07.png" />
    </a>
</div>
<div class="col-sm-3">
    <a href="http://cias.rit.edu/" target="_blank">
   <img class="sponsor-img" src="http://thoughtatwork.cias.rit.edu/img/sponsor-logos-08.png" />
    </a>
</div>
</div>
</div>
<div class="row sponsor-top mobile-remove-sponsor-top">
<div class="center-mid">
   <div class="col-sm-3 firstRow-sponsor-images">
       <a href="http://industrialdesign.cias.rit.edu/community/idsa-student-chapter/" target="_blank">
           <img class="sponsor-img" src="http://thoughtatwork.cias.rit.edu/img/sponsor-logos-09.png" />
        </a>
   </div>
<div class="col-sm-3">
   <a href="http://www.tinyfishprinting.com/" target="_blank">
           <img class="sponsor-img" src="http://thoughtatwork.cias.rit.edu/img/sponsor-logos-10.png" />
    </a>
</div>
<div class="col-sm-3  firstRow-sponsor-images">
   <a href="https://www.stickermule.com/" target="_blank">
       <img class="sponsor-img" src="http://thoughtatwork.cias.rit.edu/img/sponsor-logos-11.png" />
    </a>
</div>
<div class="col-sm-3">
    <a href="http://www.javascafe.com/" target="_blank">
       <img class="sponsor-img" src="http://thoughtatwork.cias.rit.edu/img/sponsor-logos-12.png" />
    </a>
</div>
</div>
</div>
<div class="row tablet-bot">
<div class="col-lg-12 sponsor-want center-mid">
<div class="row-spacer">&nbsp;</div>
<a href="contact.html" class="elliot-bold dark link-effect">WANT TO SPONSOR?</a>
</div>
</div>
</div>
<!-- FOOTER -->
<footer class="tablet-top">
<div class="container footer-nav navbar-inner">
<div class="row">
<div class="col-sm-10 col-md-offset-1 text-center">
   <!-- <div class="col-sm-2"><a href="schedule.html"  class="link-effect">SCHEDULE</a></div> -->
   <div class="col-sm-2"><a href="getready.html" class="link-effect">GET READY</a></div>
   <div class="col-sm-2"><a href="register.html" class="link-effect">REGISTER</a></div>
   <div class="col-sm-2 text-nowrap footer-logo-mobile"><a href="contact.html" class="link-effect">GET IN TOUCH</a></div>
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
