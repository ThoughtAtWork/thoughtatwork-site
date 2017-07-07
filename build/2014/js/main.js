
var currentPosition = 1;
var slideWidth = 500;
var slides;
var numberOfSlides;
var currentValue = true;
var schedPosition = 0;

var arr=[".speakers",".happenings"];
var team=[".leadcoordinators",".marketing",".socialmedia",".graphics"];
var nav=["body","#about","#event","#team"];
var navTop=["","#about_nav","#event_nav","#team_nav"];
var subs=['"Good design is obvious. Great design is transparent." Joe Sparano','A conference for students, by students.','"Simple is good." Jim Henson','"There is no shortcut for greatness." M.C. Escher','"Think more. Design Less." Ellen Lupton','"Minimalism is not a lack of something. It is  perfect amount of something" Nicholas Burroughs','"Practice Safe Design. Use a concept." Petrula Vrontikis']

//__________________________________________

// RANDOM TEXT GENERATOR

//__________________________________________

$(document).ready(function (){
	
	$('section').css('opacity','0');
	$('#flag').css('opacity','0');
	
	slides = $('.slide');
	numberOfSlides = slides.length;		
	
//	slideshow
	$('.slide').click(function(){
		slideRight();
	});
	
	$('#right-btn').click(function(e){
		e.preventDefault();
		slideRight();
	});
	
	$('#left-btn').click(function(e){
		e.preventDefault();
		slideLeft();
	});
	
	$("body").keydown(function(e) {
  		if(e.keyCode == 37) { // left
		slideLeft();
  		}
  		else if(e.keyCode == 39) { // right
    	slideRight();
  		}
	});
	
	$("#imagearea").touchwipe({
		 wipeLeft: function() { slideRight(); },
		 wipeRight: function() { slideLeft(); },
		 min_move_x: 20,
		 min_move_y: 20,
		 preventDefaultEvents: true
	});

	//SCHEDULE
	moveSched();
		
	navScroll();
	sortSwap();
		
	createDots();
	fixedSize();

	bioDwn();
	
	//$("#showText").html(subs[Math.floor( Math.random() * 7 )]);
	
	setTimeout(function() {
      $('#header').animate({'opacity':'1'}, 200);
	}, 100);

	setTimeout(function() {
      $('section').animate({'opacity':'1'}, 200);
	}, 250);

	setTimeout(function() {
      $('#flag').animate({'opacity':'1'}, 200, 'swing');
	}, 350);
	
});

$(window).resize(function(){
	fixedSize();
});


function fixedSize(){
	$('.slide').css('width', $('#imagearea').width());
	$('.slideshow').css('width', $('.slide').width() * $('.slide').length);
	$('.slideshow').css('right', $('#imagearea').width() * currentPosition);
	$('#dots').css('width',$('.dot').length * 25+'px');
	$('#schedule_page').css('right', $('.column').width() * schedPosition);
};

//__________________________________________

// SCROLL NAVIGATION

//__________________________________________

function navScroll(){
	$(".nav_scroll").each(function(n){
		$(this).click(function(event){
			myNav = nav[n];
			event.preventDefault();
        	$('html,body').animate({scrollTop:$(myNav).offset().top - $('#header').height()}, 400);
		});
	});
	
	$("#nav_btn").click(function(){
		if (currentValue == true){
			$("#nav_box").addClass('mobile_shown');
			$('#nav_btn').css('background-position','40px 0');
			currentValue = false;
		}
		else{ $("#nav_box").removeClass('mobile_shown');
		$('#nav_btn').css('background-position','0 0');
			currentValue =true;
		};
	});
	
	$(".mobile_scroll").each(function(p){
		$(this).click(function(event){
			mobileNav = nav[p + 1];
			event.preventDefault();
			$('#nav_box').css('display','none');
        	$('html,body').animate({scrollTop:$(mobileNav).offset().top - $('#header').height()}, 400);
			$('#nav_btn').css('background-position','0 0');
			currentValue =true;
		});
	});
};

$(document).scroll(function() {
    var cutoff = $(window).scrollTop();
    
    //$('.section_scroll').each(function(o){
	//	myScroll = navTop[o];
    //    if($(this).offset().top + $(this).height()> cutoff + 30){
    //        $('.nav_scroll').removeClass('current');
    //        $(myScroll).addClass('current');
    //        return false; // stops the iteration after the first one on screen
    //    }
    //});
});

//__________________________________________

// SLIDESHOW FOR GALLERY 

//__________________________________________

