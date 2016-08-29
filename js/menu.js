/**
 * Created by colejohnson on 8/12/16.
 */


function gofetch(name){

// iterate over each element in the array
    for (var i = 0; i < restaurants.length; i++){
        // look for the entry with a matching `code` value
        if (restaurants[i].name == name){
            // we found it
            alert(restaurants[i].desc)
        }
    }
}



function campus(){

    document.getElementById("food-menu-2").scrollTop = 0;
    document.getElementById("food-menu-list2").innerHTML = "";

    var i;

    for (i = 0; i < restaurants.length; i++) {
        var listItem = document.createElement('li');
        listItem.className = "food-menu-list2-item";
        var text = document.createTextNode(restaurants[i].name);
        listItem.appendChild(text);
        (function () {
            var tofetch = restaurants[i].name;
            listItem.addEventListener('click',function () {
                gofetch(tofetch);
            });
        }());
        document.getElementById("food-menu-list2").appendChild(listItem);
    }

    //var listItem = document.createElement('li');
    //listItem.className = "food-menu-list2-item";
    //var text = document.createTextNode("Java’s");
    //var tofetch = "Javas";
    //listItem.addEventListener('click',function () {
    //    gofetch(tofetch);
    //});
    //listItem.appendChild(text);
    //document.getElementById("food-menu-list2").appendChild(listItem);
    //
    //var listItem = document.createElement('li');
    //listItem.className = "food-menu-list2-item";
    //var text = document.createTextNode("Midnight Oil");
    //var tofetch = "Midnight";
    //listItem.addEventListener('click',function () {
    //    gofetch(tofetch);
    //});
    //listItem.appendChild(text);
    //document.getElementById("food-menu-list2").appendChild(listItem);
    //
    //var listItem = document.createElement('li');
    //listItem.className = "food-menu-list2-item";
    //var text = document.createTextNode("Crossroads");
    //var tofetch = "Crossroads";
    //listItem.addEventListener('click',function () {
    //    gofetch(tofetch);
    //});
    //listItem.appendChild(text);
    //document.getElementById("food-menu-list2").appendChild(listItem);
    //
    //var listItem = document.createElement('li');
    //listItem.className = "food-menu-list2-item";
    //var text = document.createTextNode("Salsarita’s");
    //listItem.appendChild(text);
    //document.getElementById("food-menu-list2").appendChild(listItem);
    //
    //var listItem = document.createElement('li');
    //listItem.className = "food-menu-list2-item";
    //var text = document.createTextNode("Lovin’ Cup");
    //listItem.appendChild(text);
    //document.getElementById("food-menu-list2").appendChild(listItem);


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

 restaurants = [
     {
        "name": "Java's",
        "desc": "Enjoy fresh gourmet coffee, tea, smoothies, lemonade and light snacks while relaxing in a casual, comfortable atmosphere.",
        "location": "Located on the 1st floor of the Wallace Library",
        "hours": "Friday: 7:30AM -10:30PM <br> Saturday: 11:30AM - 9:00PM <br> Sunday: 11:30AM - 9:00PM"
    },
    {
        "name": "Midnight Oil",
        "desc": "Convenient destination open late serving everything from breakfast sandwiches and Starbucks coffee and tasty artisan sandwiches and treats.",
        "location": "Located in Global Village",
        "hours": "Friday: 7:30AM -12:00AM<br/>Saturday: 10:00AM - 12:00AM</br>Sunday: 10:00AM - 12:00AM"
    },
    {
        "name": "Crossroads",
        "desc": "Market and cafe with stations featuring pasta & pizza, salads & to-go, a deli, Jump Asian Cuisine, Cross Bar, and the grill.",
        "location": "Located in Global Village",
        "hours": "Friday: 11:00AM- 11:00PM <br/>Saturday: Closed</br>Sunday: 12:00PM - 8:00PM"
    },
    {
        "name": "Salsarita’s",
        "desc": "Offers freshly prepared MTO tacos, burritos, quesadillas, Mexican pizzas, nachos, and salads. A bar serving alcoholic and non-alcoholic beverages is also available.",
        "location": "Located in Global Village",
        "hours": "Friday: 11:00AM - 9:00PM <br/>Saturday: 11:00AM - 8:00PM </br>Sunday: Closed"
    },
    {
        "name": "Lovin’ Cup",
        "desc": "Convivial American bistro with an intricate wine rack hosts music & events like trivia & brewery tastings.",
        "location": "Located in Park Point",
        "hours": "Friday:	11:00AM - 2:00AM <br/>Saturday: 11:00AM–2:00AM </br>Sunday: 12:00–10PM"
    }
 ];
