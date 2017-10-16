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
        disc: "Anita has had a long a storied career in product and corporate design and design strategy, moving from RIT up to New Balance, Adidas, and eventually leading to being the head of Design Operations at Converse. Follow Anita as she makes her way through her career path as a designer and creative,  and learn through her and her experiences in the professional world how someone like  you yourself can learn to empower oneself as a person and as a designer."
      }, {
        title: "Dear Design Student",
        person: "Mitch Goldstein",
        loc: "Booth 3310",
        start: "11:45AM",
        end: "12:45PM",
        disc: "You learn a ton of stuff at design school. This talk is about all of the other stuff you should know, too—things like how to get the most out of the experience, why it’s not really about the grades, what your teachers (and future employers) are really looking for, why design is not the only thing you should be paying attention to, and a bunch of other stuff that’s not on the syllabus. Bring your questions with you, as this session will have lots of time for Q&A."
      }, {
        title: "Portfolio Tips, Tricks, and Hacks You've Always Wondered About But Were Afraid to Ask",
        person: "Bryan Shackelford",
        loc: "Booth 3330",
        start: "11:45AM",
        end: "12:45PM",
        disc: "As a young creative in today’s world, you and your career live and die on the strength of your portfolio. How to get started with working on  your own portfolio, the best ways for you to spruce it up, make it stand out in a crowd, or how to direct it toward what you want to be your first big job. Some things happen to be common for all portfolios and hiring managers out there, and we will more than make sure to cover those."
      }, {
        title: "Lunch",
        person: "",
        loc: "Booth 3310",
        start: "1:00PM",
        end: "2:00PM",
        disc: "It's lunch! You know, food."
      }, {
        title: "Pre-Keynote",
        person: "Seth Eshelman",
        loc: "Webb Auditorium",
        start: "2:15PM",
        end: "3:00PM",
        disc: ""
      }, {
        title: "Keynote: Ideas Have to Start Somewhere",
        person: "Andrew Herzog",
        loc: "Webb Auditorium",
        start: "3:00PM",
        end: "4:15PM",
        disc: "Student work and personal projects present some really special opportunities for you to start experimenting and defining your ideas and what methodologies matter to you. Andrew Herzog will go through and talk about the long term importance of his student work and personal projects and what that means about your own work. He'll show how projects and ideas that were formed in his college studies and personal practice have found their way into the work he did at Google's Creative Lab and in the work he continues to do with HAWRAF, the studio he co-founded in 2016."
      }, {
        title: "Design Yourself",
        person: "Hector Silva",
        loc: "Booth 3350",
        start: "4:30PM",
        end: "5:30PM",
        disc: "In our modern creative world, various online platforms such as Instagram and other social media networks  have become an extremely important and usually very necessary method to making new connections and putting yourself out there in the wider world for opportunities to present themselves. Hector is by far no slouch in this department, just check his own Instagram, and will help teach you how to effectively use these social media platforms to promote yourself, collaborate with brands and fellow creatives, network, and build relationships with the wider world."
      }, {
        title: "Stand Out!",
        person: "Tnaya Witmer",
        loc: "Booth 3330",
        start: "4:30PM",
        end: "5:30PM",
        disc: "The creative world is one of the fastest growing fields in the world right now. Because of this, the design world can feel pretty crowded out there sometimes, but that doesn’t mean that this has to be a problem for you. Tnaya will use her years of experience as a motion graphic designer and creative director for Sarofksy and creating a fair chunk of Marvel’s opening titles, to help teach you, the student and burgeoning design pro, to best distinguish yourself and your work from your crowd of peers."
      }, {
        title: "Emerging Interface Concepts for Digital and Physical Products",
        person: "Tim Wood",
        loc: "Booth 3310",
        start: "4:30PM",
        end: "6:00PM",
        disc: "Tim is here to identify many of the new, critical, and emerging user interface concepts and discuss how the ideas that can be found in these concepts can be best applied to the design of digital and/or physical products in today’s modern world. This workshop has been specifically created and designed to provide you with many brand new ideas that will supercharge your upcoming projects and jumpstart your creativity as a designer, and all of it just in time for midterms!"
      }, {
        title: "Fusion Workshop",
        person: "Jeff Smith",
        loc: "Booth 1540",
        start: "4:30PM",
        end: "6:00PM",
        disc: "There's a wide selection of 3d modeling programs out there to choose from as a creative in the world today, and that crowd is only continuing to grow. One of the most prominent, and best to create with, there is out in the world is Autodesk’s Fusion 360 platform. Jeff Smith will explore Fusion as a program and how can be applied to creating high quality manufacturing design with ease.  If you have interests in architecture, interior, industrial, or product design, then this talk has something for you."
      }, {
        title: "Dinner",
        person: "",
        loc: "Booth 3340",
        start: "6:15PM",
        end: "7:00PM",
        disc: "."
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
        end: "12:00AM",
        disc: "Kick back Friday night at RIT’s own sports bar and hang out. Relax, play games and shoot some pool. Then head over to the local restaurant on campus, Lovin’ Cup to continue the fun. Here's the address: 300 Park Point Dr, Rochester, NY 14623."
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
        title: "What is Motion Design?",
        person: "Austin Shaw",
        loc: "TBD",
        start: "9:30AM",
        end: "11:00AM",
        disc: "Austin will be going into the history of the field of motion graphics, their design, and what makes an excellent motion graphic.Think of this as an excellent primer in the rapidly growing field of motion graphics. Be prepared to see some excellent examples of where animation meets design."
      }, {
        title: "Intro Sketch Demo",
        person: "Hector Silva / Jeff Smith",
        loc: "Booth 1480 (tentative)",
        start: "9:30AM",
        end: "11:00AM",
        disc: "Hector and Jeff have spent a large portion of their professional lives creating new and impressive products and designs out of thin air using only pen and paper and maybe some markers. In 2016 they helped start Advanced Design Sketching, a service specifically for bringing students like yourself together and teaching him the best ways to getting their many ideas together on paper. Luckily, they’re bringing a bit of this service to all of us here at Thought At Work. They’ll help teach you how create a sketch that completely embodies and communicates the products and ideas you have inside your head."
      }, {
        title: "Kek and Chase Design Presentation (tentative)",
        person: "Greg Smiley",
        loc: "Booth 3310",
        start: "11:15AM",
        end: "12:15PM",
        disc: "Kek and Chase Design have been leading the world in industrial, packaging, and environmental design for half a century now, and luckily they both happen to be here in Central New York, so they’d like to share all of those many decades of experience with you. So luckily for us, they will be going through a few of their case studies from both of these studios and highlighting their various capabilities as consultancies and how that applies to the art of good design."
      }, {
        title: "Animated GIFs: Creation, Optimization & Alternatives",
        person: "Miguel Cardona",
        loc: "Booth 1480",
        start: "11:15AM",
        end: "12:15PM",
        disc: "You’ve seen them; brief snippets of video or animation meant to get a laugh or express how you really feel. They’re in every digital conversation you have and all over the web. They’re part of the new online language. They’re gifs. Miguel will give a brief history on the art and design of Animated GIFs, how to make them, how to fully optimize them, and when it’s best to use alternatives. Miguel will demonstrate various tools and methods for getting short form motion animations and video to the web, and how best to use them."
      }, {
        title: "Self-Care for Artists",
        person: "Susanna Rose",
        loc: "Booth 1440",
        start: "11:15AM",
        end: "12:15PM",
        disc: "On top of being an acclaimed songwriter, Susanna Rose is also a professional mental health counselor, and she is here to bring her experience to you, the creative. This workshop will be an interactive discussion based session in which participants can explore ways to care for themselves as artists and as people. Being a creative comes with unique challenges, making self-care all the more important to people like you. Engaging in some fun creative activity increases your resilience, and having improved self-care can benefit our work as artists."
      }, {
        title: "",
        person: "Bryan Shackelford",
        loc: "Booth 3330",
        start: "11:15AM",
        end: "12:15PM",
        disc: ""
      }, {
        title: "Lunch",
        person: "",
        loc: "Booth 3310",
        start: "12:30PM",
        end: "1:30PM",
        disc: "Food Trucks! They’re outside in F lot! Go look!"
      }, {
        title: "Pre-Keynote: Research that Resonates: Laying the Groundwork for Forward-Thinking",
        person: "Mark Capper",
        loc: "",
        start: "1:45PM",
        end: "2:30PM",
        disc: "When it comes to design, the most successful experiences share one commonality: a user-centered approach based on customer need, emotion, and motivation. In this presentation, Mark Capper details the powerful combination of research and customer co-creation together. Learn to obtain meaningful cultural and psychological insights prior to ideation and throughout development – so that you can create inspired, strategic concepts for future offerings that won’t launch for 5 years or more. Packed with innovative examples and tips for practical application, this is a crash course in how to ensure a meaningful return on R&D and a fantastic primer for the Generative Workshop to follow."
      }, {
        title: "Keynote: Blag, Borrow, and Steal Your Career",
        person: "Gordon Reid",
        loc: "Ingle Auditorium",
        start: "2:30PM",
        end: "3:45PM",
        disc: "Gordon Reid has stories. About making illustrations for pioneering magazine Computer Arts on ancient  PCs, and how he talked his way into becoming lead designer and art director for all of the Visa’s Rio Olympics advertising. Gordon examines how perceiving yourself in the right way can an  asset in your career, and how to find hidden opportunities in failure. Gordon looks into how hard work, perseverance, and saying yes more than no can get you where you want to be. Gordon is here to laugh, entertain, and hopefully inspire. Heckling is encouraged."
      }, {
        title: "Design in Motion: Lessons from the Trenches",
        person: "Jeremy Cox",
        loc: "Booth 1400",
        start: "4:00PM",
        end: "5:00PM",
        disc: "Motion Graphics in one of the newest, fastest growing, and most exciting fields in design today. With that being true it’s important to examine the art of designing a good title sequence itself. What goes into designing a title sequence? Where does that elusive spark of inspiration come from? And how do you bring your idea to life in a unique way? Jeremy will dive into the process behind his recent work, sharing insights and lessons learned in over a decade as a Designer, Animator, and Director at Imaginary Forces."
      }, {
        title: "Architecture is More",
        person: "Christian Perry",
        loc: "Booth 3330",
        start: "4:00PM",
        end: "5:00PM",
        disc: "Renowned architect, industrial, and healthcare designer Christian Perry will use his very own experience in the various fields of architecture and design to further explore our own responsibilities to the wider, non-creative, world and all of our fellow human beings as designers and creatives, and how best to make use of our specialized skillsets to make the wider world and the future of it better, just a little bit at a time."
      }, {
        title: "Make Your Better Future",
        person: "Mark Capper & The Xerox Team",
        loc: "Booth 3310",
        start: "4:00PM",
        end: "5:30PM",
        disc: "They say that the best way to predict the future is to create it - in this workshop, you'll learn to do just that. More importantly, you'll learn to be smart about it. Put your ingenuity to the test as you utilize creative thought and predictive reasoning to solve a real-world future-proof design challenge. The guided team activity gives you hands-on experience using the new methods for customer co-creation introduced in Mark's talk, to ensure your future work will be inspired by feasible, forward-thinking concepts - right from the start."
      }, {
        title: "Word Play",
        person: "Andrew Herzog",
        loc: "Booth 1480",
        start: "4:00PM",
        end: "5:30PM",
        disc: "As a studio HAWRAF did a 26 hour design challenge called the A-Z Project last fall. Each hour was spent designing around a word randomly selected for the dictionary. They spent one hour per letter of the alphabet - hence the 26 hours. Led by HAWRAF partner Andrew Herzog, this is an abbreviated version of the A-Z project. Students will work with three words randomly selected from the dictionary. They'll have 30 minutes per word to concept and create a visual response of their own. This is an exercise in collaboration, conceptualizing, and making to learn."
      }, {
        title: "Xerox Voting",
        person: "",
        loc: "Booth 3310",
        start: "5:30PM",
        end: "6:00PM",
        disc: "Attendees are encouraged to stop by and put sticky votes on their favorite presenter!"
      }, {
        title: "IDSA Bowling Night",
        person: "",
        loc: "Sunset Bowling Lanes",
        start: "9:00PM",
        end: "12:00AM",
        disc: "It’s Back! Come hang out, Bowl a few games, and connect with some speakers other designers. A huge thanks to IDSA for supporting us every year. Address: 1317 Chili Ave, Rochester, NY 14624. Parking will be behind the building."
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
        disc: "Your coffee fix provided by JAVA’S"
      }, {
        title: "Product Timecapsule",
        person: "",
        loc: "",
        start: "9:30AM",
        end: "10:30AM",
        disc: ""
      }, {
        title: "Materials and Manufacturing",
        person: "Jeff Smith",
        loc: "Booth 3310",
        start: "11:00AM",
        end: "12:00PM",
        disc: "In the past 20 years and change, CAD, or computer aided design and drafting, or the process of using computer programs like those created by Autodesk for the purpose of design and design communication, have overtaken the process of using pencil and paper to manually draft your own creations. Join Jeff Smith as he covers this process and what it means for today’s designer.  If you are interested in architecture, interior, industrial, or product design, then this is a talk for you."
      }, {
        title: "Unforeseen Structures: Chaos, Materials, and Emergent Process",
        person: "Mitch Goldstein",
        loc: "Booth 3330",
        start: "11:00AM",
        end: "12:00PM",
        disc: "Mitch Goldstein’s work as an artist focuses on the form and methods of using darkroom photo techniques, specifically the photogram. Photograms use no camera or lenses, but instead object are placed on or near exposed photographic paper and exposed to light. The process is great at making abstract black and white competitions that emerge unpredictably from the process. This is creation without control. Using this process and selections from his other design work, Mitch will explore how one can work with chaos, the synthesis of material and method, and the exploration of emergent process."
      }, {
        title: "Advanced Sketch Workshop",
        person: "Jeff Smith",
        loc: "Booth 3330",
        start: "12:15PM",
        end: "1:45PM",
        disc: "For much of his career as a creative, Jeff Smith has usually had a pen and some paper in hand. As part of the organization Advanced Design Sketching, he has helped educate creatives and other people around the country about the skill and art of design sketching, or making high quality product and other designs through the basic drawing and sketching skills. Jeff will walk you through the basics of creating an amazing sketch out of the air using only paper, pen, and marker."
      }, {
        title: "",
        person: "Miguel Cardona",
        loc: "Booth 1540",
        start: "12:15PM",
        end: "1:45PM",
        disc: ""
      }, {
        title: "Java’s Coffee Hour (tentative)",
        person: "",
        loc: "Booth 3310",
        start: "12:15PM",
        end: "1:45PM",
        disc: "Want a shot at logo design? Want a chance for your idea to be on JAVA’S t-shirts and cups? Come to this session for some fun brainstorming activities for are real logo design opportunity. "
      }, {
        title: "Lazy Sunday: A Panel Discussion",
        person: "TBA",
        loc: "Booth 3310",
        start: "2:15PM",
        end: "3:15PM",
        disc: "Design is meant to be talked about. Our very own Colton Woytas will moderate this digestible yet introspective conversation among guests."
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
