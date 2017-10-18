var days = ["fri", "sat", "sun"];
var cur_day = "fri";
var day_start = 9;
var day_end = 24;
var schedule = {
  "fri": {
    events: [
      {
        title: "Registration & Check-In",
        person: "",
        loc: "Bevier Lobby, 2nd Floor Booth Hall",
        start: "9:00AM",
        end: "6:00PM",
        disc: ""
      }, {
        title: "Welcoming Address",
        person: "",
        loc: "University Gallery",
        start: "10:30AM",
        end: "11:30AM",
        disc: ""
      }, {
        title: "From My Career to Yours",
        person: "Anita Casale",
        loc: "Booth 3350",
        start: "11:45AM",
        end: "12:45PM",
        disc: "With 25 years of experience, Anita has a storied career in product, corporate design and design strategy to share. Starting as a student at RIT to now Head of Design Operations at Converse, follow Anita through her career path and experiences in the professional world as a designer and creative and learn how you can empower yourself as a person and as a designer."
      }, {
        title: "Dear Design Student",
        person: "Mitch Goldstein",
        loc: "Booth 3310",
        start: "11:45AM",
        end: "12:45PM",
        disc: "You learn a ton of stuff at school. This talk is about all of the other stuff you should know too, like how to get the most out of the experience, what your teachers (and future employers) are really looking for, why design is not the only thing you should be paying attention to, and a bunch of other stuff that’s not on the syllabus. Bring your questions with you, as this session will have lots of time for Q&A."
      }, {
        title: "Enterprise Wearables and Augmented Reality (No Pokémon, please)",
        person: "Bryan Shackelford",
        loc: "Booth 3330",
        start: "11:45AM",
        end: "12:45PM",
        disc: "How are some people using augmented reality to do more than play games? What can we learn from the debacle that was Google glasses to design smarter? Bryan will review the newest models in wearable design and case studies on augmented reality in industrial settings and their respective UX and UI. Finally, he’ll go in what it takes to prototype for appearance and for function in both the hardware and software."
      }, {
        title: "Lunch",
        person: "",
        loc: "Booth 3310",
        start: "1:00PM",
        end: "2:00PM",
        disc: "It's lunch! Check on and off campus dining options!"
      }, {
        title: "Pre-Keynote: Wood is Good",
        person: "Seth Eshelman",
        loc: "Webb Auditorium",
        start: "2:15PM",
        end: "3:00PM",
        disc: "Learn from Seth in his experience as an entrepreneur running an environmentally conscious furniture and interior architecture design business, Staach."
      }, {
        title: "Keynote: Ideas Have to Start Somewhere",
        person: "Andrew Herzog",
        loc: "Webb Auditorium",
        start: "3:00PM",
        end: "4:15PM",
        disc: "You might be eager to graduate and start getting paid for your design work but in this talk Andrew will show you that student work and independent projects can be just as rewarding. Learn about how Andrew’s college work and personal projects have found their way into his work at Google Creative Lab and HAWRAF and what that means for you."
      }, {
        title: "Design Yourself",
        person: "Hector Silva",
        loc: "Booth 3350",
        start: "4:30PM",
        end: "5:30PM",
        disc: "There’s more to design success than doing the work. Hector Silva is a leader in the design sketching Instagram community, in this talk he will teach you how to effectively use social media platforms to promote yourself, collaborate with brands and build relationships."
      }, {
        title: "Stand Out!",
        person: "Tnaya Witmer",
        loc: "Booth 3330",
        start: "4:30PM",
        end: "5:30PM",
        disc: "Feeling cramped in the design world? Learn how to distinguish yourself and your work from your peers with Tnaya’s tips, tricks and insights gained as a motion graphic designer and creative director for Sarofsky."
      }, {
        title: "Emerging Interface Concepts for Digital and Physical Products",
        person: "Tim Wood",
        loc: "Booth 3310",
        start: "4:30PM",
        end: "6:00PM",
        disc: "Tim is here to identify many of the new, critical, and emerging user interface concepts and how they can be best applied to digital and/or physical products. This workshop has been specifically created and designed to provide you with many brand new ideas that will supercharge your upcoming projects and jumpstart your creativity as a designer, and all of it just in time for midterms!"
      }, {
        title: "Design Faster with 3D Modeling: Fusion 360 Workshop",
        person: "Jeff Smith",
        loc: "Booth 1540",
        start: "4:30PM",
        end: "6:00PM",
        disc: "Looking for a skill booster in your 3D modelling skills? Come to this fast paced workshop session to learn about the next generation of CAD software with design educator Jeff Smith. Learn how to use Autodesk Fusion 360 and bring your product design ideas to life from ideation into execution."
      }, {
        title: "Dinner",
        person: "",
        loc: "Booth 3340",
        start: "6:15PM",
        end: "7:00PM",
        disc: "Grab a plate and get ready for the show!"
      }, {
        title: "Sketch-Off",
        person: "",
        loc: "Booth 3310",
        start: "7:00PM",
        end: "8:00PM",
        disc: "It's back. Load up your plate and prepare to witness the most intense hour of sketching you've ever seen. Friday night, the specially drafted group of creative contenders will flex their artistic muscles as they compete for the coveted Sketchoff prize."
      }, {
        title: "After Party",
        person: "",
        loc: "RITz Sports Zone",
        start: "8:00PM",
        end: "10:00PM",
        disc: "Kick back Friday night at RIT’s own sports bar and hang out. Relax, play games and shoot some pool. Then after ten you can keep the party going by heading over to the local restaurant on campus, Lovin’ Cup to continue the fun. Here's the address: 300 Park Point Dr, Rochester, NY 14623."
      }
    ]
  },

  "sat": {
    events: [
      {
        title: "Check In",
        person: "",
        loc: "Bevier Lobby, 2nd Floor Booth Hall",
        start: "9:00AM",
        end: "1:30PM",
        disc: ""
      }, {
        title: "Breakfast",
        person: "",
        loc: "Bevier Lobby, 2nd Floor Booth Hall",
        start: "9:00AM",
        end: "11:00AM",
        disc: "Grab your juice boxes and a bagel and let’s get started on day two!"
      }, {
        title: "Portfolio Review",
        person: "",
        loc: "3310",
        start: "9:00AM",
        end: "11:00AM",
        disc: "You've got a portfolio, we've got feedback. By filling a room with portfolio wizards (working professionals), we provide a venue to discuss and be taught how to craft a portfolio that'll knock the socks off anyone who sees it. Bring your work!"
      }, {
        title: "Design for Motion: Concept Development Exercises",
        person: "Austin Shaw",
        loc: "Booth 1440",
        start: "9:30AM",
        end: "11:00AM",
        disc: "Prime into the art of motion graphics with Austin Shaw, professor and accomplished motion designer. With examples of where animation meets design, Austin will go into the history of motion graphics, their design, and what makes an excellent piece of motion design. Students will use the fundamentals of pen and paper to sketch out proper and quality conceptual work for their future motion graphic creations."
      }, {
        title: "Sketching 101: Lose the Pencil",
        person: "Hector Silva / Jeff Smith",
        loc: "Booth 1480",
        start: "9:30AM",
        end: "11:00AM",
        disc: "What do you get when you put two amazing analog sketchers in the same room – two unique sketching styles, over 30 years of combined experience, and one amazing sketch demo. This workshop, no matter your experience level, will help you sketch confidently and communicate the ideas you have inside your head through pen and paper."
      }, {
        title: "IDSA Talks: Life in a Consultancy",
        person: "Greg Smiley",
        loc: "Booth 3310",
        start: "11:15AM",
        end: "12:15PM",
        disc: "The Central New York IDSA chapter will be hosting this Q&A session with two prominent design consultancies, KEK and Chase Design. Learn what it is like to work in multiple disciplines, including industrial, environmental, and branding design through case studies. Come meet some local designers, see how they make their work, and ask the tough questions."
      }, {
        title: "Animated GIFs: Creation, Optimization & Alternatives",
        person: "Miguel Cardona",
        loc: "Booth 1480",
        start: "11:15AM",
        end: "12:15PM",
        disc: "You’ve seen them; brief snippets of video or animation meant to get a laugh or express how you really feel. They're gifs. Miguel will give a brief history on the art and design of Animated GIFs, how to make them, how to fully optimize them, and when it’s best to use alternatives. Miguel will demonstrate various tools and methods for creating and getting short form motion animations and video onto the web, and how best to use them."
      }, {
        title: "Self-Care for Artists",
        person: "Susanna Rose",
        loc: "Booth 1440",
        start: "11:15AM",
        end: "12:15PM",
        disc: "This workshop will be an interactive discussion based session in which participants can explore ways to care for themselves as artists and as people. Being a creative comes with unique challenges, making self-care all the more important to people like you. Engaging in some fun creative activity increases your resilience, and having improved self-care can benefit our work as artists"
      }, {
        title: "Portfolio Tips, Tricks and Hacks",
        person: "Bryan Shackelford",
        loc: "Booth 3330",
        start: "11:15AM",
        end: "12:15PM",
        disc: "Learn with Bryan, how to get started with working on your own portfolio, the best ways for you to spruce it up, make it stand out in a crowd, and or how to direct it toward what you want to be on your first big job. Some things happen to be common for all portfolios and hiring managers out there, and we will more than make sure to cover those."
      }, {
        title: "Lunch",
        person: "",
        loc: "Booth 3310",
        start: "12:30PM",
        end: "1:30PM",
        disc: "Food Trucks and On and off campus dining."
      }, {
        title: "Pre-Keynote: Research that Resonates: Laying the Groundwork for Forward-Thinking",
        person: "Mark Capper",
        loc: "Ingle Auditorium",
        start: "1:45PM",
        end: "2:30PM",
        disc: "When it comes to design, the most successful experiences share one commonality: a user-centered approach based on customer need, emotion, and motivation. Mark Capper will detais the powerful combination of research and customer co-creation. Learn to obtain meaningful cultural and psychological insights prior to ideation and throughout development – so that you can create inspired, strategic concepts for the future."
      }, {
        title: "Keynote: Blag, Borrow, and Steal Your Career",
        person: "Gordon Reid",
        loc: "Ingle Auditorium",
        start: "2:30PM",
        end: "3:45PM",
        disc: "Through amusing anecdotes like making illustrations and tutorials on ancient PCs to how Gordon Reid talked his way into becoming lead designer and art director for all of the Visa’s Rio Olympics advertising, Gordon examines how perceiving yourself in the right way can be an asset in your career, and how to find hidden opportunities in failure. Gordon will talk about how hard work, perseverance, and saying yes more than no can get you where you want to be. Heckling is encouraged."
      }, {
        title: "Design in Motion: Lessons from the Trenches",
        person: "Jeremy Cox",
        loc: "Booth 1400",
        start: "4:00PM",
        end: "5:00PM",
        disc: "What is a good title sequence? What goes into designing a title sequence? Where does that elusive spark of inspiration come from? How do you bring your idea to life in a unique way? Using Motion Graphics, one of the newest, fastest growing, and most exciting fields today, Jeremy will dive into the process behind his recent work, sharing insights and lessons learned in over a decade as a Designer, Animator, and Director at Imaginary Forces."
      }, {
        title: "Architecture is More",
        person: "Christian Perry",
        loc: "Booth 3330",
        start: "4:00PM",
        end: "5:00PM",
        disc: "Christian Perry is a passionate Healthcare Designer, Planner, and Architectural Leader working for the Architecture firm Clark Patterson Lee (CPL), located in Rochester, NY.  Previously, Christian worked for the healthcare design firm Ewing Cole in New York City and Philadelphia. He has specialized in healthcare design for the past 4 years. Prior to employment in the United States, Christian lived in Honduras pursuing his passion with Little Angels of Honduras (a charity hoping to reduce infant mortality in the country), healthcare design, social change, and service."
      }, {
        title: "Make Your Better Future",
        person: "Mark Capper & The Xerox Team",
        loc: "Booth 3310",
        start: "4:00PM",
        end: "5:30PM",
        disc: "They say that the best way to predict the future is to create it. In this workshop, you'll learn to put your ingenuity to the test as you utilize creative thought and predictive reasoning to solve a real-world future-proof design challenge. The guided team activity will give you hands-on experience using the new methods for customer co-creation introduced in Mark's talk, to ensure your future work will be inspired by feasible, forward-thinking concepts - right from the start.."
      }, {
        title: "Word Play",
        person: "Andrew Herzog",
        loc: "Booth 1480",
        start: "4:00PM",
        end: "5:30PM",
        disc: "Led by HAWRAF partner Andrew Herzog, collaborate, conceptualize and learn in this abbreviated version of the A-Z project, a HAWRAF 26 hour design challenge in 2016. Students will work with three words randomly selected from the dictionary. They'll have 30 minutes per word to conceptualize and create a visual response of their own. Bring your favorite design tools (laptops, markers, pencils, cameras,etc) and get collaborative!"
      }, {
        title: "STICKY NOTE VOTE!",
        person: "",
        loc: "Booth 3310",
        start: "5:30PM",
        end: "6:00PM",
        disc: "You are encouraged to stop by the Make Your Future Better workshop by Mark and the Xerox team to place sticky votes on your favorite presenters’ brainstorming board, the group with the most sticky notes win!"
      }, {
        title: "IDSA Bowling Night",
        person: "",
        loc: "Bowl-A-Roll",
        start: "8:30PM",
        end: "1:00AM",
        disc: "It’s Back! Come hang out, Bowl a few games at Sunset Lanes, and connect with some speakers other designers. A huge thanks to IDSA for supporting us every year. Address: 1317 Chili Ave. Rocherster, NY."
      }
    ]
  },

  "sun": {
    events: [
      {
        title: "Breakfast",
        person: "",
        loc: "Bevier Lobby, 2nd Floor Booth Hall",
        start: "9:30AM",
        end: "11:30AM",
        disc: "Your daily coffee fix provided by JAVA’S"
      }, {
        title: "Product Timecapsule Archive Study Collection",
        person: "RIT ID students Kaitlyn Gilmore, David Villarreal with RIT Chair of Industrial Design, Josh Owen",
        loc: "3310",
        start: "9:30AM",
        end: "10:30AM",
        disc: "This session will introduce attendees to the artifacts of process associated with this special collection that is being developed at RIT. Participants will hear from Professor and Chair of Industrial Design at RIT, Josh Owen, ID Grad Student David Villarreal and ID Junior Kaitlyn Gilmor about how this collection is used by students, faculty, researchers in the field."
      }, {
        title: "Materials and Manufacturing",
        person: "Jeff Smith",
        loc: "Booth 3310",
        start: "11:00AM",
        end: "12:00PM",
        disc: "Learn about new processes and materials for your future design projects. Jeff Smith will touch upon generative, subtractive, additive manufacturing processes and more!"
      }, {
        title: "Unforeseen Structures: Chaos, Materials, and Emergent Process",
        person: "Mitch Goldstein",
        loc: "Booth 3330",
        start: "11:00AM",
        end: "12:00PM",
        disc: "Mitch Goldstein’s work as an artist focuses on the form and methods of using darkroom photo techniques, specifically the photogram. Photograms use no camera or lenses, instead objects are placed on or near unexposed photographic paper and exposed to light. This process makes abstract black and white compositions that emerge unpredictably from the process — creation without control. Using this work, and selections from his design practice, Mitch will explore how one can work with chaos, synthesize materials and methods, and explore emergent process."
      }, {
        title: "Sketching 201: Let’s Add Marker",
        person: "Jeff Smith",
        loc: "Booth 3330",
        start: "12:15PM",
        end: "1:45PM",
        disc: "What do you get when you put two amazing analog sketchers in the same room – two unique sketching styles, over 30 years of combined experience, and one amazing sketch demo. This workshop, no matter your experience level, will help you sketch confidently and communicate the ideas you have inside your head through pen and paper."
      }, {
        title: "GIF or GIF: Create your Own",
        person: "Miguel Cardona",
        loc: "Booth 1540",
        start: "12:15PM",
        end: "1:45PM",
        disc: "There is no way to go around the online world today without seeing a GIF or two or a hundred. As design curves toward the digital, it is becoming an art form that more creatives are playing with. Miguel will walk you through the process of creating the ideal GIF, how to go from idea to fruition and become master of the image loop to dominate the web."
      }, {
        title: "Caffeinate Your Creativity: Java’s Logo Design",
        person: "TBD",
        loc: "Booth 3310",
        start: "12:15PM",
        end: "1:45PM",
        disc: "Learn about the ideation behind the logo and branding of the beloved local Rochester coffee shop, Javas’ and put your skills to the test with their logo design challenge. Get creative and get caffeinated with a cup of coffee!"
      }, {
        title: "Lazy Sunday: A Panel Discussion - Critical & Creative Thinking",
        person: "TBA",
        loc: "Booth 3310",
        start: "2:15PM",
        end: "3:15PM",
        disc: "Design is meant to be talked about. Our very own Chris Lock will moderate this digestible yet introspective conversation among guests."
      }, {
        title: "Closing Address",
        person: "",
        loc: "Webb Auditorium",
        start: "3:30PM",
        end: "4:30PM",
        disc: "The closing address will wrap up the 2017 conference with giveaways, announcements, and one more look at the title sequence."
      }
    ]
  }
}

