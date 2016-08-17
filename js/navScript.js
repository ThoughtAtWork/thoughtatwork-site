//set navOffset class top variable
var navOffset = $(".navOff").offset().top;


    
    	//on scroll  change color if offset is beyond noOffset class
		$(document).scroll(function(){
		    if($(this).scrollTop() > navOffset)
		    {   
		    	
			       $('.nav').css({"background":"black"});
			   
		    } else {
		       $('.nav').css({"background":"transparent"});
		    }
		});
		
		//make nav background transparent if the viewport is smaller than 768 pixels
		$(document).scroll(function(){
			var viewportWidth = $(window).width();
			if( viewportWidth < 768)
			{
				$('.nav').css({"background":"transparent"});
			}
		});

		//make nav background change color on window resize depending on viewPort Width 
		$(window).resize(function () {
			var viewportWidth = $(window).width();
			if( viewportWidth < 768)
			{
				$('.nav').css({"background":"transparent"});
			}
			if( viewportWidth > 768)
			{
				$('.nav').css({"background":"black"});
			}
		});