/**
 * Created by colejohnson on 8/12/16.
 */


function gofetch(name){

    document.getElementById("food-menu-3").innerHTML = "";


    var title;
    var text;
    var hours;
    var location;

// iterate over each element in the array
    for (var i = 0; i < restaurants.length; i++){
        // look for the entry with a matching `code` value
        if (restaurants[i].name == name){
            // found it
            title = restaurants[i].name;
            text = restaurants[i].desc;
            hours = restaurants[i].hours;
            location = restaurants[i].location;
        }
    }

    var header = document.createElement('h2');
    header.innerText = title;

    var rtext = document.createElement('p');
    rtext.innerText = text;
    rtext.className = "food-menu-list3-item";

    var rlocation = document.createElement('p');
    rlocation.innerText = location;
    rlocation.style.color = "red";
    rlocation.className = "food-menu-list3-item";

    var rhours = document.createElement('p');
    rhours.innerText = hours;
    rhours.className = "food-menu-list3-item";


    document.getElementById("food-menu-3").appendChild(header);
    document.getElementById("food-menu-3").appendChild(rtext);
    document.getElementById("food-menu-3").appendChild(rlocation);
    document.getElementById("food-menu-3").appendChild(rhours);



}



function campus(){

    document.getElementById("food-menu-2").scrollTop = 0;
    document.getElementById("food-menu-list2").innerHTML = "";

    var i;

    for (i = 0; i < 5; i++) {
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


}

function henrietta(){

    document.getElementById("food-menu-2").scrollTop = 0;
    document.getElementById("food-menu-list2").innerHTML = "";

    var i;

    for (i = 5; i < 14; i++) {
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

}


function rochester(){

    document.getElementById("food-menu-2").scrollTop = 0;
    document.getElementById("food-menu-list2").innerHTML = "";

    var i;

    for (i = 14; i < 25; i++) {
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

}

restaurants = [
    {
        "name": "Java's",
        "desc": "Enjoy fresh gourmet coffee, tea, smoothies, lemonade and light snacks while relaxing in a casual, comfortable atmosphere.",
        "location": "Located on the 1st floor of the Wallace Library",
        "hours": "Friday: 7:30AM -10:30PM \n Saturday: 11:30AM - 9:00PM \n Sunday: 11:30AM - 9:00PM"
    },
    {
        "name": "Midnight Oil",
        "desc": "Convenient destination open late serving everything from breakfast sandwiches and Starbucks coffee and tasty artisan sandwiches and treats.",
        "location": "Located in Global Village",
        "hours": "Friday: 7:30AM -12:00AM \n Saturday: 10:00AM - 12:00AM \n Sunday: 10:00AM - 12:00AM"
    },
    {
        "name": "Crossroads",
        "desc": "Market and cafe with stations featuring pasta & pizza, salads & to-go, a deli, Jump Asian Cuisine, Cross Bar, and the grill.",
        "location": "Located in Global Village",
        "hours": "Friday: 11:00AM- 11:00PM \n Saturday: Closed \n Sunday: 12:00PM - 8:00PM"
    },
    {
        "name": "Salsarita’s",
        "desc": "Offers freshly prepared MTO tacos, burritos, quesadillas, Mexican pizzas, nachos, and salads. A bar serving alcoholic and non-alcoholic beverages is also available.",
        "location": "Located in Global Village",
        "hours": "Friday: 11:00AM - 9:00PM \n Saturday: 11:00AM - 8:00PM \n Sunday: Closed"
    },
    {
        "name": "Lovin’ Cup",
        "desc": "Convivial American bistro with an intricate wine rack hosts music & events like trivia & brewery tastings.",
        "location": "Located in Park Point",
        "hours": "Friday:	11:00AM - 2:00AM \n Saturday: 11:00AM–2:00AM \n Sunday: 12:00–10PM"
    },
    {
        "name": "Jay’s Diner",
        "desc": "2612 W Henrietta Rd, Rochester, NY 14623",
        "location": "Casual diner eats & milkshakes in an updated retro space that started as a soda shop in 1945.",
        "hours": "Open 24 hours"
    },
    {
        "name": "Bruegger’s",
        "desc": "Cafe/bakery chain preparing small-batch, New York-style bagels, plus breakfast & lunch sandwiches.",
        "location": "3333 W Henrietta Rd, Rochester, NY 14623",
        "hours": "Friday:	6:00AM - 6:00PM \n Saturday: 6:00AM - 5:00PM \n Sunday 6:00AM - 5:00PM"
    },
    {
        "name": "Pi Craft",
        "desc": "Hand crafted pizzas, focaccia sandwiches and salads using fresh ingredients, served in a fast casual style.",
        "location": "100 Marketplace Dr, Henrietta, NY 14623",
        "hours": "Friday: 11AM–10PM \n Saturday: 11AM–10PM \n Sunday: 11AM–10PM"
    },
    {
        "name": "MacGregor’s",
        "desc": "Myriad brews & a wide variety of standard grill fare in spirited digs with TVs & arcade games.",
        "location": "300 Jefferson Rd, Rochester, NY 14623",
        "hours": "Friday: 11:00AM - 2:00AM \n Saturday: 11:00AM - 2:00AM \n Sunday: 11:00AM - 2:00AM"
    },
    {
        "name": "SEA Restaurant",
        "desc": "Variety of dishes mainly from Vietnam and Thailand, known for its pho.",
        "location": "1675 Mt Hope Ave, Rochester, NY 14620",
        "hours": "Friday: 11:00AM - 10:00PM \n Saturday: 11:00AM - 10:00PM \n Sunday: Closed"
    },
    {
        "name": "Chipotle",
        "desc": "Fast-food chain offering Mexican fare, including design-your-own burritos, tacos & bowls.",
        "location": "640 Jefferson Rd, Rochester, NY 14623",
        "hours": "Friday:	11:00AM - 10:00PM \n Saturday: 11:00AM - 10:00PM \n Sunday: 11:00AM - 10:00PM"
    },
    {
        "name": "Raj Mahal",
        "desc": "Buffet-style Indian dishes & à la carte dinner.",
        "location": "368 Jefferson Rd, Rochester, NY 14623",
        "hours": "Friday: 11:30AM - 2:30PM, 5:00 - 10PM \n Saturday: 11:30AM - 3:00PM, 5:00 - 10:00PM \n Sunday: 11:30AM - 7:00PM"
    },
    {
        "name": "Wegmans",
        "desc": "Sushi, Beer, Asian Bar, Sub Shop, Pizza, Bakery, Nature’s Marketplace",
        "location": "650 Hylan Dr, Rochester, NY 14623",
        "hours": "Open 24 hours"
    },
    {
        "name": "Sticky Lips",
        "desc": "Meat-lover's palace boasts a giant menu of slow-smoked BBQ fare, 50+ taps & a stage for live bands.",
        "location": "830 Jefferson Rd, Rochester, NY 14623",
        "hours": "Friday:		11AM–12AM \n Saturday:	11AM–12AM \n Sunday:	10:30AM–9PM"
    },
    {
        "name": "Tap & Mallet",
        "desc": "Mellow spot serving contemporary & vegan pub grub & a huge beer menu with numerous taps & cask ale.",
        "location": "381 Gregory St, Rochester, NY 14620",
        "hours": "Friday: 11:30AM - 2:00AM \n Saturday: 11:30AM - 2:00AM \n Sunday: 4:00PM - 12:00AM"
    },
    {
        "name": "Swillburger",
        "desc": "Swillburger is a modern take on the classic American burger joint, sourcing all natural beef with a focus on sustainable food practices.",
        "location": "820 Clinton Avenue South, Rochester, NY 14623",
        "hours": "Friday: 12:00PM - 2AM \n Saturday: 12:00PM - 2AM \n Sunday: 12:00PM - 2AM"
    },
    {
        "name": "The Owl House",
        "desc": "The Owl House specializes in fresh, made-from-scratch New American food and inventive craft cocktail. Menu includes an uncommonly large selection of vegetarian, vegan and gluten-free dishes.",
        "location": "75 Marshall Street, Rochester, NY 14607",
        "hours": "Friday: 11:30AM - 3PM, 5PM - 11PM \n Saturday: 11AM - 3PM, 5PM - 11PM \n Sunday: 11AM - 3PM, 5PM - 10PM"
    },
    {
        "name": "Salena’s",
        "desc": "Tacos, fajitas & authentic Mexican fare in vibrant hot spot energized by 90+ tequilas & happy hour.",
        "location": "302 Goodman St N #247, Rochester, NY 14607",
        "hours": "Friday: 11:30AM - 11:00PM \n Saturday: 11:30AM - 11:00PM \n Sunday: 3:00PM - 9:00PM"
    },
    {
        "name": "Dogtown",
        "desc": "Tiny shack known for German-style franks named after dog breeds, with burgers & veggie options.",
        "location": "691 Monroe Ave, Rochester, NY 14607",
        "hours": "Friday: 11:00AM - 12:00AM \n Saturday: 11:00AM - 12:00AM \n Sunday: Closed"
    },
    {
        "name": "Dinosaur BBQ",
        "desc": "Barbecue chain serving Southern-style meats & draft brews in a retro setting.",
        "location": "99 Court St, Rochester, NY 14604",
        "hours": "Friday:	11:00AM - 12:00AM \n Saturday: 11:00AM - 12:00AM \n Sunday: 12:00PM - 10:00PM"
    },
    {
        "name": "ButaPub",
        "desc": "Cozy, modern gastropub featuring craft beers & cocktails as well as inventive Asian-inspired eats.",
        "location": "315 Gregory St, Rochester, NY 14620",
        "hours": "Friday:	11:00AM - 2:00AM \n Saturday: 11:00AM - 2:00AM \n Sunday: 10:30AM - 4:00PM"
    },
    {
        "name": "Lux",
        "desc": "Offbeat hangout for cocktails with a backyard & fire pit, plus a pool table, jukebox & board games.",
        "location": "666 South Ave, Rochester, NY 14620",
        "hours": "Friday: 4:30PM - 2:00AM \n Saturday: 4:00PM - 2:00AM \n Sunday: 4:00PM  -2:00AM"
    },
    {
        "name": "Nox",
        "desc": "Quirky, laid-back spot offering craft cocktails, revisited comfort food & trivia nights.",
        "location": "302 Goodman St N, Rochester, NY 14607",
        "hours": "Friday: 4:00PM - 12:00AM \n Saturday: 12:00PM - 12:00AM \n Sunday: 12:00PM - 12:00AM"
    },
    {
        "name": "Solera Wine Lounge & Cheshire Bar",
        "desc": "Warm, stylish wine bar featuring an array of whites & reds, with cheese & charcuterie boards. Cheshire is a classic old-style bar in the room above Solera, featuring classic pre-Prohibition cocktails such as old-fashioneds, Sazeracs, Negronis, Manhattans and whiskey sours.",
        "location": "647 South Ave, Rochester, NY 14620",
        "hours": "Friday: 5:00PM - 12:00AM \n Saturday: 6:00PM - 12:00AM \n Sunday: Closed"
    },
    {
        "name": "Marshall Street Bar & Grill",
        "desc": "Friendly, neighborhood atmosphere with great drink specials and a full food menu.",
        "location": "81 Marshall Street, Rochester, NY 14607 (down the block from The Owl House)",
        "hours": "Friday: 11am - 2am \n Saturday: 11am - 2am \n Sunday: 12pm - 2am"
    }

];