function collapse_event(click) {
  var node = click.target;
  while (node.className != "event_cont flex flex-column") {
    node = node.parentNode;
  }
  node.removeEventListener('click', collapse_event);
  node.addEventListener('click', expand_event);
  var disc = node.getElementsByClassName('disc_text_expanded')[0];
  disc.className = disc.className.replace('_expanded', '');
  var title = node.getElementsByClassName('title_text_expanded')[0];
  title.className = title.className.replace('_expanded', '');
}

function expand_event(click) {
  var node = click.target;

  while (node.className != "event_cont flex flex-column") {
    console.log(node.className);
    node = node.parentNode;
  }
  node.removeEventListener('click', expand_event);
  node.addEventListener('click', collapse_event);
  var disc = node.getElementsByClassName('disc_text')[0];
  disc.className += "_expanded";
  var title = node.getElementsByClassName('title_text')[0];
  title.className += "_expanded";
}

function make_event_cont(event) {
  var event_cont = document.createElement('div');
  if (event.disc && event.disc != "") {
    event_cont.className = 'event_cont flex flex-column';
  } else {
    event_cont.className = 'event_cont_no_disc flex flex-column';
  }

  var title_text = document.createElement('p');
  if (event.disc && event.disc != "") {
    title_text.className = 'title_text';
    // title_text.innerHTML = event.title + '<i class="fa fa-plus desc-plus" aria-hidden="true">&nbsp;</i>'; For linked ones
  } else {
    title_text.className = 'title_text_no_disc';
  }
  title_text.innerHTML = event.title;
  event_cont.appendChild(title_text);

  if (event.person && event.person != "") {
    var person_text = document.createElement('p');
    person_text.className = 'person_text';
    person_text.innerHTML = event.person;
    event_cont.appendChild(person_text);
  }

  if (event.loc && event.loc != "") {
    var loc_text = document.createElement('p');
    loc_text.className = 'loc_text';
    loc_text.innerHTML = event.loc;
    event_cont.appendChild(loc_text);
  }

  if (event.disc && event.disc != "") {
    var disc_text = document.createElement('p');
    disc_text.className = 'disc_text';
    disc_text.innerHTML = event.disc;
    event_cont.appendChild(disc_text);
    event_cont.addEventListener('click', expand_event);
  }

  return event_cont;
}

