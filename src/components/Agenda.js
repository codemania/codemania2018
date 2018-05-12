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
          <h2>Wednesday 23rd May 2018</h2>
        </div>
        <div id="programme-container">
          <table id="programme">
            <tbody>
              <tr>
                <td>
                  <p class="time">08.45</p>
                </td>
                <td colSpan="2">
                  <p class="non-speaker">OPENING NOTES</p>
                </td>
                
              </tr>
              <tr>
                <td>
                  <p class="time">09.00</p>
                </td>
                <td colSpan="2">
                  <p class="speaker"><a href="/speakers/2018/michael">Michael Lopp</a></p>
                  <p>THE SECOND ACT</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="time">09.50</p>
                </td>
                <td  colSpan="2">
                  <p class="speaker"><a href="/speakers/2018/sacha">Sacha Judd</a></p>
                  <p>SUPERFAN!</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="time">10.40</p>
                </td>
                <td colSpan="2">
                  <p class="non-speaker">MORNING TEA</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="time">11.15</p>
                </td>
                <td>
                  <p class="speaker"><a href="/speakers/2018/buzzy">Richard Busby</a></p>
                  <p>CONTAINER AUTOMATION, SECURITY, AND MONITORING ON AWS</p>
                </td>
                <td>
                  <p class="speaker"><a href="/speakers/2018/erin">Erin McKean</a></p>
                  <p>BUILD AN API IN 20 MINUTES WITH LOOPBACK</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="time">12.00</p>
                </td>
                <td>
                  <p class="speaker"><a href="/speakers/2018/tammy">Tammy Butow</a></p>
                  <p>TBC</p>
                </td>
                <td>
                  <p class="speaker"><a href="/speakers/2018/jana">Jana Beck</a></p>
                  <p>ESCAPING THE DIVING BELL</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="time">12.45</p>
                </td>
                <td colSpan="2">
                  <p class="non-speaker">LUNCH</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="time">13.45</p>
                </td>
                <td>
                  <p class="speaker"><a href="/speakers/2018/katie-bell">Katie Bell</a></p>
                  <p>KUBERNETES: DISTRIBUTED SYSTEMS MADE EASY(-IER)</p>
                </td>
                <td>
                  <p class="speaker"><a href="/speakers/2018/mark">Mark Young</a></p>
                  <p>THE TENTATIVE MUD-TENDER</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="time">14.35</p>
                </td>
                <td>
                  <p class="speaker"><a href="/speakers/2018/patima">Patima Tantiprasut</a></p>
                  <p>THE ART OF GIVING A DAMN, AND ALSO NOT</p>
                </td>
                <td>
                  <p class="speaker"><a href="/speakers/2018/karl">Karl von Randow</a></p>
                  <p>THE STORY OF CHARLES ON IOS</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="time">15.30</p>
                </td>
                <td colspan="2">
                  <p class="non-speaker">AFTERNOON TEA</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="time">16.00</p>
                </td>
                <td colspan="2">
                  <p class="speaker"><a href="/speakers/2018/christine">Christine Yen</a></p>
                  <p>OBSERVABILITY AND THE DEVELOPMENT PROCES</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="time">16.50</p>
                </td>
                <td colspan="2">
                  <p class="speaker"><a href="/speakers/2018/richard">Rich Campbell</a></p>
                  <p>THE MOON: GATEWAY TO THE SOLAR SYSTEM</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="time">17.40</p>
                </td>
                <td colspan="2">
                  <p class="non-speaker">CLOSING NOTES</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

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
