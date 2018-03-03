$( document ).ready(function() {

  $( "#registerForm #coupon" ).on("change paste keyup", function() {
    //console.log($(this).val());
    if($(this).val().length >= 10){

      $.post('valid_coupon.php',{coupon: $(this).val()}, function(data){
        if(data){
          $('.coupon-success').show();
          $('.coupon-fail').hide();
          console.log(data);
        }else{
          console.log(data);
          $('.coupon-fail').show();
          $('.coupon-success').hide();

        }
     }, 'JSON');

   }else if( $(this).val().length > 0 &&  $(this).val().length < 10){

    $('.coupon-fail').show();
    $('.coupon-success').hide();

  }else{

    $('.coupon-fail').hide();
    $('.coupon-success').hide();
  }

  });

});
