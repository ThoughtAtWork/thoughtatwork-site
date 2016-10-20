var days = ["fri","sat","sun"];
var cur_day = "fri";
var day_start = 9;
var day_end = 24;
var schedule = {
  "fri": {
    events: [
      {
        title: "Check-In",
        person: "",
        loc: "Booth 2nd Floor Lobby",
        start: "9:00AM",
        end: "6:00PM",
        disc: ""
      },
      {
        title: "Product Timecapsule: Round Table Discussion",
        person: "Wendell Castle",
        loc: "Vignelli",
        start: "10:00AM",
        end: "11:00AM",
        disc: "Educated in industrial design and sculpture, Wendell Castle emerged from this thaw in the craft world, boldly challenging the tradition and expectations of material reverence, daring to ask: why can’t furniture be art—and is credited with leading the American Studio Furniture movement through the sixties and seventies. Taking interest in making his designs more available to a wider audience, Castle began working with production furniture and plastic in the early 1970s. His Molar Chair referenced earlier forms sculpted from stack-laminated wood and became the crown of this new line of molded plastic furniture, quickly deemed a modern classic and exhibited in galleries and museums while simultaneously being sold to the general public. In conjunction with Thought At Work, please join us for a dialogue with Wendell as he discusses his entry to the Product Timecapsule archives. This talk will take place in the Hamlyn Room, on the fourth level of the Vignelli Center for Design Studies. Use the University Gallery Entrance."
      },
      {
        title: "Opening Address",
        person: "",
        loc: "Webb Auditorium",
        start: "11:45AM",
        end: "12:30PM",
        disc: "Welcome to Thought At Work! The opening address will have announcements, an introduction to the events of the weekend, and an awesome title sequence."
      },
      {
        title: "Crossing Plateaus",
        person: "Jasmin Lai",
        loc: "Booth 3330",
        start: "12:45PM",
        end: "1:45PM",
        disc: "Whether student or professional, every artist eventually faces the question: how do I keep growing? Jasmin will talk about why it's important for artists to constantly evaluate what is effective – or when it's time to abandon things that aren't panning out. She’ll show you the journey that her own work has taken, and why it's important not to \"work\" for a living, but rather make money doing what we love."
      },
      {
        title: "LOLWTF",
        person: "Mitch Goldstein",
        loc: "Booth 3310",
        start: "12:45PM",
        end: "1:45PM",
        disc: "Where do ideas come from? In this candid talk, designer and RIT professor Mitch Goldstein takes us on a journey through the past 44 years of his life and examines the art he saw, the movies he watched, the music he listened to, and the books he read — and how these things (might) have influenced his work."
      },
      /*
      //Jordan backed out due to family stuff
      {
        title: "The Entrepreneurial Spirit of Design",
        person: "Jordan Nollman",
        loc: "Booth 3550",
        start: "12:45PM",
        end: "1:45PM",
        disc: "Jordan Nollman is an award-winning designer who is inspired by the entrepreneurial spirit of design. As CEO of Sprout Studios, he knows what he’s talking about. Jordan will be showcasing some of Sprout's new and old ventures, as well sharing the pros and cons of these projects."
      },
      */
      {
        title: "The Future of Making / Making Your Future",
        person: "Tim Scanlon",
        loc: "Webb Auditorium",
        start: "12:45PM",
        end: "1:45PM",
        disc: "Tim Scanlon is a global leader in experience design. He integrates design and research methods to help businesses differentiate themselves. Technology is emerging and offering new solutions – but so are you. How do you plan a career in an seemingly unpredictable landscape?"
      },
      {
        title: "Friday Keynote Presentation – Design: A User Experience",
        person: "Patricia Moore",
        loc: "Webb Auditorium",
        start: "2:00PM",
        end: "3:30PM",
        disc: "How Design, with a capitol \"D\" defines the quality of our Lifespan. RIT Alum Pattie Moore, named One of the 40 Most Socially Rsponsible Designers in the World, One of the 100 Most Important Women in America and One of the 50 People Defining this Century, discusses how Designers determine the dreams of our lives."
      },
      {
        title: "Truth Or Dare",
        person: "Kim Alpert",
        loc: "Webb Auditorium",
        start: "3:45PM",
        end: "4:45PM",
        disc: "Navigating a creative life isn’t easy. Kim’s done a plethora of embarrassing things, taken a variety of risks and some how gotten to where she is with only a few (visible) battle scars. This follow up talk to Why Would You Can’t explores more of the deep stories about honesty and risk, pushing through the endless mud of reality, and setting an intention even when you’re thrashing about like a tadpole in a frying pan with the struggles of each day. Her stories along with tips and tools will entertain, and help you carve your own practice to stay the course and achieve the life you want. Moments arise where inspiration is elusive, life is painful, and you just need to ask yourself, \'Truth or Dare?\'"
      },
      {
        title: "The 3D Printed Jewelry of Maria Eife",
        person: "Maria Eife",
        loc: "Booth 3330",
        start: "3:45PM",
        end: "4:45PM",
        disc: "Using new technologies combined with traditional craft skill and values, Maria Eife creates jewelry that is itself an exploration of materials, processes and structure. Maria will discuss her work, career path, and experience – basically her whole journey since graduating college."
    },
       {
        title: "Journeys",
        person: "Owen Davey",
        loc: "Booth 3310",
        start: "3:45PM",
        end: "4:45PM",
        disc: "Owen Davey wasn’t always an award-winning illustrator. This talk is all about Owen’s path from student to where he is now. He’ll talk a bit about his process and some of the stuff he’s learned along the way."
      },
      {
        title: "Adding Cage-ism to Your Creative Workflow",
        person: "Bushra Mahmood",
        loc: "Booth 3550",
        start: "3:45PM",
        end: "4:45PM",
        disc: "It could happen to you. One minute you’re moonstruck with a kick-ass idea. Next, it’s gone in 60 seconds as if stolen like a national treasure. The kiss of death. Do you have the trust to be wild at heart? Bushra Mahmood left behind the frozen ground, and she calls it adaptation. That’s high praise."
      },
      {
        title: "What the Hell is an i-Doc?",
        person: "Jeff Soyk",
        loc: "Booth 1400",
        start: "5:00PM",
        end: "6:00PM",
        disc: "Alternate title: \'Interactive Documentary: Storytelling with Multiple Mediums and Makers\' Documentary film and journalism have long been ingrained in traditional media—film/video, written text, spoken word. With the incorporation of diverse web technologies, we’re continuing to redefine storytelling in these spaces. The single author, or auteur, approach has changed dramatically with subject/user participation, blurring the lines between storyteller, subject, and audience. Jeff will explore how we can create meaningful stories and experiences that affect real people with today’s tools."
      },
      {
        title: "Top 10 Things I Wish I Knew When I Graduated",
        person: "Tnaya Witmer",
        loc: "Booth 1480",
        start: "5:00PM",
        end: "6:00PM",
        disc: "An overview of working with Sarofsky on Captain America, Guardians of the Galaxy and more. Plus a Top 10 list of things Tnaya wishes she had known as a recent graduate."
      },
      {
        title: "Digital Painting Workshop",
        person: "Jasmin Lai",
        loc: "Booth 1480",
        start: "5:00PM",
        end: "6:30PM",
        disc: "As a digital artist, Jasmin specializes in more of a graphic design style than the painterly, sci-fi style that you often see in the industry. In this digital painting workshop, Jasmin will show you how she creates a piece from start to finish, while explaining how her technique might vary when she’s working for different projects such as Steven Universe."
      },
      {
        title: "Intro to KeyShot",
        person: "Will Gibbons + KeyShot",
        loc: "Booth 3550",
        start: "5:00PM",
        end: "6:30PM",
        disc: "What is KeyShot? How do you use it? Will Gibbons will give you an overview of this advanced rendering software, so you can be ready to take it to the next level."
      },
      {
        title: "Sketch-Off",
        person: "",
        loc: "Booth 3310, 3330, 3340",
        start: "7:00PM",
        end: "8:15PM",
        disc: "It’s back. Load up your plate and prepare to witness the most intense hour of sketching you’ve ever seen. Friday night, the specially drafted group of creative contenders will flex their artistic muscles as they compete for the coveted Sketchoff prize."
      },
      {
        title: "After Party",
        person: "",
        loc: "Lovin Cup",
        start: "9:00PM",
        end: "12:00AM",
        disc: "Kick back Friday night at this nearby bar and restaurant. We hear there’s going to be a live band and your cover charge is on us (just flash your badge). Here's the address: 300 Park Point Dr, Rochester, NY 14623."
      }
    ],
  },
  "sat": {
    events: [
      {
        title: "Check In",
        person: "",
        loc: "Booth 2nd Floor Lobby",
        start: "9:00AM",
        end: "2:00PM",
        disc: ""
      },
      {
        title: "Breakfast",
        person: "",
        loc: "Booth 2nd Floor Lobby",
        start: "9:00AM",
        end: "11:00AM",
        disc: "Bagels & coffee"
      },
      {
        title: "Portfolio Review",
        person: "",
        loc: "University Gallery",
        start: "9:30AM",
        end: "11:00AM",
        disc: "You’ve got a portfolio, we’ve got feedback. By filling a room with portfolio wizards (working professionals), we provide a venue to discuss and be taught how to craft a portfolio that’ll knock the socks off anyone who sees it. Bring your work!"
      },
      {
        title: "Real World Scenario #1",
        person: "Owen Davey",
        loc: "University Gallery",
        start: "9:30AM",
        end: "11:00AM",
        disc: "Yeah, sometimes clients know what they want. But what happens when a client doesn’t give you much to go on at all, and you don’t have a lot of time to figure it out? In Owen’s workshop, you’ll struggle through the conception of a draft illustration that you’d present to a client before moving onto a final version. This kind of thing tests your technical skills, your lateral thinking, and your patience – but you might as well get used to that now."
      },
      {
        title: "KeyShot: Advanced Features",
        person: "Will Gibbons + KeyShot",
        loc: "Gannett 1217",
        start: "9:30AM",
        end: "11:00AM",
        disc: "This is the next level. Will Gibbons will show you how to use KeyShot’s advanced features – come to this workshop if you want to seriously step up your rendering and animation game."
      },
      {
        title: "Pitch, please!",
        person: "Tnaya Witmer",
        loc: "Booth 1540",
        start: "9:30AM",
        end: "11:00AM",
        disc: "In this timed exercise you will design a title card for the remake of a movie. When time is up you will have 2 minutes to pitch your concept. No pressure!"
      },
      {
        title: "Beyond The Waterfall: Rethinking How We Work",
        person: "Maya Bruck",
        loc: "Booth 1480",
        start: "11:15AM",
        end: "12:15PM",
        disc: "Designing for the web is complicated, and your process shouldn't make it harder. Maya will share tools and techniques for engaging your team in the creative process – turning research, prototyping, design, and development into a collaborative and highly effective effort."
      },
      {
        title: "Learn HTML & CSS in 60 Minutes (or Less)",
        person: "Matt Olpinski",
        loc: "Booth 1540",
        start: "11:15AM",
        end: "12:15PM",
        disc: "Coding your own website doesn’t have to be difficult. In this workshop, Matt will explain HTML & CSS in a way that will get you excited by revealing its underlying simplicity. When you can bring your designs to life through code, you’ll have a competitive advantage and a rare superpower that enables you to create almost anything for the web."
      },
      {
        title: "Firewatch: Rethinking Story-Driven Games",
        person: "Chris Remo",
        loc: "Booth 3310",
        start: "11:15AM",
        end: "12:15PM",
        disc: "How do you tell a compelling and interactive story in a game—without using combat, mechanical challenge, or adventure game puzzles? Increasingly, developers are answering this question in their own ways. Chris will share the approach Campo Santo stumbled into with its debut game, Firewatch."
      },
      {
        title: "Your Job Title Sounds Made Up",
        person: "Helen Androlia",
        loc: "Booth 3340",
        start: "11:15AM",
        end: "12:15PM",
        disc: "If you think that a job title like ‘Social Interaction Strategist’ sounds completely made up, that’s okay – it was. In fact, it was made up for Helen Androlia. In the quickly evolving digital landscape everything is rewritten on a daily basis, and job roles are no different. Some futurists predict that in as little as under two decades over 2 billion jobs will become extinct, and while that sounds like a terrifying statistic, it also opens up opportunities that haven’t even been created yet – especially if you’re ready to build your own. Helen examines how you too can create your own job title with case studies from working professionals who also built their roles from scratch, and develops a potential framework for how transitioning professionals and students entering the workforce might just be able to build their own dream digital and social job."
      },
      {
        title: "Lunch",
        person: "",
        loc: "Booth 3310",
        start: "12:30PM",
        end: "1:30PM",
        disc: "It’s lunch! You know, food."
      },
      {
        title: "Saturday Keynote Opener – Killing The Cat",
        person: "Allan Chochinov + Core77",
        loc: "Ingle Auditorium",
        start: "1:45PM",
        end: "2:30PM",
        disc: "Should design ever hold back? As our keynote opener, Allan Chochinov (Partner at Core77) will explore the role and limits of design in areas that often make people uncomfortable – but maybe that’s exactly where design is needed the most."
      },
      {
        title: "Saturday Keynote Presentation – Stuff I Did",
        person: "Jake Lodwick",
        loc: "Ingle Auditorium",
        start: "2:30PM",
        end: "4:00PM",
        disc: "Jake is going to start off his keynote presentation with about ten minutes of back story… then he’ll open it up and let the audience direct the rest. In ask-me-anything fashion, Jake will tell you whatever you want to know about building ideas into influential brands. Have your questions ready!"
      },
      {
        title: "Design Whiteboarding",
        person: "Miguel Cardona",
        loc: "Booth 1480",
        start: "4:15PM",
        end: "5:15PM",
        disc: "You’ve been called in for a job interview with the agency of your dreams. You arrive early, but not too early. You have multiple copies of your resume in a folder and a list of questions in your head with their corresponding answers. You stride into the room and get ready to knock some socks off. Only this interview is different. Instead of talking about your experience, they want you to draw your ideas – on a whiteboard – and you have a limited amount of time. You crumble into a sweaty, weeping ball of misplaced preparation. Don’t let this be you. Go to Miguel’s workshop."
      },
      {
        title: "Fusion 360 Hands-on Workshop",
        person: "Jeff Smith + Autodesk",
        loc: "GAN 1217",
        start: "4:15PM",
        end: "5:45PM",
        disc: "Dive into this next generation design software with design educator Jeff Smith. Learn how to use Fusion 360 from ideation through execution and enhance your product design skillset."
      },
      {
        title: "Alignment",
        person: "Bushra Mahmood",
        loc: "Booth 3330",
        start: "4:15PM",
        end: "5:45PM",
        disc: "If you're a solo freelancer, you might not immediately fit in with the other kids. When the success of a project is at stake, you need to know how to overcome those barriers, strengthen your team, and get shit done. Bushra will tell you how."
      },
      {
        title: "Building A Better Mousetrap: AGEing By Design",
        person: "Patricia Moore",
        loc: "Booth 3330",
        start: "4:15PM",
        end: "5:45PM",
        disc: "How Design defines the wishes, wants and needs of all consumers for their entire lifespan."
      },
      {
        title: "Core77 Bowling Night",
        person: "",
        loc: "Bowl-A-Roll",
        start: "9:00PM",
        end: "10:30PM",
        disc: "We’re trying something new this year – bowling! Come hang out, play a few games, and connect with other designers. Huge thanks to Core77 for making this event possible. Address: 1560 Jefferson Rd, Rochester, NY 14623."
      }
    ]
  },
  "sun": {
    events: [
      {
        title: "Breakfast",
        person: "",
        loc: "Booth 2nd Floor Lobby",
        start: "10:00AM",
        end: "11:30AM",
        disc: "Coffee & cereal (not mixed together)"
      },
      {
        title: "Kickstart Your Freelancing Career",
        person: "Matt Olpinski",
        loc: "Booth 1540",
        start: "11:30AM",
        end: "12:30PM",
        disc: "When you’re just starting out, freelancing can seem overwhelming. Where do you find clients? How much do you charge? How can you guarantee payment? What if you don’t get consistent work? In this workshop, Matt will teach you how to become a rockstar freelancer in a saturated and competitive market. You’ll learn how to attract your ideal clients, write winning proposals, charge for value, and kickstart a successful freelancing business."
      },
      {
        title: "Self Care For Artists",
        person: "Susanna Rose",
        loc: "Booth 3540",
        start: "11:30AM",
        end: "1:00PM",
        disc: "Design conferences usually focus on software tools, production techniques, and which lines of code to write. But life as a designer gets hectic, even overwhelming…so how do we handle the demands of our work while still making time to nurture ourselves and our creativity? In this experiential and discussion-based session, Susanna Rose will focus on topics like mindfulness, self-compassion, non-judgment, and play. This workshop was born out Susanna’s own experiences as an artist and her training as a Mental Health Counselor at St. John Fisher College."
      },
      {
        title: "Roll Up Your Sleeves",
        person: "Jeff Smith",
        loc: "Booth 3310",
        start: "11:30AM",
        end: "1:00PM",
        disc: "Pencils don't get dull and markers never fade. Join TAW veteran Jeff Smith in this interactive workshop as he demonstrates some old-school sketching techniques."
      },
      {
        title: "Lazy Sunday: A Panel Discussion",
        person: "TBA",
        loc: "Booth 3310",
        start: "1:15PM",
        end: "2:15PM",
        disc: "Design is meant to be talked about. Our very own Colton Woytas will moderate this digestible yet introspective conversation among guests."
      },
      {
        title: "Closing Address",
        person: "",
        loc: "Carlson Auditorium",
        start: "2:30PM",
        end: "3:15PM",
        disc: "The closing address will wrap up the 2016 conference with giveaways, announcements, and one more look at the title sequence."
      }
    ]
  }
}

