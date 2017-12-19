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
          .about p a {
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
                margin: 0 20px 15px 20px;
                text-align: justify;
              }
            }
        `}</style>
        <h1>About</h1>
        <p>Codemania is back and better than ever: a full day of information and inspiration from software practitioners at the top of their game. <a href="/agenda">Codemania conference</a> will be held at the luxurious Langham Hotel on Friday April 28th.</p>
        <p>Once again, you can also join our world-class speakers and an exclusive gathering of your Codemania family for the whole weekend after Codemania conference. <a href="/conversations">Codemania conversations</a> returns to the Waitakere Estate, deep in the heart of one of Auckland's most picturesque bush settings.</p>

        <p>Like always, Codemania is an inclusive, safe space for all to enjoy. Please have a read of our <a href="/coc">Code of Conduct</a>.</p>
      </div>
    );
  }
}

export default About;