function slideRight() {
		currentPosition++;
		if(currentPosition > (numberOfSlides - 2)) {
			callRight().done( movePosition() );
		} 
		else {movePosition()}
};

function callRight() {
	$('.slideshow').css('right', $('#imagearea').width() * 0);
	currentPosition = 1;
};


function slideLeft() {
		currentPosition--;
		if(currentPosition < 1) {
			callLeft().done( movePosition() );
		} 
		else {movePosition()}	
};

function callLeft() {
	$('.slideshow').css('right', $('#imagearea').width() * (numberOfSlides - 1));
	currentPosition = numberOfSlides - 2;
};


function createDots(){
	$('.viz').each(function(i){
		$('#dots').append('<div class="dot" id="dot'+i+'"> </div>');
	});
	$('.dot').each(function(i){
		$(this).click(function(){
			currentPosition = i + 1;
			movePosition();
		});
	});
	$('#dot0').addClass('dot_big');
};

function movePosition() {
	$('.slideshow').stop();
	$('.slideshow').animate({'right' : $('#imagearea').width() * currentPosition});
	$('.dot').removeClass('dot_big');
	$('#dot' + (currentPosition - 1)).addClass('dot_big');
};

//__________________________________________

// EVENT & TEAM SORTING

//__________________________________________

function sortSwap(){
	$(".event_btn").each(function(m){
		$(this).click(function(){
			mySort = arr[m];
			$(".event_btn").removeClass("event_current");
			$('#event li').css("display","none");
			$('#event li').css("display","none");
			$(mySort).css("display","block" ,"opacity","0");
			$(this).addClass("event_current");
		});
		
		//$('#event .blocks').css('display','none');
		//$(mysort).css('display','block');
	});
	
	$("#team .sort").each(function(l){
		$(this).click(function(){
			teamSort = team[l];
			$("#team .sort").removeClass("active");
			$('#team .blocks').css("display","none");
			$(teamSort).css("display","block" ,"opacity","0");
			$(this).addClass("active");
		});
		
		//$('#event .blocks').css('display','none');
		//$(mysort).css('display','block');
	});
};

function bioDwn(){
	$('.bio_p').each(function(b){
		$(this).addClass('bio_'+(b));
		$(this).css('height','0');
	});

	$('.bio_dwn').each(function(b){
		$(this).addClass('bio_d'+(b));

		$(this).click(function(){
			bioP = $('.bio_'+(b)).height();
			//$('.content_dwn').animate({'height' : '0'}, 400, 'swing');
			//$('.content_btn').removeClass('buttons_current');

			if(bioP == '0'){
				$('.bio_'+(b)).css('height','auto');
				bioHt = $('.bio_'+(b)).height();
				$('.bio_'+(b)).css('height','0');
				$('.bio_'+(b)).animate({'height': bioHt},400,'swing');
				$(this).addClass('bio_current');
			} else { 
				$('.bio_'+(b)).animate({'height' : '0'}, 400, 'swing');
				$(this).removeClass('bio_current');
			};

		});
	});
}

//__________________________________________

// SCHEDULE

//__________________________________________


function moveSched() {
	$('.day_btn').each(function(s){
		$(this).click(function(){
			schedPosition = s;
			$('#schedule_page').stop();
			$('#schedule_page').animate({'right' : $('.column').width() * schedPosition}, 300, 'swing');
			$('.day_btn').removeClass('day_current');
			$(this).addClass('day_current');
		});
	});
};



(function($){$.fn.touchwipe=function(settings){var config={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true};if(settings)$.extend(config,settings);this.each(function(){var startX;var startY;var isMoving=false;function cancelTouch(){this.removeEventListener('touchmove',onTouchMove);startX=null;isMoving=false}function onTouchMove(e){if(config.preventDefaultEvents){e.preventDefault()}if(isMoving){var x=e.touches[0].pageX;var y=e.touches[0].pageY;var dx=startX-x;var dy=startY-y;if(Math.abs(dx)>=config.min_move_x){cancelTouch();if(dx>0){config.wipeLeft()}else{config.wipeRight()}}else if(Math.abs(dy)>=config.min_move_y){cancelTouch();if(dy>0){config.wipeDown()}else{config.wipeUp()}}}}function onTouchStart(e){if(e.touches.length==1){startX=e.touches[0].pageX;startY=e.touches[0].pageY;isMoving=true;this.addEventListener('touchmove',onTouchMove,false)}}if('ontouchstart'in document.documentElement){this.addEventListener('touchstart',onTouchStart,false)}});return this}})(jQuery);