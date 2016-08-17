var navOffset = $(".navOff").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > navOffset)
    {   
       $('.nav').css({"background":"black"});
    } else {
       $('.nav').css({"background":"transparent"});
    }
});