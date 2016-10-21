$(document).ready(function(){
	$.ajaxSetup({cache: false});
	var team = [];

	$( document ).ajaxError(function() {
		$('.top-buffer').prepend("Need to be on server to access external speakers file. Here is some test content.");
		console.log("Need to be on server to access external speakers file. Here is some test content.");
		offline();
	});

	var info = $.get('team.txt', function(data){
		sortData(data);
		initSecond();
	});

	function offline(){
		var info = "Bushra\|\|Senior Director\|Nicholas Cage\'presentations\'stuff\|aldksflkj description\|Adding Cage\-ism\|Friday October 21, 7:00\-8:00PM\|loremipsum.com\|http://loremipsum.com\|link.com\|socialMedia.com\\Person\|\|Junior Something\|eqwr\'sdf\'jobs\'stuffs\|dfjljjjf desc\|Bloops\|Sunday, 5\-2AM\|bleepbloop.com\|http://website.com\|otherlink.com\|http://url.com\\Kiddo\|\|Manager of Someplace\|laskdfj\'ekcv\'lafkj\|bnc,mznvew descr\|Meeps\|Monday, 4\-0PM\|meepmeep.com\|http://website.com\|otherotherlink.com\|http://url.com\\Fourtho\|\|Manager of Someotherplace\|cxzxcv\'qweg\'lfdhshh\|erasdgardff descr\|Mops\|Monday, 4\-6PM\|meepmop.com\|http://website.com\|otherslink.com\|http://url.com";
		sortData(info);
		initSecond();
	}

	function sortData(data){
		var member = {};
        var urlString = "'https://taw.imgix.net/team/";
		info = data.replace(/\n/g, '').split('\\');
		for(var i = 0; i < info.length; i++){
			info[i] = info[i].split('\|');
			member = {
				name: info[i][0],
				major: info[i][1],
				src: info[i][2]
			};
			team.push(member);
		}
	}

	function initSecond(){

		for(var i = 0; i < team.length; i++){
			$('.team-container').append(
				'<img src="' + team[i].src
			);
		}
	}

	$(window).resize(function(){ // also changes clicking on speaker to clicking on view more
		$('.speaker').off();
		$('.speaker-expand').off();
		$('.speaker-image').off();
		if($('.speaker-expand').css('display') == 'none'){
			mobile = false;
			$('.speaker').click(function(){
				showModal(this);
			});
		}
		else{
			mobile = true;
			$('.speaker-expand').click(function(){
				showModal($(this).parents('.speaker'));
			});
			$('.speaker-image').click(function(){
				showModal($(this).parent());
			});
		}
		if(mobileQuery.matches)
			$('.container-fluid').removeClass('blur');
		if(!mobileQuery.matches && modalShown)
			$('.container-fluid').addClass('blur');
	});

	function showModal(speaker){
		modalShown = true;
		$('.speaker-modal-content').detach();
		fillModal($(speaker).index());
		$('.speaker-modal').toggleClass('modal-hidden');
		$('.close-modal').toggleClass('modal-hidden');

		if(!mobileQuery.matches)
			$('.container-fluid').addClass('blur');
		$('.speakers-splash-words').attr('id', 'changeBG');
	}

	function closeModal(){
		modalShown = false;
		$('.speaker-modal').toggleClass('modal-hidden');
		$('.close-modal').toggleClass('modal-hidden');

		if(!mobileQuery.matches)
			$('.container-fluid').removeClass('blur');
		$('.speakers-splash-words').removeAttr('id');
	}

	function fillModal(i){
		var presentations = "";
		for(var k = 0; k < speakers[i].presentations.length; k++){
			if((k%2) == 0)
				presentations += '<p class=\"speaker-modal-presentation\">' + speakers[i].presentations[k] + '<\/p>';
			else
				presentations += '<p class=\"speaker-modal-dateTime\">' + speakers[i].presentations[k] + '<\/p>';
		}
		console.log('working');
		$('.speaker-modal').append(
			'<div class=\"speaker-modal-content\">\n<img src=\"' + speakers[i].image + '\" class=\"speaker-modal-image\">\n' + 
			'<div class=\"speaker-modal-info\">\n' + 
			'<h2 class=\"speaker-modal-name\">' + speakers[i].name + '<\/h2>\n' +
			'<p class="speaker-modal-position">' + speakers[i].position + '<\/p>\n' +
			'<div class=\"modal-space-holder\"></div>' + 
			'<p class="speaker-modal-description">' + speakers[i].description + '<\/p>\n' +
			'<div class=\"speaker-modal-links\"><a href=\"' + speakers[i].websiteURL + '\" class=\"speaker-modal-website link-effect\" target=\"_blank\">' + speakers[i].website + '<\/a>\n<br>' +
			'<a href=\"' + speakers[i].socialMediaURL + '\" class="speaker-modal-socialMedia link-effect" target=\"_blank\">' + speakers[i].socialMedia + '<\/a><\/div>' + 
			'<h3 class="speaker-modal-label">Presentations<\/h3>\n' +
			presentations + '\n' +
			'<a href=\"..\/schedule.php\" class="link-effect">View Schedule<\/a><br>\n' +
			'<\/div><\/div>'
		);
		if($('.speaker-modal-image').attr('src') == 'https://taw.imgix.net/speakers/jeff_smith.jpg?w=.779&h=1&crop=focalpoint&fit=crop&fp-x=0.2&fp-y=0.3')
			$('.speaker-modal-image').attr('title', 'Jeff didn\'t give us a good picture.');
		else
			$('.speaker-modal-image').removeAttr('title');
	}
});
