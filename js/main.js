var deadline = 'October 23 2016 23:59:59 GMT+0200';

function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());

    var seconds = (t / 1000) | 0;
    t -= seconds * 1000;

    var minutes = (seconds / 60) | 0;
    seconds -= minutes * 60;

    var hours = (minutes / 60) | 0;
    minutes -= hours * 60;

    var days = (hours / 24) | 0;
    hours -= days * 24;

    var weeks = (days / 7) | 0;
    days -= weeks * 7;
    return {
        'total': t,
        'weeks': weeks,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    var weeksSpan = clock.querySelector('.weeks');
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    function updateClock(){
        var t = getTimeRemaining(endtime);
        weeksSpan.innerHTML = t.weeks;
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = t.hours;
        minutesSpan.innerHTML = t.minutes;
        if(t.total<=0){
            clearInterval(timeinterval);
        }
    }

    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock,1000);
}

initializeClock('clockdiv', deadline);



function onMapClickHandler(){

    document.getElementById("map").style.pointerEvents = "auto";

}

// Enable map zooming with mouse scroll when the user clicks the map
