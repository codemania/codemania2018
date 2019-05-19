import React, { Component } from "react";

const TicketsStyle = () => {
  return (
    <style jsx="true">{`
          .tickets {
            color: #fff;
            width: 100%;
            font-size: 0.9em;
          }
          .tickets h1 {
             margin-bottom: -40px;
          }
          .tickets table {
            margin: 10px;
            cursor: pointer;
          }
          .tickets table td {
            padding: 20px;
          }
          .tickets table td:hover {
            text-decoration: underline;
          }
          .tickets table tr {
            background-color: rgba(255,62,0,.8);
          }
          .tickets table tr:nth-child(even) {
            background-color: rgba(214,0,28,.8);
          }
          .tickets tbody tr:hover {
            background-color: rgb(68,0,125);
          }
          .tickets table thead tr {
            background-color: transparent
          }
          .tickets table thead td {
            font-weight: 300;
          }
          .small-print {
            text-align: left;
            font-weight: 300;
            margin-top: 5px;
            padding-left: 25px;
            color: white;
          }

          .small-print a {
            color: #ffcd00;
            text-decoration:  none;    
          }

          @media only screen
          and (max-width : 600px) {
            .tickets table, .tickets {
              font-size: 14pt;
            }
            .tickets table td {
              padding: 10px;
            }
            .tickets table {
              margin: 0 5px;
            }
            .tickets h1 {
              margin-bottom: 0;
           }
           .small-print {
             font-size: small;
           }
          }
      `}</style>);
}

class Tickets extends Component {
  render() {
    return (
      <div className="tickets" id="tickets">
        <TicketsStyle />
        <a className="anchor" id="tickets-anchor"></a>
        <h1>Tickets</h1>
        <table>
          <thead>
            <tr>
              <td></td>
              <td width="15%">EARLYBIRD</td>
              <td width="15%">REGULAR</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CONFERENCE</td>
              <td width="15%">$450</td>
              <td width="15%">$550</td>
            </tr>
            <tr>
              <td>CONVERSATIONS</td>
              <td width="15%">$700</td>
              <td width="15%">$800</td>
            </tr>
            <tr>
              <td>CONVERSATIONS*</td>
              <td width="15%">$500</td>
              <td width="15%">$600</td>
            </tr>
            <tr>
              <td>CONVERSATIONS OVERNIGHT</td>
              <td width="15%">$1100</td>
              <td width="15%">$1200</td>
            </tr>
            <tr>
              <td>CONVERSATIONS OVERNIGHT*</td>
              <td width="15%">$900</td>
              <td width="15%">$1000</td>
            </tr>
          </tbody>
        </table>
        <p className="small-print">*When purchased with a conference ticket. Earlybird ends 3rd March 2019</p>
        <br />
      </div>
    );
  }
}

export default Tickets;
