import React, { Component } from "react";

class CodeOfConduct extends Component {

  render() {
    return (
      <div className="coc" id="coc">
        <style jsx="true">{`
          .bg {
            background: #fff;
          }
          .coc {
            color: #ff595a;
            margin: 40px auto;
          }
          .coc h1 {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 2em;
            margin-bottom: 20px;
          }
          .coc h2 {
            background: #ff595a;
            color: #fff;
            text-transform: uppercase;
            margin-bottom: 1em;
            padding: 5px 0 25px 5px;
            font-weight: bold;
            font-size: 0.9em;
            line-height: 1.1em;
          }
          .coc p {
            font-size: smaller;
            margin-bottom: 1em;
            line-height: 1.1em;
          }
          .signatories {
            display: flex;
          }
          .signatories p {
            margin: 20px;
          }
          @media only screen
            and (max-width : 600px) {
              .coc {
                margin: 10px;
              }
              .coc h1 {
                font-size: 1.4em;
              }
              .coc p {
                text-align: justify;
              }
              .signatories {
                display: inline-block;
              }
            }
        `}</style>
        <h1>Code of Conduct</h1>
        <h2>Codemania anti-harassment policy</h2>
        <p>Codemania is dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, or religion. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks. Conference participants violating these rules may be sanctioned or expelled from the conference at the discretion of the conference organisers.</p>

        <p>Harassment includes offensive verbal comments related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. Participants asked to stop any harassing behaviour are expected to comply immediately.</p>

        <p>If a participant engages in harassing behaviour, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact the conference organisers immediately.</p>

        <p>The conference organisers will be happy to help those experiencing harassment to feel safe. We value your attendance. We expect participants to follow these rules at all venues and Codemania-related events (e.g. after-parties and workshops).</p>

        <div className="signatories" >
          <p>Ian Randall<br/>
      ian@codemania.co.nz</p>
          <p>Ben Gracewood<br/>
      ben@codemania.co.nz</p>
        </div>
      </div>
    );
  }
}

export default CodeOfConduct;