function make_time_cont(event_list, border) {
  var time_cont = document.createElement('div');
  if (border) {
    time_cont.className = 'time_cont flex flex-row';
  } else {
    time_cont.className = 'time_cont_no_border flex flex-row';
  }
  var time_text = document.createElement('p');
  time_text.className = 'time_text';
  time_text.innerHTML = event_list[0].start + " - " + event_list[0].end;
  time_cont.appendChild(time_text);
  var events_cont = document.createElement('div');
  events_cont.className = "events_cont flex flex-column";
  for (var i = 0; i < event_list.length; i++) {
    events_cont.appendChild(make_event_cont(event_list[i]));
  }
  time_cont.appendChild(events_cont);
  return time_cont;
}

function show_day() {
  while (document.getElementById('schedule').hasChildNodes()) {
    document.getElementById('schedule').removeChild(document.getElementById('schedule').lastChild);
  }
  for (var i = 0; i < schedule[cur_day].events.length; i++) {
    var events_list = [];
    var cur_start = schedule[cur_day].events[i].start;
    var cur_end = schedule[cur_day].events[i].end;
    while (i < schedule[cur_day].events.length && schedule[cur_day].events[i].start == cur_start && schedule[cur_day].events[i].end == cur_end) {
      events_list.push(schedule[cur_day].events[i]);
      i++;
    }
    i--;
    var time_cont;
    if (i < schedule[cur_day].events.length - 1 && schedule[cur_day].events[i + 1].start != schedule[cur_day].events[i].start) {
      time_cont = make_time_cont(events_list, true);
    } else {
      time_cont = make_time_cont(events_list, false);
    }
    document.getElementById('schedule').appendChild(time_cont);
  }
}

