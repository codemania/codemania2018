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
        id: "josh-long",
        name: "Josh Long",
        topic: "Coming Soon..."
      },
      {
        id: "katie-bell",
        name: "Katie Bell",
        topic: "Coming Soon..."
      },
      {
        id: "mark-young",
        name: "Mark Young",
        topic: "Coming Soon..."
      },
      {
        id: "rich-campbell",
        name: "Rich Campbell",
        topic: "Coming Soon..."
      },
      {
        id: "erin-mckean",
        name: "Erin McKean",
        topic: "Coming Soon..."
      },
      {
        id: "jana-beck",
        name: "Jana Beck",
        topic: "Coming Soon..."
      },
      {
        id: "christine-yen",
        name: "Christine Yen",
        topic: "Coming Soon..."
      },
      {
        id: "patima-tantiprasut",
        name: "Patima Tantiprasut",
        topic: "Coming Soon..."
      },
      {
        id: "speaker-9",
        name: "Speaker 9",
        topic: "Coming Soon..."
      },
      {
        id: "dean-demaret",
        name: "Dean Demaret",
        topic: "Coming Soon..."
      },
      {
        id: "sacha-judd",
        name: "Sacha Judd",
        topic: "Coming Soon..."
      },
      {
        id: "rands",
        name: "Michael Lopp",
        topic: "Coming Soon..."
      },
    ]
  }
};

export const years: Year[] = Object.keys(speakers);
