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
            padding: 5px 0 25px 5px;
            margin: 25px 0;
            font-weight: bold;
            font-size: 0.9em;
            line-height: 1.1em;
          }

          .agenda-header:nth-child(5) {
            margin-top: 1em;
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

          #programme {
            /* margin:0 25%; */
            text-transform: capitalize;
            border-spacing: 20px 0;
        }

        /*#programme tr:nth-child(even) td {
            background: rgba(255, 255, 255, .2);
        }*/



        #programme-container {
          padding: 20px;
          background: #ff595a;
        }

        #programme {
          width: 100%;
          padding: 20px;
        }

        #programme td {
            border-top: 1px solid #fff;
            padding: 3px;
            width: 49%;
        }

        #programme .blank {
            border: 0;
            background: transparent;
        }

        #programme td:first-child {
            border: 0;
            width: 0;
        }

        #programme p {
            color: #ffe5cf;
            font-size: .5em;
            margin: 0;
            line-height: 1.4em;
        }

        #programme .speaker {
            color: #fff;
            font-size:.8em;
        }

        #programme .time {
            color: #fff;
            font-size:.5em;
            text-align: right;
        }

          @media only screen
            and (max-width : 600px) {
              .agenda {
                margin: 10px;
              }
              .agenda h1 {
                font-size: 1.4em;
              }
              .agenda-header h1 {
                font-size: 0.9em;
              }
            }
        `}</style>
        <h1>Agenda</h1>
        <div className="agenda-header">
          <h1>Codemania Conference</h1>
          <h2>Wednesday 15th May 2019</h2>
        </div>
        <h2>2019 ROSTER TBC</h2>
        <p>Want to join our world-class lineup of technical speakers? Our CFP is <a href="https://goo.gl/forms/Pd6Uq5QV4QkkvroZ2">here</a> </p>

        <div className="agenda-header">
          <h1>Codemania Conversations</h1>
          <h2>Thursday 16th May - Friday 17th May 2019</h2>
        </div>
        <p>Codemania Conversations is a two-day event with strictly limited attendance. It's an unconference, which means that the attendees decide the agenda on day one. It might sound a bit strange, but it works incredibly well. We'll provide 2 or 3 empty tracks over the 2 days. You nominate topics that interest you or that you want to discuss with other attendees, then run the sessions.</p>
      </div>
    );
  }
}

export default Agenda;
