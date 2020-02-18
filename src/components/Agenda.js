import React, { Component } from "react";

import { speakers } from "../constants";

const AgendaStyle = () => {
  return (
    <style jsx="true">{`
      .bg {
        /*background: #fff;*/
      }
      .agenda {
        color: #ff8f00;
        margin: 40px auto;
      }
      .agenda h1 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2em;
      }
      .agenda-header {
        background-color: rgba(51,0,255,.8);
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
        color: #ff8f00;
      }
      .agenda p {
        font-size: smaller;
        margin-bottom: 1em;
        line-height: 1.1em;
      }
      .agenda p a, .agenda .hilite {
        color: #ff8f00;
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
      background-color: rgba(51,0,255,.8);
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

    .meriko {
      text-transform: none;
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
  );
}

const SpeakingSlot = (props) => {
  const speaker = props.speaker;
  const isKeynote = props.isKeynote;
  return (
  <td colSpan={isKeynote ? "2" : "1"}>
    <p className="speaker"><a href={"/speakers/2020/" + speaker.id}>{speaker.name}</a></p>
    <p>{speaker.talk.title}</p>
  </td>
  );
}


const AgendaContent = () => {

  const speakerList = speakers["2020"].speakers;

  const findSpeaker = function(id) {
    return speakerList.find(function(s) {
      return s.id === id;
    });
  };

  return (
    <div id="programme-container">
      <table id="programme">
        <tbody>
          <tr>
            <td>
              <p className="time">08.45</p>
            </td>
            <td colSpan="2">
              <p className="non-speaker">OPENING NOTES</p>
            </td>

          </tr>
          <tr>
            <td>
              <p className="time">09.00</p>
            </td>
            <SpeakingSlot isKeynote speaker={findSpeaker("cat")} />
          </tr>
          <tr>
            <td>
              <p className="time">09.50</p>
            </td>
            <SpeakingSlot isKeynote speaker={findSpeaker("avery")} />
          </tr>
          <tr>
            <td>
              <p className="time">10.40</p>
            </td>
            <td colSpan="2">
              <p className="non-speaker">MORNING TEA</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="time">11.15</p>
            </td>
            <SpeakingSlot speaker={findSpeaker("james")} />
            <SpeakingSlot speaker={findSpeaker("lena")} />
          </tr>
          <tr>
            <td>
              <p className="time">12.00</p>
            </td>
            <SpeakingSlot speaker={findSpeaker("heather")} />
            <SpeakingSlot speaker={findSpeaker("simon")} />
          </tr>
          <tr>
            <td>
              <p className="time">12.45</p>
            </td>
            <td colSpan="2">
              <p className="non-speaker">LUNCH</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="time">13.45</p>
            </td>
            <SpeakingSlot speaker={findSpeaker("aaron")} />
            <SpeakingSlot speaker={findSpeaker("jess")} />
          </tr>
          <tr>
            <td>
              <p className="time">14.35</p>
            </td>
            <SpeakingSlot speaker={findSpeaker("nigel")} />
            <SpeakingSlot speaker={findSpeaker("jennifer")} />
          </tr>
          <tr>
            <td>
              <p className="time">15.30</p>
            </td>
            <td colSpan="2">
              <p className="non-speaker">AFTERNOON TEA</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="time">16.00</p>
            </td>
            <SpeakingSlot isKeynote speaker={findSpeaker("amber")} />
          </tr>
          <tr>
            <td>
              <p className="time">16.50</p>
            </td>
            <SpeakingSlot isKeynote speaker={findSpeaker("rich")} />
          </tr>
          <tr>
            <td>
              <p className="time">17.40</p>
            </td>
            <td colSpan="2">
              <p className="non-speaker">CLOSING NOTES</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


class Agenda extends Component {

  render() {
    return (
      <div className="agenda" id="agenda">
        <AgendaStyle />
        <h1>Agenda</h1>
        <div className="agenda-header">
          <h1>Codemania Conference</h1>
          <h2>Wednesday 6th May 2020</h2>
        </div>
        <AgendaContent />
        <div className="agenda-header">
          <h1>Codemania Conversations - sponsored by Xero</h1>
          <h2>Thursday 7th May - Friday 8th May 2020</h2>
        </div>
        <p>Codemania Conversations is a two-day event with strictly limited attendance. It's an unconference, which means that the attendees decide the agenda on day one. It might sound a bit strange, but it works incredibly well. We'll provide 2 or 3 empty tracks over the 2 days. You nominate topics that interest you or that you want to discuss with other attendees, then run the sessions.</p>
      </div>
    );
  }
}

export default Agenda;
