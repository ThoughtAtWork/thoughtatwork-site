$.ajax({
  url: "http://localhost:8888/Website/img/team/",
  success: function(data){
     $(data).find("a:contains(.jpg)").each(function(){
        // will loop through 
        
        //img URL
        var images = $(this).attr("href");

        //first name
		var start_pos = images.indexOf('');
		var end_pos = images.indexOf('_',start_pos);
		var firstName = images.substring(start_pos,end_pos)
		console.log(firstName);

		//last name
		var start_pos = images.indexOf('_') + 1;
		var end_pos = images.indexOf('1',start_pos);
		var lastName = images.substring(start_pos,end_pos)
		console.log(lastName);

		console.log(images);



     });
  }
});