function collapse_event(click) {
  var node = click.target;
  while (node.className != "event_cont flex_column") {
    node = node.parentNode;
  }
  node.removeEventListener('click',collapse_event);
  node.addEventListener('click',expand_event);
  var disc = node.getElementsByClassName('disc_text_expanded')[0];
  disc.className = disc.className.replace('_expanded','');
  var title = node.getElementsByClassName('title_text_expanded')[0];
  title.className = title.className.replace('_expanded','');
}

function expand_event(click) {
  var node = click.target;

  while (node.className != "event_cont flex_column") {
    console.log(node.className);
    node = node.parentNode;
  }
  node.removeEventListener('click',expand_event);
  node.addEventListener('click',collapse_event);
  var disc = node.getElementsByClassName('disc_text')[0];
  disc.className += "_expanded";
  var title = node.getElementsByClassName('title_text')[0];
  title.className += "_expanded";
}

function make_event_cont(event) {
  var event_cont = document.createElement('div');
  if (event.disc && event.disc != "") {
    event_cont.className = 'event_cont flex_column';
  }
  else {
    event_cont.className = 'event_cont_no_disc flex_column';
  }


  var title_text = document.createElement('p');
  if (event.disc && event.disc != "") {
    title_text.className = 'title_text';
  }
  else {
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
    event_cont.addEventListener('click',expand_event);
  }

  return event_cont;
}

