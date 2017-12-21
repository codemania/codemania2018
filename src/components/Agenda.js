import React, { Component } from "react";

class Agenda extends Component {

  render() {
    return (
      <div className="agenda" id="agenda">
        <style jsx="true">{`
          .bg {
            background: #fff;
          }
          .agenda {
            color: #ff595a;
            margin: 40px auto;
          }
          .agenda h1 {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 2em;
          }
          .agenda-header {
            background: #ff595a;
            color: #fff;
            text-transform: uppercase;
            margin-bottom: 1em;
            padding: 5px 0 25px 5px;
            font-weight: bold;
            font-size: 0.9em;
            line-height: 1.1em;
          }
          .agenda-header h1, .agenda-header h2 {
            font-size: 0.9em;
            line-height: 1.1em;
            margin: 0;
          }
          .agenda-header h2 {
            color: #ffcd00;
            
          }
          .agenda p {
            font-size: smaller;
            margin-bottom: 1em;
            line-height: 1.1em;
          }
          .agenda p a, .agenda .hilite {
            color: #ffcd00;
            text-decoration:  none;
          }
          .agenda p a:hover {
            text-decoration:  underline;
          }
          @media only screen
            and (max-width : 600px) {
              .agenda {
                margin: 10px;
              }
              .agenda h1 {
                font-size: 1.4em;
              }
            }
        `}</style>
        <h1>Agenda</h1>
        <div className="agenda-header">
          <h1>Codemania Conference</h1>
          <h2>Wednesday 23rd May 2018</h2>
        </div>
        <p>Codemania is a one-day, multi-track conference with world class speakers covering topics that are guaranteed to educate, inform, and inspire software developers of any background. The exact agenda for the day will be shared closer to the event, but for now you can read about our speakers and their topics right on the <a href="/#speakers">home page</a>.</p>

        <div className="agenda-header">
          <h1>Codemania Conversations</h1>
          <h2>Thursday 24th May - Friday 25th May 2018</h2>
        </div>
        <p>Codemania Conversations is a two-day event with strictly limited attendance. It's an unconference, which means that the attendees decide the agenda on day one. It might sound a bit strange, but it works incredibly well. We'll provide 2 or 3 empty tracks over the 2 days. You nominate topics that interest you or that you want to discuss with other attendees, then run the sessions.</p>
      </div>
    );
  }
}

export default Agenda;
