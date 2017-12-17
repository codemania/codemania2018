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
          .tickets table td {
            padding: 15px;
          }
          .tickets table tr {
            background-color: #468fa5
          }
          .tickets table tr:nth-child(even) {
            background-color: #006a9a
          }
          .tickets table thead tr {
            background-color: transparent
          }
          .tickets table thead td {
            font-weight: 300;
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
              <td width="15%">$399</td>
              <td width="15%">$499</td>
            </tr>
            <tr>
              <td>CONVERSATIONS</td>
              <td width="15%">$399</td>
              <td width="15%">$499</td>
            </tr>
            <tr>
              <td>CONVERSATIONS*</td>
              <td width="15%">$399</td>
              <td width="15%">$499</td>
            </tr>
            <tr>
              <td>CONVERSATIONS OVERNIGHT</td>
              <td width="15%">$399</td>
              <td width="15%">$499</td>
            </tr>
            <tr>
              <td>CONVERSATIONS OVERNIGHT*</td>
              <td width="15%">$399</td>
              <td width="15%">$499</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tickets;
