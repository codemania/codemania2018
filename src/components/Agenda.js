import React, { Component } from "react";

const AgendaStyle = () => {
  return (
    <style jsx="true">{`
      .bg {
        background: #fff;
      }
      .agenda {
        color: #44017d;
        margin: 40px auto;
      }
      .agenda h1 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2em;
      }
      .agenda-header {
        background: #44017d;
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
      background: #44017d;
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

const AgendaContent = () => {
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
            <td colSpan="2">
              <p className="speaker"><a href="/speakers/2019/nick">Nick Caldwell</a></p>
              <p>TBC</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="time">09.50</p>
            </td>
            <td  colSpan="2">
              <p className="speaker"><a href="/speakers/2019/heather">Heather Miller</a></p>
              <p>TBC</p>
            </td>
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
            <td>
              <p className="speaker"><a href="/speakers/2019/rockbot">Raquel Velez</a></p>
              <p>The Engineering of Craft</p>
            </td>
            <td>
              <p className="speaker"><a href="/speakers/2019/andrew">Andrew Harvey</a></p>
              <p>Your Team as a Distributed System</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="time">12.00</p>
            </td>
            <td>
              <p className="speaker"><a href="/speakers/2019/hadi">Hadi Hariri</a></p>
              <p>Functional Programming with Kotlin</p>
            </td>
            <td>
              <p className="speaker"><a href="/speakers/2019/holden">Holden Karau</a></p>
              <p>Building End to End Machine Learning Pipeline with Kubeflow &amp; Apache Spark</p>
            </td>
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
            <td>
              <p className="speaker"><a href="/speakers/2019/michelle">Michelle Burke</a></p>
              <p>The road to hell is paved with good intentions: when good data scientists do bad data science</p>
            </td>
            <td>
              <p className="speaker"><a href="/speakers/2019/evan">Evan Shaw</a></p>
              <p>Open Source Rules</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="time">14.35</p>
            </td>
            <td>
              <p className="speaker"><a href="/speakers/2019/rob">Rob Fonseca-Ensor</a></p>
              <p>ASTEROID TIME! When Code Evolution Isn't Enough</p>
            </td>
            <td>
              <p className="speaker"><a href="/speakers/2019/alix">Alix Klingenberg</a></p>
              <p>Backends for Frontends</p>
            </td>
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
            <td colSpan="2">
              <p className="speaker"><a href="/speakers/2019/te-hiku">Peter-Lucas Jones and Keoni Mahelona</a></p>
              <p>TBC</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="time">16.50</p>
            </td>
            <td colSpan="2">
              <p className="speaker meriko"><a href="/speakers/2019/meriko">meriko borogove</a></p>
              <p>TBC</p>
            </td>
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
          <h2>Wednesday 15th May 2019</h2>
        </div>
        <AgendaContent />
        <div className="agenda-header">
          <h1>Codemania Conversations</h1>
          <h2>Thursday 16th May - Friday 17th May 2018</h2>
        </div>
        <p>Codemania Conversations is a two-day event with strictly limited attendance. It's an unconference, which means that the attendees decide the agenda on day one. It might sound a bit strange, but it works incredibly well. We'll provide 2 or 3 empty tracks over the 2 days. You nominate topics that interest you or that you want to discuss with other attendees, then run the sessions.</p>
      </div>
    );
  }
}

export default Agenda;
