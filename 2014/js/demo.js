$(document).ready(function(e) {
  
  enableShadowBox();
  closeShadowBox();
  openWSB1();
  closeWSB1();
  openWSB2();
  closeWSB2();
  openWSB3();
  closeWSB3();
  openWSB4();
  closeWSB4();
  openWSB5();
  closeWSB5();
  openWSB6();
  closeWSB6();
  openWSB7();
  closeWSB7();
  openWSB8();
  closeWSB8();
  openDC();
  closeDC();
  openMC();
  closeMC();
  openBA();
  closeBA();
  openJW();
  closeJW();
  
});

function enableShadowBox() {
  
  //set up all the icon to be clickable
  $('.s_shadow').click(function(){
    
  //show thumbs
  $('#shadowbox').css( 'display' , 'block' );

  });
  
}

function closeShadowBox() {
  
  $('#shadowbox').click(function(){
    
    $('#shadowbox').css( 'display' , 'none' );
  });
}

function openWSB1() {

  $('#wsb1').click(function(){

      $('#shadowbox').css ( 'display', 'block');
      $('#workshopBlock1').addClass('clicked');
      $('#workshopBlock2').addClass('hidden');
      $('#workshopBlock3').addClass('hidden');
      $('#workshopBlock4').addClass('hidden');
      $('#workshopBlock5').addClass('hidden');
      $('#workshopBlock6').addClass('hidden');
      $('#workshopBlock7').addClass('hidden');
      $('#workshopBlock8').addClass('hidden');
      $('#designChallenge').addClass('hidden');
      $('#masterClass').addClass('hidden');
      $('#bradAscalon').addClass('hidden');
      $('#jasonWhite').addClass('hidden');

  });
}

function closeWSB1() {

  $('#shadowbox').click(function(){

      $('#shadowbox').css ( 'display', 'none');
      $('#workshopBlock1').removeClass('clicked');
      $('#workshopBlock2').removeClass('hidden');
      $('#workshopBlock3').removeClass('hidden');
      $('#workshopBlock4').removeClass('hidden');
      $('#workshopBlock5').removeClass('hidden');
      $('#workshopBlock6').removeClass('hidden');
      $('#workshopBlock7').removeClass('hidden');
      $('#workshopBlock8').removeClass('hidden');
      $('#designChallenge').removeClass('hidden');
      $('#masterClass').removeClass('hidden');
      $('#bradAscalon').removeClass('hidden');
      $('#jasonWhite').removeClass('hidden');
  });
}

function openWSB2() {

  $('#wsb2').click(function(){

      $('#shadowbox').css ( 'display', 'block');
      $('#workshopBlock1').addClass('hidden');
      $('#workshopBlock2').addClass('clicked');
      $('#workshopBlock3').addClass('hidden');
      $('#workshopBlock4').addClass('hidden');
      $('#workshopBlock5').addClass('hidden');
      $('#workshopBlock6').addClass('hidden');
      $('#workshopBlock7').addClass('hidden');
      $('#workshopBlock8').addClass('hidden');
      $('#designChallenge').addClass('hidden');
      $('#masterClass').addClass('hidden');
      $('#bradAscalon').addClass('hidden');
      $('#jasonWhite').addClass('hidden');
  });
}

function closeWSB2() {

  $('#shadowbox').click(function(){

      $('#shadowbox').css ( 'display', 'none');
      $('#workshopBlock1').removeClass('hidden');
      $('#workshopBlock2').removeClass('clicked');
      $('#workshopBlock3').removeClass('hidden');
      $('#workshopBlock4').removeClass('hidden');
      $('#workshopBlock5').removeClass('hidden');
      $('#workshopBlock6').removeClass('hidden');
      $('#workshopBlock7').removeClass('hidden');
      $('#workshopBlock8').removeClass('hidden');
      $('#designChallenge').removeClass('hidden');
      $('#masterClass').removeClass('hidden');
      $('#bradAscalon').removeClass('hidden');
      $('#jasonWhite').removeClass('hidden');
  });
}

function openWSB3() {

  $('#wsb3').click(function(){

      $('#shadowbox').css ( 'display', 'block');
      $('#workshopBlock1').addClass('hidden');
      $('#workshopBlock2').addClass('hidden');
      $('#workshopBlock3').addClass('clicked');
      $('#workshopBlock4').addClass('hidden');
      $('#workshopBlock5').addClass('hidden');
      $('#workshopBlock6').addClass('hidden');
      $('#workshopBlock7').addClass('hidden');
      $('#workshopBlock8').addClass('hidden');
      $('#designChallenge').addClass('hidden');
      $('#masterClass').addClass('hidden');
      $('#bradAscalon').addClass('hidden');
      $('#jasonWhite').addClass('hidden');
  });
}

