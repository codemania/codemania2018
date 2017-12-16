import React, { Component } from "react";

class About extends Component {

  render() {
    return (
      <div class="about">
        <style jsx="true">{`
          .about {
            margin: 10px;
            color: #fff
          }
          h1 {
            font-size: 1.2em;
            margin: 15px 0;
          } 
          p {
            font-size: 0.9em;
            margin-bottom: 15px;
            text-align: justify;
            font-weight: 300;
          }
        `}</style>
        <h1>What is Codemania?</h1>
        <p>Codemania is back and better than ever: a full day of information and inspiration from software practitioners at the top of their game. <a href="/agenda" class="hilite">Codemania conference</a> will be held at the luxurious Langham Hotel on Friday April 28th.</p>
        <p>Once again, you can also join our world-class speakers and an exclusive gathering of your Codemania family for the whole weekend after Codemania conference. <a href="/conversations" class="hilite">Codemania conversations</a> returns to the Waitakere Estate, deep in the heart of one of Auckland's most picturesque bush settings.</p>
      
        <p>Like always, Codemania is an inclusive, safe space for all to enjoy. Please have a read of our <a class="hilite" href="/coc">Code of Conduct</a>.</p>
      </div>
    );
  }
}

export default About;
