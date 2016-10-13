<!DOCTYPE html>
<html lang="en">
	<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Thought At Work - Speakers</title>

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

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/main.css">

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

<!--Generate speaker info-->
<script src="js/speakers.js"></script>
<!-- <script src="../constantlyUpdatingScript.js"></script> -->

	</head>
	<body>
		<div class="about-splash-words" id="blurryPic"><div id="whiteEdge"> </div></div>
        <?php include("header.php"); ?>
 <!--  -->
		<!-- HEADER / SPLASH -->
		<div class="container-fluid about-splash-words speakers-splash-words">
			<div class="row">
				<div class="col-lg-12 ">
					<h1 class="title ">Speakers</h1>
				</div>
			</div>
		</div>
     <div class="navOff"></div>

			<!-- COME HANG -->
		<div class="container-fluid top-buffer about-mobile-top">
			<div class="row about-margins">
				<div class="col-lg-10 col-md-offset-1 mobile-about-history">
						<h2 class="elliot about-history-padding ">Speakers</h2>
				</div>
      </div>
    </div>
    <div class="container-fluid">
        <div class="container-speakers">
		</div>
    </div>

    <div class="modal-holder modal-hidden">
	    <div class="speaker-modal">
    	<div class="modal-x"><a>X</a></div>
	    </div>
    </div>
    
    <div class="close-modal modal-hidden">
    </div>

		<div class="md-overlay"></div><!-- the overlay element -->

        <!--- Footer Include-->

		<?php include("footer.php"); ?>
       <script type="text/javascript" src="js/navScript.js"></script>
			 <script>
					var polyfilter_scriptpath = '/css-filters-polyfill/lib/';
			</script>
			<script>
					var polyfilter_scriptpath = '/css-filters-polyfill/lib/';
					var polyfilter_skip_stylesheets = true;
			</script>
			<script src="/css-filters-polyfill/lib/cssParser.js"></script>
			<script src="/css-filters-polyfill/lib/css-filters-polyfill.js"></script>
	</body>
</html>
