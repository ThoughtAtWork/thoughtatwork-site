<nav id="nav-background-color" class="navbar navbar-fixed-top p-a-9 nav" role="navigation">
    <div class="container-fluid navColorChange">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand title p-l-12 mobile-hide" href="index.php">Thought at Work</a>
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
                $(this.addClass('currentRegister'))
            else
                $(this).addClass('currentPage');
        }
    });
</script>
