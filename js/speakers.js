var speakers = [];

$( document ).ajaxError(function() {
	$('.top-buffer').prepend("Need to be on server to access external speakers file. Here is some test content.");
	console.log("Need to be on server to access external speakers file. Here is some test content.");
	offline();
});

var info = $.get('speakerInfo.txt', function(data){
	sortData(data);
	initSecond();
});

function offline(){
	var info = "Bushra\|\|Senior Director\|Nicholas Cage\'presentations\'stuff\|aldksflkj description\|Adding Cage\-ism\|Friday October 21, 7:00\-8:00PM\|loremipsum.com\|link.com\\Person\|\|Junior Something\|eqwr\'sdf\'jobs\'stuffs\|dfjljjjf desc\|Bloops\|Sunday, 5\-2AM\|bleepbloop.com\|otherlink.com\\Kiddo\|\|Manager of Someplace\|laskdfj\'ekcv\'lafkj\|bnc,mznvew descr\|Meeps\|Monday, 4\-0PM\|meepmeep.com\|otherotherlink.com\\Fourtho\|\|Manager of Someotherplace\|cxzxcv\'qweg\'lfdhshh\|erasdgardff descr\|Mops\|Monday, 4\-6PM\|meepmop.com\|otherslink.com";
	console.dir(info);
	sortData(info);
	initSecond();
}

function sortData(data){
	info = data.replace(/\n/g, '').split('\\');
	for(var i = 0; i < info.length; i++){
		info[i] = info[i].split('\|');
		var speaker = {
			name: info[i][0],
			img: info[i][1],
			position: info[i][2],
			fields: info[i][3].split('\''),
			description: info[i][4],
			presentation: info[i][5],
			dateTime: info[i][6],
			website: info[i][7],
			socialMedia: info[i][8]
		};
		speakers.push(speaker);
	}
}

function initSecond(){
	for(var i = 0; i < speakers.length; i++){
		var fields = "";
		for(var j = 0; j < speakers[i].fields.length; j++){
			fields += (speakers[i].fields[j].toString());
			if(j < speakers[i].fields.length-1)
				fields += ", ";
		}
		console.log(fields);
		$('.container-speakers').append(
			'<div class="speaker">\n<img src=\"' + speakers[i].img + '\" class="speaker-image">\n' + 
			'<h2 class="speaker-name">' + speakers[i].name + '</h2>\n' +
			'<p class="speaker-fields">' + fields + '</p></div>'
		);
	}
}