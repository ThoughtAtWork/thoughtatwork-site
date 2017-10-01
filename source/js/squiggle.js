window.addEventListener('scroll', function(e) {
 var scrl = window.scrollY
 //var height = window.screen.height

 //console.log("h: " + h)
 console.log("scrl: " +scrl)

 document.querySelectorAll('.up')
   .forEach(function(el){
     if (scrl < 250 ) {
       el.style.top = scrl/20 +'px';
     }
 });

 document.querySelectorAll('.down')
   .forEach(function(el){
     if (scrl < 250) {
       el.style.top = - scrl/20 +'px';
     }
 });
});
