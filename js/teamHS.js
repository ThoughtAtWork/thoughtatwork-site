$(document).ready(function(){
	$.ajaxSetup({cache: false});
	var team = [];
    var urlString = "https://taw.imgix.net/team/";
    var urlString2 = "https://taw.imgix.net/team2/";
	var sizeString = "?h=628&amp;w=418";

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
		var src2 = "";
		for(var i = 0; i < team.length; i++){
			src2 = (team[i].src).replace('1', '2');
			$('#teamOut').append(
				'<div class="team-block"><img src="' + urlString2 + src2 + sizeString + '" class="team-img2"><img src="' + urlString + team[i].src + sizeString + '" class="team-img">\n' + 
				'<h2 class="team-name">' + team[i].name + '</h2>\n' +
				'<h2 class="team-major">' + team[i].major + '</h2></div>'
			);
		}
	}
});