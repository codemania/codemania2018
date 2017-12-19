import React, { Component } from "react";

class Tickets extends Component {

  render() {
    return (
      <div className="tickets" id="tickets">
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
          }
          .tickets table td {
            padding: 20px;
          }
          .tickets table tr {
            background-color: rgba(0,193,222,.7);
          }
          .tickets table tr:nth-child(even) {
            background-color: rgba(0,101,161,.8);
          }
          .tickets table thead tr {
            background-color: transparent
          }
          .tickets table thead td {
            font-weight: 300;
          }
          .small-print {
            text-align: right;
            font-weight: 300;
            margin-top: 5px;
            padding-right: 5px;
          }
          @media only screen
          and (max-width : 600px) {
            .tickets table, .tickets .small-print {
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
          }
        `}</style>
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
              <td width="15%">$800</td>
              <td width="15%">$900</td>
            </tr>
            <tr>
              <td>CONVERSATIONS*</td>
              <td width="15%">$400</td>
              <td width="15%">$500</td>
            </tr>
            <tr>
              <td>CONVERSATIONS OVERNIGHT</td>
              <td width="15%">$1200</td>
              <td width="15%">$1300</td>
            </tr>
            <tr>
              <td>CONVERSATIONS OVERNIGHT*</td>
              <td width="15%">$1000</td>
              <td width="15%">$1100</td>
            </tr>
          </tbody>
        </table>
        <p className="small-print">*When purchased with a conference ticket</p>
      </div>
    );
  }
}

export default Tickets;
