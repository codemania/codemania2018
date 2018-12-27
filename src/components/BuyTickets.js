import React, { Component } from 'react'

import tickets from "../images/2019/buy-tickets.svg";

export default class BuyTickets extends Component {
  render() {
    return (
      <div className="buy-tickets">
        <style jsx="true">{`
          .buy-tickets {
            display: flex;
          }
          .ticket-mobile-sidebar {
            display: none;
            flex: 3 0 auto;
          }
          .buy-tickets-image {
            width: 150px;
            flex: 2 0 150px;
          }
          @media only screen
          and (max-width : 600px) {
            .ticket-mobile-sidebar {
              display: block;
            }
            .buy-tickets {
              margin-top: -50px;
            }
          }
        `}</style>
        <div className="ticket-mobile-sidebar"></div>
        <div className="buy-tickets-image">
          <a href="https://codemania-2019.lilregie.com/"><img src={tickets} alt="Buy Tickets Link" /></a>
        </div>
        <div className="ticket-mobile-sidebar"></div>
      </div>
    )
  }
}
