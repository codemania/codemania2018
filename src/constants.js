export type Year = "2012" | "2013" | "2014" | "2015" | "2016" | "2017" | "2018";

export type Speaker = {
  id: string,
  name: string,
  twitter: string,
  bio: string,
  image: string,
  talkTopic: string,
  talkBlurb: string,
  hideFromHomePage: boolean
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
        id: "michael",
        name: "Michael Lopp",
        twitter: "rands",
        bio: "VP Engineering @ Slack",
        talkTopic: "The Second Act",
        talkBlurb: `<p>In order to be a historic company, you need your culture to evolve.</p>
        <hr/> <p>Michael Lopp is a Silicon Valley-based engineering leader who builds both people and product at companies such as Borland, Netscape, Palantir, Pinterest, and Apple. While he's not worrying about staying relevant, he writes about pens, bridges, people, leadership, and werewolves at the popular weblog, <a href="http://randsinrepose.com/">Rands in Repose</a>. He works as the VP of Engineering at Slack in San Francisco where he’s furiously working on helping teams reinvent work.</p>

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
        <hr/><p>Richard Campbell is a technology entrepreneur and the co-host of the .NET Rocks, a software development podcast. His <a href="http://geekout.show">Geek Out</a> series on .NET Rocks explores a large variety of technology topics including aerospace, alternative energy and whatever other cool technology catches his imagination. He also the chairman of <a href="http://htbox.org">Humanitarian Toolbox</a> a charity that builds open source software for disaster relief organizations.</p>`
      },
      {
        id: "tammy",
        name: "Tammy Butow",
        twitter: "tammybutow",
        bio: "Principal SRE @ Gremlin",
        talkTopic: "How to establish an incident management program",
        talkBlurb: `<p>Principal Site Reliability Engineer <a href="http://twitter.com/GremlinInc">@GremlinInc</a> | Chaos Engineering | Australian | Previously <a href="http://twitter.com/DigitalOcean">@DigitalOcean</a> <a href="http://twitter.com/Dropbox">@Dropbox</a> <a href="http://twitter.com/NAB">@NAB</a></p>
        <p>Co-Founder of <a href="http://twitter.com/GirlGeekAcademy">@GirlGeekAcademy</a>. A global movement to teach 1 million women technical skills by 2025.</p>`
      },
      {
        id: "buzzy",
        name: "Richard Busby",
        twitter: "buzzynz",
        bio: "Architect @ AWS",
        talkTopic: "Container Automation, Security, and Monitoring on AWS",
        talkBlurb: `<p>In this session Buzzy will talk about the deployment, security, and operationalisation of software platforms using Docker containers on AWS, with real world examples. Learn how to handle security and vulnerability assessments, optimise your containers for size and speed, handle automated deployments with no downtime, and monitor running systems to ensure stability.</p>
        <hr />
        <p>Richard “Buzzy” Busby is a Principal Solutions Architect at Amazon Web Services, based in Wellington. He works with AWS customers all over New Zealand, from small start-ups to large established organisations, helping them use AWS services to reach global audiences. Over the last twenty years he’s worked for a number of software companies in New Zealand and the UK. He started in Technical Support and spent a lot of time fixing broken things before realising that the real fun is in helping customers avoid problems in the first place. On the weekend he can usually be found playing outdoor games with his kids, mountain biking, or working on his house - all neverending projects.</p>`
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
        
        <p>In this talk, we’ll explore areas that we can improve on which can also contribute to building better products, career progression, positive team culture, adding more value to projects, job satisfaction, making a difference and possibly, just maybe, giving a damn.</p>
        
        <hr/>
        <p>Patima is the newly appointed Head of Product at Seven West Media.</p>

        <p>Prior to this, she led the team at Perth-based award winning digital agency, Bam Creative between 2005 to 2017. She was appointed as a Director and Studio Manager at the agency in 2010, a role in which she received recognition for as a finalist in the 2015 Telstra Business Women's Awards.</p>
        <p>With over 15 years' worth of experience in the web industry, she's worn many hats as a designer, front end developer, project manager, creative director, brand director, digital strategist, meetup organiser, conference organiser, speaker and people leader.</p>
        <p>Her other accolades extend to co-founding employee engagement startup, 6Q, and also Mixin, a not-for-profit community organisation at which she is also a Director of. </p>
        <p>She was also on the national committee for the Australian Web Industry Association where she hosted a monthly community meetup for 18 months in addition to creating a national roadshow initiative for professional development called Localhost.</p>`
      },
      {
        id: "sacha",
        name: "Sacha Judd",
        twitter: "szechuan",
        bio: "MD @ Hoku Group",
        talkTopic: "Superfan!",
        talkBlurb: `<p>What crowdsourced Norwegian subtitles, distributed radio requests, and fair trade chocolate frogs can teach us about building excellent and ethical software.</p>
        <hr/><p>Sacha runs the Hoku Group, a family office combining private investments, early-stage tech ventures and a non-profit foundation. She is the co-host of Refactor (a series of events around diversity in technology), and Flounders’ Club (a network for early-stage company founders). She also spends a confusing amount of time explaining why Harry Styles might be the answer to everything.</p>`
      },
      {
        id: "karl",
        name: "Karl von Randow",
        twitter: "avon",
        bio: "Cactuslab",
        talkTopic: "The Story of Charles on iOS",
        talkBlurb: `<p>Many of the apps we develop access APIs over the internet. Charles Proxy running on the desktop lets you capture the HTTP and HTTPS traffic from mobile devices, so you can debug faults and measure the performance of your mobile apps. This is especially important for mobile apps where network traffic is often slow and sometimes expensive. At CodeMania 2018, Karl–the creator of Charles Proxy–will introduce Charles for iOS, a new app that enables you to capture and inspect network traffic on your iOS device. This talk will include local landmarks, an origin story, nostalgia, and some of Karl’s favourite passages of code from this new app.</p>
        <hr/>
        <p>Karl started boutique Auckland web design studio Cactuslab with Matthew Buchanan just after the turn of the century. Cactuslab specialises in intelligent, beautiful, human-centred practical solutions on web and mobile. Karl has also created a number of iOS apps, including Camera+ and Vee for Video; Karl is co-founder of Letterboxd—a social website and apps for movie lovers—but before all of this he created Charles Proxy: a much loved tool for debugging networking calls in applications on Windows, macOS and Linux.</p>`
      },
      {
        id: "katie-bell",
        name: "Katie Bell",
        twitter: "notsolonecoder",
        talkTopic: "Kubernetes: Distributed systems made easy(-ier)",
        talkBlurb: `<p>Kubernetes lets developers deploy their services, not caring which machines they'll run on or how many replicas to run. Each service can be deployed and scaled independently, with Kubernetes clustering them together to get the most out of the CPU and memory that you're paying for. Thanks to Google's Kubernetes Engine and AWS EKS, Kubernetes is becoming easier and easier to use and is rapidly gaining adoption.</p>
        <p>From the perspective of a developer who doesn't have a large ops team helping them, we'll see how to deploy a Kubernetes service with all the trimmings necessary for production. In particular, we'll explore health checking, service discovery, and autoscaling. This isn't a sales pitch though, so we'll also look at what kinds of services aren't suited to Kubernetes and some pitfalls to avoid.</p>
        <hr/>
        <p>Katie is a Lead Engineer at Campaign Monitor, where she's working on a bunch of things, one of which is adopting Kubernetes. Before that she was a full-stack developer at Grok Learning, bringing the joys of programming to masses of high school kids. More relevant to this talk though, is that she also spent six years working at Google, first a software engineer then as a site reliability engineer. There she worked with Borg, the internal platform which powers Google and was the inspiration for Kubernetes. After experiencing Borg's power and pitfalls at scale, she's keen to see where Kubernetes takes the industry.</p>`
      },
      {
        id: "mark",
        name: "Mark Young",
        twitter: "kiwidev",
        bio: "Engineer @ Microsoft",
        talkTopic: "The Tentative Mud-tender",
        talkBlurb: `<p>While we might dream of electric sheep, shiny structures and perfectly maintainable systems sometimes it feels like we’re stuck tip-toeing on the edge of an abyss prodding a distant pile of mud with a fragile stick. But often too much tiptoeing leads to nothing being accomplished and lots of developer frustration. How can we shape this slightly whiffy ball to our will, understand it, extend it or replace it? How can we stay sane during the process?</p>

        <p>Wearing a DevTest hat and donning some mighty Fred Dagg gumboots, I’ll wade through some stories and share some of the techniques that have helped me retain my developer mojo. We’ll look at approaches and tools for faster and more efficient integration, component and unit testing and how these have not only increased team buy-in but enabled safe rewriting without customer interruption.</p>
        `
      },
    ]
  },
  "2019": {
    displayName: "2019",
    speakers: [
      {
        id: "meriko",
        name: "meriko borogove",
        twitter: "merikob",
        bio: "Creator of iPhone Cameras. Formerly Apple.",
        talkTopic: "Talk Topic TBC",
        talkBlurb: `<p>meriko spent 22 years at Apple, most recently as Senior Director of Engineering in the super-secret Special Projects Group. She did time on QuickTime and was a founding member of the iPhone team. meriko was responsible for building the iPhone camera, turning it into a must-have capability beloved by everyday people and professional photographers alike. She is passionate about human-centric technologies, products, and diverse teams that work across the intersection of hardware, software, silicon, and design.</p>
        <p>meriko advises Sense Medical, ScanLAB Projects, and resists the patriarchy at every opportunity.</p>`
      },
      {
        id: "hadi",
        name: "Hadi Hariri",
        twitter: "hhariri",
        bio: "Developer Advocacy @ JetBrains",
        talkTopic: "Functional Programming with Kotlin",
        talkBlurb: `<p>In this talk we'll explain the basics of functional programming, where it fits in with the Object Orientation paradigm and how we can use functional programming in our every day work. We’ll cover important concepts in functional programming such as: Lambdas, Higher Order Functions, Partial Functions and more; seeing how we can apply these in a series of functional patterns to cut down our codebase and at the same time make sure we keep it maintainable</p>`
      },
      {
        id: "nick",
        name: "Nick Caldwell",
        twitter: "nickcald",
        bio: "Chief Product Officer at Looker",
        talkTopic: "Ignite the Fire: management that sparks new leaders",
        talkBlurb: `<p>Nick Caldwell is the Chief Product Officer at Looker, creating a powerful platform for building modern data experiences. Prior to joining Looker he spent 2 years at Reddit as VP of Engineering, helping quintuple the engineering team while working on a bottoms-up revamp of every part of the world's 4th most popular website. He also spent 13 years at Microsoft, culminating in a role as General Manager of the Power BI product family where he rapidly transformed the company's business intelligence suite.</p><p>Nick holds a degree in computer science and electrical engineering from MIT and an MBA from UC Berkeley. He's also a board member of /dev/color, a non-profit whose mission is to maximize the impact of Black software engineers. Nick is a native of P.G. County Maryland, but is happy to call San Francisco home.</p>`
      },
      {
        id: "holden",
        name: "Holden Karau",
        twitter: "holdenkarau",
        bio: "DA @googlecloud: OSS Big Data",
        talkTopic: "Building End to End Machine Learning Pipeline with Kubeflow & Apache Spark",
        talkBlurb: `<p>Once it's time to move our machine learning beyond mnist.csv and start working on production data sets, we often find ourselves with a whole extra set of problems that we haven't been prepared for. In the "real world" most folks spend the majority of their machine learning time doing data cleaning and feature prep (yes yes I know "deep learning" is going to save us, but not if our inputs are garbage). This talk will look at how to build real world pipelines with messy data with changing schemas, all without having to sell our souls to Cthulhu&ast;.</p>
        <p>Now while avoiding a deal with the elder gods is to be commended, the next step (often) is keeping everything up to date. As my boss once told me "Holden, Hannah Montana isn't that cool anymore, it's time to update the recommendation models."&ast; We will explore how to use Kubeflow's pipelines to automate our model updating, as well as a brief discussion about some of the potential dangers of automatically pushing new models into production and how we can solve this.</p>
        <p>&ast; Nothing against Hannah Montana or Cthulhu intended</p>`
      },
      {
        id: "alix",
        name: "Alix Klingenberg",
        twitter: "evolutionises",
        bio: "Software Developer @ Auror",
        talkTopic: "Backends for Frontends",
        talkBlurb: `<p>Here at Auror - a small crime-fighting startup based in Auckland - we’ve become Best Friends Forever with the Backends For Frontends approach to API design. We’ve been rebuilding our product from scratch across a web app, desktop client and cross-platform mobile app and needed to focus on developing exactly what was required to ship our rewrite in the smallest amount of time, while having flexibility to quickly adapt our front-ends as the designs matured.  We’ve been using BFFs to break up APIs based on the client experience that consumes them in order to move fast and not break things.</p><p>This talk will also cover some of the technical aspects of using the BFF approach. We’ll come to a thrilling conclusion with how we auto-generated a client-wrapper - at a level high enough that you could replicate this in your favourite language.</p>
        <hr/><p>Alix is a software developer at Auror, an Auckland-based crime-fighting startup. She started out as a mobile developer writing Kotlin for Android, but became increasingly interested by the challenges of cloud computing, and moved to C# development, with a focus on operability and site reliability engineering. She keeps up with the mobile world by helping organise the Google Developers Group meetup in Auckland, and running DevFest AKL. She’s interested in writing scalable, operable software, and in social justice. In her spare time, she runs workshops with Ally Skills NZ and is the Women Techmakers lead for Auckland GDG.</p>`
      },
      {
        id: "peterlucas",
        name: "Peter-Lucas Jones",
        twitter: "peterlucasjones",
        bio: "Kaiwhakahaere @ TeHikuMedia",
        talkTopic: "Indigenous Digital Platforms",
        talkBlurb: `<p>Peter-Lucas Jones is an experienced broadcaster and digital content leader. He is the Kaiwhakahaere of Te Hiku Media, the Deputy Chairman of Te Whakaruruhau o Ngā Reo Irirangi Māori (National Māori Radio Network) and also the Deputy Chairman of Māori Television. Peter-Lucas is actively involved in developing solutions for indigenous data sovereignty, data collection and Māori data licensing for speech recognition technology.</p><p>Iwi Affiliations: Te Aupōuri, Ngāi Takoto, Ngāti Kahu.</p><p><i style='font-style:italic'>He iti pioke nō Rangaunu he au tōna.</i></p>`
      },
      {
        id: "keoni",
        name: "Keoni Mahelona",
        twitter: "mahelona",
        bio: "CTO @ Te Hiku Media",
        talkTopic: "Indigenous Digital Platforms",
        talkBlurb: `<p>How do we use technology to empower our indigenous communities while maintaining our values and tikanga? That question drives the work we do and the decisions we make. It sums up what I’ve been working on for the last 4 years - indigenous digital platforms, te reo Māori speech technologies, and the Kaitiakitanga License.</p><p><i style='font-style:italic'>He Hawaiʻi au mau a mau.</i></p>`
      },
      {
        id: "te-hiku",
        name: "Peter-Lucas Jones and Keoni Mahelona",
        twitter: "TeHiku",
        bio: "Te Hiku Media",
        talkTopic: "Indigenous Digital Platforms",
        talkBlurb: `How do we use technology to empower our indigenous communities while maintaining our values and tikanga? That question drives the work we do and the decisions we make.`,
        hideFromHomePage: true
      },
      {
        id: "evan",
        name: "Evan Shaw",
        twitter: "codemania",
        bio: "Lead Engineer @ Vend",
        talkTopic: "Open Source Rules",
        talkBlurb: `<p>This is a story about a bug I fixed in an open source project. There will be technical details, but it's really more about adopting a growth mindset, navigating unfamiliar code bases, finding help, and touches on things that make open source great but also sometimes hard and frustrating. These things are presented as rules of open source. (The title's a pun. Get it? 😜)</p>`
      },
      {
        id: "michelle",
        name: "Michelle Burke",
        twitter: "smrtgirl",
        bio: "Data Architect @ Reserve Bank of NZ",
        talkTopic: "The road to hell is paved with good intentions: when good data scientists do bad data science",
        talkBlurb: `<p>Algorithms, Machine Learning, and AI are the current buzzwords in the data analytics space. More and more developers are getting involved in the next level of delivering knowledge from data, but are we doing it correctly? Are we thinking about how biases in the training data sets (and the human biases that are part of the development of the algorithms) are affecting the results?</p>
        <hr/><p>Michelle has been working in data longer than she'd care to admit. Her current favourite dataset is her Untappd check-ins (if you're going to invest that much in craft beer, you should get something out of it, right?)</p><p>
        She’s worked for tiny companies and large multinationals and everything in between. She is passionate about data quality, data security, appropriate uses of information, solving business problems, and building welcoming and diverse teams.  </p>`
      },
      {
        id: "rob",
        name: "Rob Fonseca-Ensor",
        twitter: "robfe",
        bio: "Eng. Director @ Auror",
        talkTopic: "ASTEROID TIME! When Code Evolution Isn't Enough",
        talkBlurb: `<p>It’s common to wish you could just throw away a codebase that’s over a few months old (or if it’s JavaScript, a couple of days), but sometimes it really does make the most sense to start over.  
        In 2018 Auror made the call to rebuild their entire software product from scratch. This talk will be covering how we approached that decision, how you might approach a similar decision, ways to convince other people it’s a good idea, and the saner alternatives to rewriting *everything*.</p>
        <hr/><p>Rob loves building software systems that people love to use. His technology focus is now on cloud platforms, C#, MVC, Typescript and React. He’s been coding for the past 13 years, leading teams in Auckland, Krakow, Malta and London. In his role at Auror, he's enjoying the balance of customer-focus, technology, and team. His Patronus is Daddy Pig.</p>`
      },
      {
        id: "heather",
        name: "Heather Miller",
        twitter: "heathercmiller",
        bio: "Professing things @ CMU",
        talkTopic: "Talk Topic TBC",
        talkBlurb: ``
      },
      {
        id: "andrew",
        name: "Andrew Harvey",
        twitter: "mootpointer",
        bio: "CTO in Residence – Sydney @ Microsoft",
        talkTopic: "Your Team as a Distributed System",
        talkBlurb: `<p>As we level up in technical roles, often we find ourselve thrust into team leadership and management. This sneaks up on us and we can be left without the skills to adequately understand, engage with and lead our teams. This inevitably has a negative effect on our teams and this effect is multiplied as you scale.</p>
        <p>What if we could reach into our toolbox that we use to understand technical problems – software architecture and distributed systems theory – to help us understand our teams? Could we learn to better manage people through this metaphor?</p>
        <p>We will explore the dynamics of teams and how they map to our understanding of distributed systems. Using this understanding we can apply distributed systems theory to help unpick some of the dynamics of our teams and how to optimise them for scale.</p>
        <p>From communcation to culture, we will break down the components of our distributed system and see what makes it tick using things like CAP Theorem and the 8 Fallacies of Distributed Systems. You will walk away with some tools to help understand your team, and set yourself up for successful scaling.</p>
        <hr/><p>Andrew Harvey is CTO in Residence in Sydney for Microsoft. He works with startups of all sizes to help them scale their product and technology. Previously he has worked as CTO for CancerAid and Zova (where he won an Apple Design Award in 2016). Outside work, he rides bikes, obsesses over coffee and fulfils stereotypes.</p>`
      },
      {
        id: "rockbot",
        name: "Raquel Velez",
        twitter: "rockbot",
        bio: "Engineering Manager @ Slack",
        talkTopic: "The Engineering of Craft",
        talkBlurb: `<p>Consider the code you write every day: Is it engineering? Is it craft? Is it... both? Is there something we can learn by returning to our creative roots, to help us be even better engineers than we already are?</p>
        <p>Join me as I look at engineering from a totally different angle. We’ll talk about patterns, prototypes, testing, and bug fixing... without reviewing a single line of code.</p>
        <p>There will be puns. And pockets. And you might even walk away with a better understanding of why your pants don’t fit as well as they could!</p>
        <hr/><p>Raquel Vélez is the engineering manager of the Platform App Discovery team at Slack in San Francisco, CA. Before her tenure at Slack, she was employee #1 at npm, Inc, helping the company grow to 30 people. Before that she worked at a variety of startups and institutions around the world, ranging from robotics to JavaScript. Raquel took both experiences to help found the Nodebots community, and she is a co-author of the book <a href="http://www.amazon.com/Make-JavaScript-Johnny-Five-Raspberry-BeagleBone/dp/1457186950">Make: JavaScript Robotics</a>. In her off time, you can find her sewing, driving fast cars, speaking, and hanging out with her hilarious husband and two cats dressed in dog suits.</p>`
      }
    ]
  }
};

export const years: Year[] = Object.keys(speakers);