function make_time_cont(event_list,border) {
  var time_cont = document.createElement('div');
  if (border) {
    time_cont.className = 'time_cont flex_row';
  }
  else {
    time_cont.className = 'time_cont_no_border flex_row';
  }
  var time_text = document.createElement('p');
  time_text.className = 'time_text';
  time_text.innerHTML = event_list[0].start + " - " + event_list[0].end;
  time_cont.appendChild(time_text);
  var events_cont = document.createElement('div');
  events_cont.className = "events_cont flex_column";
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
    while (i < schedule[cur_day].events.length &&
        schedule[cur_day].events[i].start == cur_start &&
        schedule[cur_day].events[i].end == cur_end) {
      events_list.push(schedule[cur_day].events[i]);
      i++;
    }
    i--;
    var time_cont;
    if (i < schedule[cur_day].events.length-1 && schedule[cur_day].events[i+1].start != schedule[cur_day].events[i].start) {
      time_cont = make_time_cont(events_list,true);
    }
    else {
      time_cont = make_time_cont(events_list,false);
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
  document.getElementById(day + '_text').className += ' active';
  // remove the event listener on the newly selected object
  rem_listeners(document.getElementById(day + '_text'));
  for (var i = 0; i < days.length; i++) {
    if (days[i] != day) {
      (function () {
        rem_listeners(document.getElementById(days[i] + '_text'));
        var pre_class = document.getElementById(days[i] + '_text').className;
        document.getElementById(days[i] + '_text').className = pre_class.replace('active','');
        var day = days[i];
        document.getElementById(day + '_text').addEventListener('click', function () {
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
    (function () {
      var day = days[i];
      document.getElementById(day + '_text').addEventListener('click', function () {
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

setTimeout(main,100);
