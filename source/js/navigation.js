$('.nav--toggle').click(function () {
    "use strict";
    document.getElementById("nav--mobile").style.width = "100%";
    $('body').addClass('noScroll');
});

$('.nav--overlay-closebtn').click(function () {
    "use strict";
    document.getElementById("nav--mobile").style.width = "0%";
    $('body').removeClass('noScroll');
});