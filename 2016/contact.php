<!DOCTYPE html>
<html lang="en">
	<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Thought At Work - Contact</title>

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

<!-- <script src="../constantlyUpdatingScript.js"></script> -->

<script src="js/hoverEffects.js"></script>

	</head>
	<body>
        <?php include("header.php"); ?>
 <!--  -->
		<!-- HEADER / SPLASH -->
		<div class="container-fluid about-splash-words contact-splash-words">
			<div class="row">
				<div class="col-lg-12 ">
					<h1 class="title">Contact</h1>
				</div>
			</div>
		</div>
     <div class="navOff"></div>

    <div class="container-fluid contact-top-buffer about-mobile-top">
      <div class="row about-margins">
        <div class="col-lg-10 col-md-offset-1">
            <h2 class="contact-heading">Get In Touch</h2>
        </div>
      </div>
    </div>
    <div class="container-fluid contact-body-buffer ">
      <div class="row about-margins">
        <div class="col-lg-10 col-md-offset-1 ">
            <div class="col-lg-6 contact-description">
              <p class="elliot about-text">Any questions or suggestions? Perhaps you're interested in speaking or sponsoring?</p><br>
              <p class="elliot about-text">Don't hesitate to drop us a line!</p>
            </div>
            <div class="col-lg-6 contact-form about-mobile-top about-mobile-bot">
              <form id="contactForm">

                  <div class="form-group">
                    <input type="text" class="form-control" id="name" placeholder="Your Name" required>
                  </div>

                 <div class="form-group">
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Your Email" required>
                  </div>

                  <div class="form-group">
                    <select class="form-control" id="concern" >

                    <option value="0" selected disabled>What's this about?</option>
                      <option value="Just saying hey">Just saying hey</option>
                      <option value="Important question">Important question</option>
                      <option value="Sponsorship inquiry">Sponsorship inquiry</option>
                      <option value="Speaking inquiry">Speaking inquiry</option>
                      <option value="Dream interpretation">Dream interpretation</option>
                    </select>
                  </div>

                  <div class="form-group top-buffer ">
                    <textarea class="form-control" id="message" rows="3" placeholder="Your Message" required></textarea>
                  </div>

                  <button type="submit" class="btn contact-btn btn-effect">Send</button>
                  <div id="msgSubmit" class="elliot text-center hidden">Message Submitted!</div>
              </form>
            </div>
        </div>
      </div>
    </div>

    <script src="js/contactScript.js"></script>
        <!--- Footer Include-->
		<?php include("footer.php"); ?>
       <script type="text/javascript" src="js/navScript.js"></script>
	</body>
</html>