<!DOCTYPE html>
<html lang="en">
	<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Thought At Work - Home</title>
  <meta name="description" content="Our Website">
  <meta name="author" content="Thought at Work">

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

	</head>
	<body>
        <?php include("header.php"); ?>
 <!--  -->
		<!-- HEADER / SPLASH -->
		<div class="container-fluid about-splash-words ">
			<div class="row">
				<div class="col-lg-12 ">
					<h1 class="title ">Contact</h1>
				</div>
			</div>
		</div>
     <div class="navOff"></div>

    <div class="container-fluid top-buffer about-mobile-top">
      <div class="row about-margins">
        <div class="col-lg-10 col-md-offset-1 ">
            <h2 class="elliot about-history-padding">Get In Touch</h2>
        </div>
      </div>
    </div>
    <div class="container-fluid top-buffer ">
      <div class="row about-margins">
        <div class="col-lg-10 col-md-offset-1 ">
            <div class="col-lg-6">
              <p class="elliot">Any questions or suggestions? Perhaps you're interested in speaking or sponsoring?</p><br>
              <p class="elliot">Dont hesitate to drop us a line.</p>
            </div>
            <div class="col-lg-6 about-mobile-top about-mobile-bot">
              <form>

                  <div class="form-group">
                    <input type="text" class="form-control" id="namer" placeholder="John Doe">
                    <hr>
                    <label for="name" class="label-elliot">YOUR NAME</label>                  
                  </div>

                 <div class="form-group">
                    <input type="email" class="form-control" id="emailIn" aria-describedby="emailHelp" placeholder="Your Email">      
                    <hr>          
                  </div>

                  <div class="form-group">
                    <select class="form-control" id="subject">

                    <option value="" selected disabled>Subject of your Concern</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <hr>
                  </div>

                  <div class="form-group top-buffer ">
                    <textarea class="form-control" id="textArea" rows="3" placeholder="Your Message"></textarea>
                    <hr>
                  </div>

                  <button type="submit" class="btn contact-btn">Submit</button>
              </form>
            </div>
        </div>
      </div>
    </div>

        <!--- Footer Include-->
		<?php include("footer.php"); ?>
       <script type="text/javascript" src="js/navScript.js"></script>
	</body>
</html>