function closeWSB3() {

  $('#shadowbox').click(function(){

      $('#shadowbox').css ( 'display', 'none');
      $('#workshopBlock1').removeClass('hidden');
      $('#workshopBlock2').removeClass('hidden');
      $('#workshopBlock3').removeClass('clicked');
      $('#workshopBlock4').removeClass('hidden');
      $('#workshopBlock5').removeClass('hidden');
      $('#workshopBlock6').removeClass('hidden');
      $('#workshopBlock7').removeClass('hidden');
      $('#workshopBlock8').removeClass('hidden');
      $('#designChallenge').removeClass('hidden');
      $('#masterClass').removeClass('hidden');
      $('#bradAscalon').removeClass('hidden');
      $('#jasonWhite').removeClass('hidden');
  });
}

function openWSB4() {

  $('#wsb4').click(function(){

      $('#shadowbox').css ( 'display', 'block');
      $('#workshopBlock1').addClass('hidden');
      $('#workshopBlock2').addClass('hidden');
      $('#workshopBlock3').addClass('hidden');
      $('#workshopBlock4').addClass('clicked');
      $('#workshopBlock5').addClass('hidden');
      $('#workshopBlock6').addClass('hidden');
      $('#workshopBlock7').addClass('hidden');
      $('#workshopBlock8').addClass('hidden');
      $('#designChallenge').addClass('hidden');
      $('#masterClass').addClass('hidden');
      $('#bradAscalon').addClass('hidden');
      $('#jasonWhite').addClass('hidden');
  });
}

function closeWSB4() {

  $('#shadowbox').click(function(){

      $('#shadowbox').css ( 'display', 'none');
      $('#workshopBlock1').removeClass('hidden');
      $('#workshopBlock2').removeClass('hidden');
      $('#workshopBlock3').removeClass('hidden');
      $('#workshopBlock4').removeClass('clicked');
      $('#workshopBlock5').removeClass('hidden');
      $('#workshopBlock6').removeClass('hidden');
      $('#workshopBlock7').removeClass('hidden');
      $('#workshopBlock8').removeClass('hidden');
      $('#designChallenge').removeClass('hidden');
      $('#masterClass').removeClass('hidden');
      $('#bradAscalon').removeClass('hidden');
      $('#jasonWhite').removeClass('hidden');
  });
}

function openWSB5() {

  $('#wsb5').click(function(){

      $('#shadowbox').css ( 'display', 'block');
      $('#workshopBlock1').addClass('hidden');
      $('#workshopBlock2').addClass('hidden');
      $('#workshopBlock3').addClass('hidden');
      $('#workshopBlock4').addClass('hidden');
      $('#workshopBlock5').addClass('clicked');
      $('#workshopBlock6').addClass('hidden');
      $('#workshopBlock7').addClass('hidden');
      $('#workshopBlock8').addClass('hidden');
      $('#designChallenge').addClass('hidden');
      $('#masterClass').addClass('hidden');
      $('#bradAscalon').addClass('hidden');
      $('#jasonWhite').addClass('hidden');
  });
}

function closeWSB5() {

  $('#shadowbox').click(function(){

      $('#shadowbox').css ( 'display', 'none');
      $('#workshopBlock1').removeClass('hidden');
      $('#workshopBlock2').removeClass('hidden');
      $('#workshopBlock3').removeClass('hidden');
      $('#workshopBlock4').removeClass('hidden');
      $('#workshopBlock5').removeClass('clicked');
      $('#workshopBlock6').removeClass('hidden');
      $('#workshopBlock7').removeClass('hidden');
      $('#workshopBlock8').removeClass('hidden');
      $('#designChallenge').removeClass('hidden');
      $('#masterClass').removeClass('hidden');
      $('#bradAscalon').removeClass('hidden');
      $('#jasonWhite').removeClass('hidden');
  });
}

function openWSB6() {

  $('#wsb6').click(function(){

      $('#shadowbox').css ( 'display', 'block');
      $('#workshopBlock1').addClass('hidden');
      $('#workshopBlock2').addClass('hidden');
      $('#workshopBlock3').addClass('hidden');
      $('#workshopBlock4').addClass('hidden');
      $('#workshopBlock5').addClass('hidden');
      $('#workshopBlock6').addClass('clicked');
      $('#workshopBlock7').addClass('hidden');
      $('#workshopBlock8').addClass('hidden');
      $('#designChallenge').addClass('hidden');
      $('#masterClass').addClass('hidden');
      $('#bradAscalon').addClass('hidden');
      $('#jasonWhite').addClass('hidden');
  });
}

