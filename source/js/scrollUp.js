$(document).ready(function() {
  $('#return-to-top').click(function() {
    console.log("top clicked");
    $("html, body").animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