function rem_listeners(node) {
  var new_node = node.cloneNode(true);
  node.parentNode.replaceChild(new_node, node);
}

/**
 * changes the selected day of which to show the schedule.
 * @param  {string} day    name of the day of which to show the schedule
 */
function change_day(day) {
  cur_day = day;
  // Show that the element is selected
  document.getElementById(day + '_text').className += ' schedule-filter-active';
  // remove the event listener on the newly selected object
  rem_listeners(document.getElementById(day + '_text'));
  for (var i = 0; i < days.length; i++) {
    if (days[i] != day) {
      (function() {
        rem_listeners(document.getElementById(days[i] + '_text'));
        var pre_class = document.getElementById(days[i] + '_text').className;
        document.getElementById(days[i] + '_text').className = pre_class.replace('schedule-filter-active', '');
        var day = days[i];
        document.getElementById(day + '_text').addEventListener('click', function() {
          change_day(day);
        });
      })();
    }
  }
  show_day();
}

/**
 * Adds all listeners to page elements as needed.
 */
function add_listeners() {
  for (var i = 1; i < days.length; i++) {
    (function() {
      var day = days[i];
      document.getElementById(day + '_text').addEventListener('click', function() {
        change_day(day);
      });
    })();
  }
}

function main() {
  console.log("things are happening");
  add_listeners();
  show_day();
}

setTimeout(main, 100);