function closeWSB6() {

  $('#shadowbox').click(function(){

      $('#shadowbox').css ( 'display', 'none');
      $('#workshopBlock1').removeClass('hidden');
      $('#workshopBlock2').removeClass('hidden');
      $('#workshopBlock3').removeClass('hidden');
      $('#workshopBlock4').removeClass('hidden');
      $('#workshopBlock5').removeClass('hidden');
      $('#workshopBlock6').removeClass('clicked');
      $('#workshopBlock7').removeClass('hidden');
      $('#workshopBlock8').removeClass('hidden');
      $('#designChallenge').removeClass('hidden');
      $('#masterClass').removeClass('hidden');
      $('#bradAscalon').removeClass('hidden');
      $('#jasonWhite').removeClass('hidden');
  });
}

function openWSB7() {

  $('#wsb7').click(function(){

      $('#shadowbox').css ( 'display', 'block');
      $('#workshopBlock1').addClass('hidden');
      $('#workshopBlock2').addClass('hidden');
      $('#workshopBlock3').addClass('hidden');
      $('#workshopBlock4').addClass('hidden');
      $('#workshopBlock5').addClass('hidden');
      $('#workshopBlock6').addClass('hidden');
      $('#workshopBlock7').addClass('clicked');
      $('#workshopBlock8').addClass('hidden');
      $('#designChallenge').addClass('hidden');
      $('#masterClass').addClass('hidden');
      $('#bradAscalon').addClass('hidden');
      $('#jasonWhite').addClass('hidden');
  });
}

function closeWSB7() {

  $('#shadowbox').click(function(){

      $('#shadowbox').css ( 'display', 'none');
      $('#workshopBlock1').removeClass('hidden');
      $('#workshopBlock2').removeClass('hidden');
      $('#workshopBlock3').removeClass('hidden');
      $('#workshopBlock4').removeClass('hidden');
      $('#workshopBlock5').removeClass('hidden');
      $('#workshopBlock6').removeClass('hidden');
      $('#workshopBlock7').removeClass('clicked');
      $('#workshopBlock8').removeClass('hidden');
      $('#designChallenge').removeClass('hidden');
      $('#masterClass').removeClass('hidden');
      $('#bradAscalon').removeClass('hidden');
      $('#jasonWhite').removeClass('hidden');
  });
}

function openWSB8() {

  $('#wsb8').click(function(){

      $('#shadowbox').css ( 'display', 'block');
      $('#workshopBlock1').addClass('hidden');
      $('#workshopBlock2').addClass('hidden');
      $('#workshopBlock3').addClass('hidden');
      $('#workshopBlock4').addClass('hidden');
      $('#workshopBlock5').addClass('hidden');
      $('#workshopBlock6').addClass('hidden');
      $('#workshopBlock7').addClass('hidden');
      $('#workshopBlock8').addClass('clicked');
      $('#designChallenge').addClass('hidden');
      $('#masterClass').addClass('hidden');
      $('#bradAscalon').addClass('hidden');
      $('#jasonWhite').addClass('hidden');
  });
}

function closeWSB8() {

  $('#shadowbox').click(function(){

      $('#shadowbox').css ( 'display', 'none');
      $('#workshopBlock1').removeClass('hidden');
      $('#workshopBlock2').removeClass('hidden');
      $('#workshopBlock3').removeClass('hidden');
      $('#workshopBlock4').removeClass('hidden');
      $('#workshopBlock5').removeClass('hidden');
      $('#workshopBlock6').removeClass('hidden');
      $('#workshopBlock7').removeClass('hidden');
      $('#workshopBlock8').removeClass('clicked');
      $('#designChallenge').removeClass('hidden');
      $('#masterClass').removeClass('hidden');
      $('#bradAscalon').removeClass('hidden');
      $('#jasonWhite').removeClass('hidden');
  });
}

function openDC() {

  $('.dChallenge').click(function(){

      $('#shadowbox').css ( 'display', 'block');
      $('#workshopBlock1').addClass('hidden');
      $('#workshopBlock2').addClass('hidden');
      $('#workshopBlock3').addClass('hidden');
      $('#workshopBlock4').addClass('hidden');
      $('#workshopBlock5').addClass('hidden');
      $('#workshopBlock6').addClass('hidden');
      $('#workshopBlock7').addClass('hidden');
      $('#workshopBlock8').addClass('hidden');
      $('#designChallenge').addClass('clicked');
      $('#masterClass').addClass('hidden');
      $('#bradAscalon').addClass('hidden');
      $('#jasonWhite').addClass('hidden');
  });
}

function closeDC() {

  $('#shadowbox').click(function(){

      $('#shadowbox').css ( 'display', 'none');
      $('#workshopBlock1').removeClass('hidden');
      $('#workshopBlock2').removeClass('hidden');
      $('#workshopBlock3').removeClass('hidden');
      $('#workshopBlock4').removeClass('hidden');
      $('#workshopBlock5').removeClass('hidden');
      $('#workshopBlock6').removeClass('hidden');
      $('#workshopBlock7').removeClass('hidden');
      $('#workshopBlock8').removeClass('hidden');
      $('#designChallenge').removeClass('clicked');
      $('#masterClass').removeClass('hidden');
      $('#bradAscalon').removeClass('hidden');
      $('#jasonWhite').removeClass('hidden');
  });
}

