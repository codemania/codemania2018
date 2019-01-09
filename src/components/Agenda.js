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

const AgendaStyleOld = () => {
  return (
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
              <p className="speaker"><a href="/speakers/2018/michael">Keynote 1</a></p>
              <p>TBC</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="time">09.50</p>
            </td>
            <td  colSpan="2">
              <p className="speaker"><a href="/speakers/2018/sacha">Keynote 2</a></p>
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
              <p className="speaker"><a href="/speakers/2018/buzzy">Track 1 - 1</a></p>
              <p>TBC</p>
            </td>
            <td>
              <p className="speaker"><a href="/speakers/2018/erin">Track 2 - 1</a></p>
              <p>TBC</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="time">12.00</p>
            </td>
            <td>
              <p className="speaker"><a href="/speakers/2018/tammy">Track 1 - 2</a></p>
              <p>TBC</p>
            </td>
            <td>
              <p className="speaker"><a href="/speakers/2018/jana">Track 2 - 2</a></p>
              <p>TBC</p>
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
              <p className="speaker"><a href="/speakers/2018/katie-bell">Track 1 - 3</a></p>
              <p>TBC</p>
            </td>
            <td>
              <p className="speaker"><a href="/speakers/2018/mark">Track 2 - 3</a></p>
              <p>TBC</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="time">14.35</p>
            </td>
            <td>
              <p className="speaker"><a href="/speakers/2018/patima">Track 1 - 4</a></p>
              <p>TBC</p>
            </td>
            <td>
              <p className="speaker"><a href="/speakers/2018/karl">Track 2 - 4</a></p>
              <p>TBC</p>
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
              <p className="speaker"><a href="/speakers/2018/christine">Locknote 1</a></p>
              <p>TBC</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="time">16.50</p>
            </td>
            <td colSpan="2">
              <p className="speaker"><a href="/speakers/2018/richard">Locknote 2</a></p>
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
      {this.props.is2019 === "true" ? <AgendaStyle /> : <AgendaStyleOld />}
        <h1>Agenda</h1>
        <div className="agenda-header">
          <h1>Codemania Conference</h1>
          <h2>Wednesday 15th May 2019</h2>
        </div>

        {this.props.is2019 === "true"
          ? <AgendaContent />
          : <h2>2019 ROSTER TBC</h2>
        }

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
