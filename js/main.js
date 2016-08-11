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


function campus(){

    document.getElementById("food-menu-2").scrollTop = 0;
    document.getElementById("food-menu-list2").innerHTML = "";

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Java’s");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Midnight Oil");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Crossroads");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Salsarita’s");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Lovin’ Cup");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);


}

function henrietta(){

    document.getElementById("food-menu-2").scrollTop = 0;
    document.getElementById("food-menu-list2").innerHTML = "";

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Jay’s Diner");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Bruegger’s");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Pi Craft");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("MacGregor’s");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("SEA Restaurant");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Chipotle");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Raj Mahal");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Wegmans");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Sticky Lips");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);


}


function rochester(){

    document.getElementById("food-menu-2").scrollTop = 0;
    document.getElementById("food-menu-list2").innerHTML = "";

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Tap & Mallet");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Swillburger");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("The Owl House");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Salena’s");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Dogtown");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Dinosaur BBQ");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("ButaPub");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Lux");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Nox");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Solera Wine Lounge & Cheshire Bar");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

    var listItem = document.createElement('li');
    listItem.className = "food-menu-list2-item";
    var text = document.createTextNode("Marshall Street Bar & Grill");
    listItem.appendChild(text);
    document.getElementById("food-menu-list2").appendChild(listItem);

}