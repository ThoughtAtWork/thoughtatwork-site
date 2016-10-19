$.ajax({
  url: "img/team/",
  success: function(data){
     $(data).find("a:contains(.jpg)").each(function(){
        // will loop through 
        
        //img URL
        var images = $(this).attr("href");
        var imagesFull = "img/team/"+images 

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
		
		var urlString = "'img/team2/";
		var endString = "'";

		//$( "#teamOut" ).append("<h1>"+firstName+"</h1>");

		$( "#teamOut" ).append('<div class="team-block"><img src="img/team/'+images+'" class="img-responsive team-img" onmouseover="this.src='+urlString+images2+endString+'" onmouseout="this.src='+endString+imagesFull+endString+'"><h2 class="team-name">'+firstName+'<br>'+lastName+'</h2><h2 class="team-major">'+major+'</h2></div>');
     });
  }
});