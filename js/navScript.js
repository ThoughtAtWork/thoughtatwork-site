var navOffset = $(".navOff").offset().top;


    
    
		$(document).scroll(function(){
		    if($(this).scrollTop() > navOffset)
		    {   
		    	
			       $('.nav').css({"background":"black"});
			   
		    } else {
		       $('.nav').css({"background":"transparent"});
		    }
		});
	
		$(document).scroll(function(){
			var viewportWidth = $(window).width();
			if( viewportWidth < 768)
			{
				$('.nav').css({"background":"transparent"});
			}
		});

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