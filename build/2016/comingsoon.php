<!DOCTYPE html>
<html lang="en">
	<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Thought At Work - Coming Soon</title>

	<!-- Open Graph data -->
	<meta property="og:url"                content="http://thoughtatwork.cias.rit.edu" />
	<meta property="og:type"               content="article" />
	<meta property="og:title"              content="Thought At Work, a student-run design conference" />
	<meta property="og:description"        content="Thought At Work is a three-day, student-run, student-focused design conference that takes place every October at Rochester Institute of Technology." />
	<meta property="og:image"              content="https://taw.imgix.net/tawtemp_share_image.jpg?w=1466&h=1" />

	<!-- Twitter Card data -->
	<meta name="twitter:card" content="product">
	<meta name="twitter:site" content="@TAW_RIT">
	<meta name="twitter:title" content="Thought At Work, a student-run design conference">
	<meta name="twitter:description" content="Thought At Work is a three-day, student-run, student-focused design conference that takes place every October at Rochester Institute of Technology.">
	<meta name="twitter:creator" content="@TAW_RIT">
	<meta name="twitter:image" content="https://taw.imgix.net/tawtemp_share_image.jpg?w=1466&h=1">

	<meta name="description" content="Student-Run Design Conference">
	<meta name="title" content="Thought at Work">


	  <!-- Mobile Specific Metas
	  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
	  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/main.css">

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
		<div class="container-fluid about-splash-words comingsoon-splash">
			<div class="row">
				<div class="col-lg-12 ">
					<h1 class="title ">COMING SOON</h1>
				</div>
			</div>
		</div>
     <div class="navOff"></div>
    <div class="comingsoon-mobile-top about-mobile-bot container-fluid comingsoon-padding">
      <div class="row about-margins">
            <div class="col-lg-10 col-lg-offset-1 ">
                <div class="about-kids mobile-about-cool comingsoon-main">
                    <h2 class="elliot about-history-padding">WE'RE STILL WORKING ON THIS PART. HEAD BACK FOR NOW</h2>
                    <button onclick="goBack()" class="about-also-register goback-btn btn btn-effect center-web about-also-pad-bot">
                        <a href="#">&#8592; GO BACK</a>
                    </button>
                </div>
			       </div>
            </div>
		</div>
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
			 <script>
				function goBack() {
				    window.history.back();
				}
				</script>
	</body>
</html>