function openMC() {

  $('#mClass').click(function(){

      $('#shadowbox').css ( 'display', 'block');
      $('#workshopBlock1').addClass('hidden');
      $('#workshopBlock2').addClass('hidden');
      $('#workshopBlock3').addClass('hidden');
      $('#workshopBlock4').addClass('hidden');
      $('#workshopBlock5').addClass('hidden');
      $('#workshopBlock6').addClass('hidden');
      $('#workshopBlock7').addClass('hidden');
      $('#workshopBlock8').addClass('hidden');
      $('#designChallenge').addClass('hidden');
      $('#masterClass').addClass('clicked');
      $('#bradAscalon').addClass('hidden');
      $('#jasonWhite').addClass('hidden');
  });
}

function closeMC() {

  $('#shadowbox').click(function(){

      $('#shadowbox').css ( 'display', 'none');
      $('#workshopBlock1').removeClass('hidden');
      $('#workshopBlock2').removeClass('hidden');
      $('#workshopBlock3').removeClass('hidden');
      $('#workshopBlock4').removeClass('hidden');
      $('#workshopBlock5').removeClass('hidden');
      $('#workshopBlock6').removeClass('hidden');
      $('#workshopBlock7').removeClass('hidden');
      $('#workshopBlock8').removeClass('hidden');
      $('#designChallenge').removeClass('hidden');
      $('#masterClass').removeClass('clicked');
      $('#bradAscalon').removeClass('hidden');
      $('#jasonWhite').removeClass('hidden');
  });
}

function openBA() {

  $('#bAscalon').click(function(){

      $('#shadowbox').css ( 'display', 'block');
      $('#workshopBlock1').addClass('hidden');
      $('#workshopBlock2').addClass('hidden');
      $('#workshopBlock3').addClass('hidden');
      $('#workshopBlock4').addClass('hidden');
      $('#workshopBlock5').addClass('hidden');
      $('#workshopBlock6').addClass('hidden');
      $('#workshopBlock7').addClass('hidden');
      $('#workshopBlock8').addClass('hidden');
      $('#designChallenge').addClass('hidden');
      $('#masterClass').addClass('hidden');
      $('#bradAscalon').addClass('clicked');
      $('#jasonWhite').addClass('hidden');
  });
}

function closeBA() {

  $('#shadowbox').click(function(){

      $('#shadowbox').css ( 'display', 'none');
      $('#workshopBlock1').removeClass('hidden');
      $('#workshopBlock2').removeClass('hidden');
      $('#workshopBlock3').removeClass('hidden');
      $('#workshopBlock4').removeClass('hidden');
      $('#workshopBlock5').removeClass('hidden');
      $('#workshopBlock6').removeClass('hidden');
      $('#workshopBlock7').removeClass('hidden');
      $('#workshopBlock8').removeClass('hidden');
      $('#designChallenge').removeClass('hidden');
      $('#masterClass').removeClass('hidden');
      $('#bradAscalon').removeClass('clicked');
      $('#jasonWhite').removeClass('hidden');
  });
}

function openJW() {

  $('#jWhite').click(function(){

      $('#shadowbox').css ( 'display', 'block');
      $('#workshopBlock1').addClass('hidden');
      $('#workshopBlock2').addClass('hidden');
      $('#workshopBlock3').addClass('hidden');
      $('#workshopBlock4').addClass('hidden');
      $('#workshopBlock5').addClass('hidden');
      $('#workshopBlock6').addClass('hidden');
      $('#workshopBlock7').addClass('hidden');
      $('#workshopBlock8').addClass('hidden');
      $('#designChallenge').addClass('hidden');
      $('#masterClass').addClass('hidden');
      $('#bradAscalon').addClass('hidden');
      $('#jasonWhite').addClass('clicked');
  });
}

function closeJW() {

  $('#shadowbox').click(function(){

      $('#shadowbox').css ( 'display', 'none');
      $('#workshopBlock1').removeClass('hidden');
      $('#workshopBlock2').removeClass('hidden');
      $('#workshopBlock3').removeClass('hidden');
      $('#workshopBlock4').removeClass('hidden');
      $('#workshopBlock5').removeClass('hidden');
      $('#workshopBlock6').removeClass('hidden');
      $('#workshopBlock7').removeClass('hidden');
      $('#workshopBlock8').removeClass('hidden');
      $('#designChallenge').removeClass('hidden');
      $('#masterClass').removeClass('hidden');
      $('#bradAscalon').removeClass('hidden');
      $('#jasonWhite').removeClass('clicked');
  });
}