import React, { Component } from "react";

class About extends Component {

  render() {
    return (
      <div className="about" id="about">
        <style jsx="true">{`
          .about {
            margin: 10px;
            color: #fff
          }
          .about p {
            font-size: 0.9em;
            margin-bottom: 15px;
            text-align: center;
            font-weight: 300;
            line-height: 1.1em;
          }
          .about p a, .about .hilite {
            color: #ffcd00;
            text-decoration:  none;
          }
          .about p a:hover {
            text-decoration:  underline;
          }
          @media only screen
            and (max-width : 600px) {
              .about p {
                font-size: 16pt;
                margin: 0 10px 15px 10px;
              }
            }
        `}</style>
        <h1>About</h1>
        <p>Now 7 years strong, <span className="hilite">Codemania</span> is Auckland's premier conference for software developers, with fantastic speakers from New Zealand and around the world. Join us during NZ TechWeek on <span className="hilite">Wednesday May 23rd, 2018</span> for a full day of information and inspiration from software practitioners at the top of their game.</p>
        <p>If one day is not enough for you, you can also join our world-class speakers and an exclusive gathering of your Codemania friends for two further days after the conference. <span className="hilite">Codemania Conversations</span> returns to the Waitakere Estate, deep in the heart of one of Auckland's most picturesque bush settings. This two-day unconference (with optional dinner and accommodation) is an opportunity for you to create your own agenda, and spend quality time with our speakers.</p>

        <p>Like always, Codemania is an inclusive, safe space for all to enjoy. Please have a read of our <a href="/coc">Code of Conduct</a>.</p>
      </div>
    );
  }
}

export default About;
