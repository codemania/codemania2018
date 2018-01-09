export type Year = "2012" | "2013" | "2014" | "2015" | "2016" | "2017" | "2018";

export type Speaker = {
  id: string,
  name: string,
  twitter: string,
  bio: string,
  image: string,
  talkTopic: string,
  talkBlurb: string
};

export const speakers: Speakers = {
  "2012": {
    displayName: "2012",
    speakers: [
      {
        id: "haacked",
        name: "Phil Haack",
        topic: "Coding Love"
      },
      {
        id: "nzkoz",
        name: "Michael Koziarski",
        topic: "Lessons from the other side"
      },
      {
        id: "maupuia",
        name: "Mike Brown",
        topic: "We're alone, we're screwed and you have to live your life over and over and over again. Like, for eternity"
      },
      {
        id: "damianedwards",
        name: "Damian Edwards",
        topic: "SignalR: It's realtime, it's async, it's websockets, it's all .NET & it's all awesome"
      },
      {
        id: "ppog_penguin",
        name: "Ivan Towlson",
        topic: "How to Not Write a For Loop"
      },
      {
        id: "avon",
        name: "Karl von Randow",
        topic: "Lessons from Mobile"
      },
      {
        id: "samsaffron",
        name: "Sam Saffron",
        topic: "Making fast websites — a deep dive into high scale web performance"
      },
      {
        id: "jarichaust",
        name: "Jacinta Richardson",
        topic: "Modern Perl"
      },
      {
        id: "aaronmorton",
        name: "Aron Morton",
        topic: "Cassandra Does What?"
      },
      {
        id: "rioter",
        name: "Jared Wyles",
        topic: "Node.js — is that it?"
      },
      {
        id: "reasther",
        name: "Richard Easther",
        topic: "Shocking Tales of (un)Scientific Computing"
      }
    ]
  },
  "2013": {
    displayName: "2013",
    speakers: [
      {
        id: "gblock",
        name: "Glenn Block",
        topic: "Open source at Microsoft - Fighting the good fight"
      },
      {
        id: "pjf",
        name: "Paul Fenwick",
        topic: "All your brains suck"
      },
      {
        id: "bkeepers",
        name: "Brandon Keepers",
        topic: "GitHub <3 Ruby"
      },
      {
        id: "wrumsby",
        name: "Walter Rumsby",
        topic: "Dispelling the Fear, Uncertainty & Doubt Around Unit Testing JavaScript"
      },
      {
        id: "philiplaureano",
        name: "Philip Laureano",
        topic: "Learn System.Reflection.* the Hard Way"
      },
      {
        id: "ammeep",
        name: "Amy Palamountain",
        topic: "Unsuck your backbone"
      },
      {
        id: "codemiller",
        name: "Katie Miller",
        topic: "Monads to the Rescue"
      },
      {
        id: "gblock2",
        name: "Glenn Block",
        topic: "GET hyper about hypermedia with ASP.NET Web API"
      },
      {
        id: "ppog_penguin",
        name: "Ivan Towlson",
        topic: "The Awesome Power of a Fully Operational Type System"
      },
      {
        id: "darren",
        name: "Darren Wood",
        topic: "The Modern Webmonkey"
      },
      {
        id: "paulcbetts",
        name: "Paul Betts",
        topic: "On Programming"
      }
    ]
  },
  "2014": {
    displayName: "2014",
    speakers: [
      {
        id: "leaverou",
        name: "Lea Verou",
        topic: "The Chroma Zone: Engineering Color on the Web"
      },
      {
        id: "jimwebber",
        name: "Jim Webber",
        topic: "A Little Graph Theory for the Busy Developer"
      },
      {
        id: "traskjd",
        name: "JD Trask",
        topic: "The scaling & performance toolbox - what Raygun.io uses"
      },
      {
        id: "dibblego",
        name: "Tony Morris",
        topic: "Comonads, Applicative Functors, Monads and Other Principled Things"
      },
      {
        id: "shiftkey",
        name: "Brendan Forster",
        topic: "10 Things I've Learned From Doing OSS"
      },
      {
        id: "borland",
        name: "Orion Edwards",
        topic: "Understanding C++ templates"
      },
      {
        id: "brianleroux",
        name: "Brian Leroux",
        topic: "Mobile Web Whirlwind Tour of PhoneGap, Cordova & Topcoat"
      },
      {
        id: "medickinson",
        name: "Michelle Dickinson",
        topic: "Will nanobots take over the world?"
      },
      {
        id: "fastchicken",
        name: "Nic Wise",
        topic: "Native, Crossplatform, Mobile"
      },
      {
        id: "rachelmyers",
        name: "Rachel Myers",
        topic: "Improve Web Perf Without Breaking Metrics"
      },
      {
        id: "troyhunt",
        name: "Troy Hunt",
        topic: "Hack yourself first: go on the cyber-offence before online attackers do"
      },
      {
        id: "shanselman",
        name: "Scott Hanselman",
        topic: "Angle Brackets, Curly Braces, JavaScript & Assembler"
      },
    ]
  },
  "2015": {
    displayName: "2015",
    speakers: [
      {
        id: "adrianco",
        name: "Adrian Cockcroft",
        topic: "Fast Delivery with Microservices"
      },
      {
        id: "rockbot",
        name: "Raquel Velez",
        topic: "Do NodeBots Dream With Electric Paint?"
      },
      {
        id: "kelseyinnis",
        name: "Kelsey Gilmore-Innis",
        topic: "Some Things Never Change: Immutable Data in the Real World"
      },
      {
        id: "eanakashima",
        name: "Emily Nakashima",
        topic: "The Operable Front End"
      },
      {
        id: "mikeb2701",
        name: "Michael Barker",
        topic: "Designing for Performance - A Case Study"
      },
      {
        id: "holman",
        name: "Zach Holman",
        topic: "The Talk on Talks"
      },
      {
        id: "josh_robb",
        name: "Josh Robb",
        topic: "Coupling, Cohesion and Connascence"
      },
      {
        id: "sehsarah",
        name: "Sarah Hui",
        topic: "For the Fun of JavaScript"
      },
      {
        id: "lady_nerd",
        name: "Laura Bell",
        topic: "Security skills for the adventurous developer"
      },
      {
        id: "saramg",
        name: "Sara Golemon",
        topic: "HHVM and Hack"
      },
      {
        id: "damianedwards",
        name: "Damian Edwards",
        topic: "The Microsoft Open Web Stack and You"
      },
      {
        id: "digego",
        name: "Andrew Sorensen",
        topic: "A Programmer's Guide to Western Music"
      },
    ]
  },
  "2016": {
    displayName: "2016",
    speakers: [
      {
        id: "beerops",
        name: "Katherine Daniels",
        topic: "Putting the Dev in Devops"
      },
      {
        id: "duretti",
        name: "Duretti Hirpa",
        topic: "Good APIs make Good UIs"
      },
      {
        id: "garybernhardt",
        name: "Gary Bernhardt",
        topic: "Reproducibility"
      },
      {
        id: "nicgaston",
        name: "Nicola Gaston",
        topic: "The limits of reductionism (and why we should think about this in the computational sciences)"
      },
      {
        id: "noopkat",
        name: "Suz Hinton",
        topic: "Refactoring the Dinosaur"
      },
      {
        id: "pandamonial",
        name: "Amanda Laucher",
        topic: "Property Based Testing - Shrinking Risk In Your Code"
      },
      {
        id: "petegoo",
        name: "Pete Goodman",
        topic: "DevOps - Learning how to go fast without tripping over the cables"
      },
      {
        id: "peter-gutmann",
        name: "Peter Gutmann",
        topic: "Cyberwar before there was Cyber - Hacking WWII Electronic Bomb Fuses"
      },
      {
        id: "ppog_penguin",
        name: "Ivan Towlson",
        topic: "How I Learned to Stop Worrying and Love the Zygohistomorphic Prepromorphism"
      },
      {
        id: "samnewman",
        name: "Sam Newman",
        topic: "Deploying and Scaling Microservices"
      },
      {
        id: "sarahmei",
        name: "Sarah Mei",
        topic: "Factory, Workshop, Stage"
      },
      {
        id: "sh4na",
        name: "Andreia Gaita",
        topic: "From 0 to open source - shipping the GitHub Extension for Visual Studio"
      },
    ]
  },
  "2017": {
    displayName: "2017",
    speakers: [
      {
        id: "bodil-stokke",
        name: "Bodil Stokke",
        topic: "The Perfect Language"
      },
      {
        id: "dave-thomas",
        name: "Dave Thomas",
        topic: "10 Ways to Accelerate Software Delivery"
      },
      {
        id: "ian-randall",
        name: "Ian Randall",
        topic: "From Inception to Production: A Continuous Delivery Story"
      },
      {
        id: "jamesha-fisher",
        name: "Jamesha Fisher",
        topic: "Security in Automation"
      },
      {
        id: "jessica-kerr",
        name: "Jessica Kerr",
        topic: "More Business Code, Less Boring Coding"
      },
      {
        id: "kirk-jackson",
        name: "Kirk Jackson",
        topic: "Hack the world like the 1980's"
      },
      {
        id: "kyle-kingsbury",
        name: "Kyle Kingsbury",
        topic: "Jepsen 7: Anna Concurrenina"
      },
      {
        id: "mads-torgersen",
        name: "Mads Torgersen",
        topic: "Going Open"
      },
      {
        id: "melinda-seckington",
        name: "Melinda Seckington",
        topic: "Reflect and Refactor"
      },
      {
        id: "nick-walker",
        name: "Nick Walker",
        topic: "Making Microservices Durable"
      },
      {
        id: "paul-stack",
        name: "Paul Stack",
        topic: "Continuously Delivering Infrastructure using Packer and Terraform"
      },
      {
        id: "randall-koutnik",
        name: "Randall Koutnik",
        topic: "What are observables and why should I care"
      },
    ]
  },
  "2018": {
    displayName: "2018",
    speakers: [
      {
        id: "micheal",
        name: "Michael Lopp",
        twitter: "rands",
        bio: "VP Engineering @ Slack",
        talkTopic: "The Second Act",
        talkBlurb: `<p>In order to be a historic company, you need your culture to evolve.</p>
        <p>Michael Lopp is a Silicon Valley-based engineering leader who builds both people and product at companies such as Borland, Netscape, Palantir, Pinterest, and Apple. While he's not worrying about staying relevant, he writes about pens, bridges, people, leadership, and werewolves at the popular weblog, <a href="http://randsinrepose.com/">Rands in Repose</a>. He works as the VP of Engineering at Slack in San Francisco where he’s furiously working on helping teams reinvent work.</p>

        <p>Michael has written two books. His first book "Managing Humans, 3rd Edition" is a popular guide to the art of engineering leadership and clearly explains that while you be will rewarded for what you build, you will only be successful because of your people. His second book "Being Geek" is a career handbook for geeks and nerds alike.</p>

        <p>Michael mountain bikes, tinkers with drones, and drinks red wine in the redwoods of Northern California whenever he can because staying sane is more important than staying busy.</p>`
      },
      {
        id: "erin",
        name: "Erin McKean",
        twitter: "emckean",
        bio: "IBM & Wordnik",
        talkTopic: "Build an API in 20 Minutes with LoopBack",
        talkBlurb: `<p>Using LoopBack, an open-source framework for generating REST APIs with Node, you can build a full set of CRUD endpoints in 20 minutes. Then you can spend your time adding custom endpoints, user authentication, pre- and post-DB hooks, and a lot more! LoopBack works with just about any database you care to name (Mongo, MySQL, PostGRES, Elasticsearch, Cassandra ...) and also has OpenAPI spec support!</p>`
      },
      {
        id: "christine",
        name: "Christine Yen",
        twitter: "cyen",
        bio: "Honeycomb Co-founder",
        talkTopic: "Observability and the Development Process",
        talkBlurb: `<p>Historically, monitoring has been thought of as an afterthought of the software development cycle: something owned by the ops side of the room. But instead of trying to predict the various ways something might go sideways right before release and crafting dashboards to prepare, what might it look like to use answers about our system to figure out what to build, and how to build it, and whom for?</p>

        <p>Observability is the practice of understanding the internal state of a system via knowledge of its external outputs -- and is something that should be built into the process of crafting software from the very beginning.</p>

        <p>In this talk, we'll discuss what this might look like in practice by using Honeycomb as a case study: how we rely on visibility into our system to inform planning during the development process, to observe the impact of new changes during and after release, and, of course, debug. We'll start by describing the problems faced by a SaaS platform like ours, then run through some specific instrumentation practices that we love and have used successfully to gain the visibility we need into our system’s day-to-day operations.</p>`
      },
      {
        id: "richard",
        name: "Rich Campbell",
        twitter: "richcampbell",
        bio: "Harnessing his ADD for the Forces of Good",
        talkTopic: "The Moon: Gateway to the Solar System",
        talkBlurb: `<p>In 1972, the last human to walk on the Moon headed back to Earth. Is it time to go back? Join Richard Campbell as he explores the potential of a return of humans to the Moon. Much has been learned about the Moon since the Apollo missions, and interest in the Moon as a place of science, exploration and learning is growing. The Moon can be a catalyst for humankind traveling the solar system - it's time to go back!</p>
        <p>Richard Campbell is a technology entrepreneur and the co-host of the .NET Rocks, a software development podcast. His <a href="http://geekout.show">Geek Out</a> series on .NET Rocks explores a large variety of technology topics including aerospace, alternative energy and whatever other cool technology catches his imagination. He also the chairman of <a href="http://htbox.org">Humanitarian Toolbox</a> a charity that builds open source software for disaster relief organizations.</p>`
      },
      {
        id: "tammy",
        name: "Tammy Butow",
        twitter: "tammybutow",
        bio: "Principal SRE @ Gremlin",
        talkTopic: "TBC",
        talkBlurb: `<p>Principal Site Reliability Engineer <a href="http://twitter.com/GremlinInc">@GremlinInc</a> | Chaos Engineering | Australian | Previously <a href="http://twitter.com/DigitalOcean">@DigitalOcean</a> <a href="http://twitter.com/Dropbox">@Dropbox</a> <a href="http://twitter.com/NAB">@NAB</a></p>
        <p>Co-Founder of <a href="http://twitter.com/GirlGeekAcademy">@GirlGeekAcademy</a>. A global movement to teach 1 million women technical skills by 2025.</p>`
      },
      {
        id: "jana",
        name: "Jana Beck",
        twitter: "iPancreas",
        bio: "dataviz eng @ Stitch Fix",
        talkTopic: "Escaping the diving bell",
        talkBlurb: `<p>Imagine that you’re locked-in, unable to communicate except by blinking a single functional eye. Your only method of communication is to watch (and listen) as a helper reads through a list of all the letters of the alphabet. When you want to select a letter, you blink. Can you imagine this? Can we do more than imagine it? On the modern web with its wide variety of tools, we can! Using React and WebGazer.js (an open-source eye-tracking library for the web), we can approximate this communication technique, the method that Jean-Dominique Bauby used to compose his best-selling memoir *The Diving Bell and the Butterfly*.</p>`
      },
      {
        id: "patima",
        name: "Patima Tantiprasut",
        twitter: "the_patima",
        bio: "Amplifier of people",
        talkTopic: "The art of giving a damn, and also not",
        talkBlurb: `<p>We hold an immense amount of power over the projects we work on. Seldom do we realise the influence that we have, and not to mention, the impact that we can have on the team members around us and also the people who use the products we work on.</p>

        <p>With great power, comes great responsibility.</p>
        
        <p>It’s easy to get lost in the code and forget to ask the questions to understand the context of the task that you’re working on. Do you know the why behind what you’re doing? Do you give a damn? What’s your butterfly effect? </p>
        
        <p>In this talk, we’ll explore areas that we can improve on which can also contribute to building better products, career progression, positive team culture, adding more value to projects, job satisfaction, making a difference and possibly, just maybe, giving a damn.</p>`
      },
      {
        id: "dean",
        name: "Dean Demaret",
        twitter: "",
        bio: "Data @ Xero",
        talkTopic: "Is 10 years too old to start with Machine Learning?",
        talkBlurb: `<p>Doing things with Machine Learning is quite popular these days. But before you can actually implement an ML solution to a problem in production, there might be a few things you need to do first. Getting access to data, trying out different experiments, putting something in front of the customer and trying to get feedback, iterating, getting an actual data pipeline going, ...</p>

        <p>Things that are easy on your local computer when you are doing the standard Udemy Machine Learning tutorial might become a lot harder when your million records of data is spread accross a couple hundred databases, you have to take latency into account, the network sometimes fails, your application is distrubuted.</p>
        
        <p>Xero started implementing its first Data Engineering feature a year ago and this talk will be about all the things that I've personally learned along the way.</p>`
      },
      {
        id: "sacha",
        name: "Sacha Judd",
        twitter: "szechuan",
        bio: "MD @ Hoku Group",
        talkTopic: "Superfan!",
        talkBlurb: `<p>What crowdsourced Norwegian subtitles, distributed radio requests, and fair trade chocolate frogs can teach us about building excellent and ethical software.</p>
        <p>Sacha runs the Hoku Group, a family office combining private investments, early-stage tech ventures and a non-profit foundation. She is the co-host of Refactor (a series of events around diversity in technology), and Flounders’ Club (a network for early-stage company founders). She also spends a confusing amount of time explaining why Harry Styles might be the answer to everything.</p>`
      },
      {
        id: "josh",
        name: "Josh Long",
        twitter: "starbuxman",
        bio: "Developer Advocate @ Pivotal",
        talkTopic: "Cloud Native Java",
        talkBlurb: `<p>"It is not necessary to change. Survival is not mandatory." -W. Edwards Deming</p>
        <p>Work takes time to flow through an organization and ultimately be deployed to production where it captures value. It’s critical to reduce time-to-production. Software - for many organizations and industries - is a competitive advantage.</p>
        <p>Organizations break their larger software ambitions into smaller, independently deployable, feature -centric batches of work - microservices. In order to reduce the round-trip between stations of work, organizations collapse or consolidate as much of them as possible and automate the rest; developers and operations beget “devops,” cloud-based services and platforms (like Cloud Foundry) automate operations work and break down the need for ITIL tickets and change management boards.</p>
        <p>But velocity, for velocity’s sake, is dangerous. Microservices invite architectural complexity that few are prepared to address. In this talk, we’ll look at how high performance organizations like Ticketmaster, Alibaba, and Netflix make short work of that complexity with Spring Boot and Spring Cloud.</p>`
      },
      {
        id: "katie-bell",
        name: "Katie Bell",
        twitter: "notsolonecoder",
        talkTopic: "Coming Soon..."
      },
      {
        id: "mark-young",
        name: "Mark Young",
        twitter: "kiwidev",
        talkTopic: "Coming Soon..."
      },
    ]
  }
};

export const years: Year[] = Object.keys(speakers);
