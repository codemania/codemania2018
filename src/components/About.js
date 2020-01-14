import React, { Component } from "react";


const AboutStyles = () => {
  return (
    <style jsx="true">{`
      .about {
        margin: 10px;
        color: #fff;
        z-index: 10;
      }
      .about p {
        font-size: 0.9em;
        margin-bottom: 15px;
        text-align: center;
        font-weight: 300;
        line-height: 1.1em;
      }
      .about p a, .about .hilite {
        text-decoration:  none;
      }
      .about p a:hover {
        color: rgb(255,0,153);
        text-decoration: none;
        border-bottom: solid 4px rgb(255,0,153);
      }
      @media only screen and (max-width : 600px) {
        .about p {
          font-size: 16pt;
          margin: 0 10px 15px 10px;
        }
      }
      `}</style>
  );
}

class About extends Component {

  render() {
    return (
      <div className="about" id="about">
        <a className="anchor" id="about-anchor"></a>
        <AboutStyles />
        <h1>About</h1>
        <p>Codemania is back and better than ever: a full day of information and inspiration from software practitioners at the top of their game. Codemania conference will be held at the luxurious Cordis Hotel on May 6th.</p>

        <p>Once again, you can also join our world-class speakers and an exclusive gathering of your Codemania family for 2 days after the Codemania conference: Codemania Conversations. This year, we will be moving to a new venue, just a 35-minute ferry trip across to Waiheke Island.</p>

        <p>As always, Codemania is an inclusive, safe space for all to enjoy. Please have a read of our <a href="/coc">Code of Conduct</a>.</p>
      </div>
    );
  }
}

export default About;
