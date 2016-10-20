$.ajax({
  url: "img/team/",
  success: function(data){
     $(data).find("a:contains(.jpg)").each(function(){
        // will loop through 
        
        //img URL
        var images = $(this).attr("href");
        var imagesFull = "img/team/"+images 

        //keys for string
        var urlString = "'https://taw.imgix.net/team/";
        var urlString2 = "'https://taw.imgix.net/team2/";
		var endString = "'";
		var sizeString = "?h=628&amp;w=418";
        //img2
        var images2 = images.replace(/1/g, '2');

        //first name
		var start_pos = images.indexOf('');
		var end_pos = images.indexOf('_',start_pos);
		var firstName = images.substring(start_pos,end_pos)

		//last name
		var start_pos = images.indexOf('_') + 1;
		var end_pos = images.indexOf('1',start_pos) - 1;
		var lastName = images.substring(start_pos,end_pos)

		//major
		var start_pos = images.indexOf('1_') + 2;
		var end_pos = images.indexOf('.jpg',start_pos);
		var majorRaw = images.substring(start_pos,end_pos)
		var major = majorRaw.replace(/_/g, ' ');
		
		

		//$( "#teamOut" ).append("<h1>"+firstName+"</h1>");

		/*$( "#teamOut" ).append('<div class="team-block"><img src="https://taw.imgix.net/team/'+images+sizeString+'" class="team-img" onmouseover="this.src='+urlString2+images2+sizeString+endString+'" onmouseout="this.src='+urlString+images+sizeString+endString+'"><h2 class="team-name">'+firstName+'<br>'+lastName+'</h2><h2 class="team-major">'+major+'</h2></div>');*/


		//test code for team image hovers
		$( "#teamOut" ).append('<div class="team-block"><img src='+urlString2+images2+sizeString+endString+'" class="team-img2">' +
			'<img src="https://taw.imgix.net/team/'+images+sizeString+'" class="team-img">\n<h2 class="team-name">'+firstName+'<br>'+lastName+'</h2><h2 class="team-major">'+major+'</h2></div>');
     });
  }
});



