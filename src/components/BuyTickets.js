import React, { Component } from 'react'

import tickets from "../images/2019/buy-tickets.svg";
import tickets2018 from "../images/2018/buy-tickets.svg";

const BuyTicketsStyle = () => {
  return (
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
      }
    `}</style>);
};

export default class BuyTickets extends Component {
  render() {
    return (
      <div className="buy-tickets">
        <BuyTicketsStyle />
        <div className="ticket-mobile-sidebar"></div>
        <div className="buy-tickets-image">
          <a href="https://codemania-2019.lilregie.com/">
          {
            this.props.is2019 === "true"
              ? <img src={tickets} alt="Buy Tickets Link" />
              : <img src={tickets2018} alt="Buy Tickets Link" />
          }
          </a>
        </div>
        <div className="ticket-mobile-sidebar"></div>
      </div>
    )
  }
}
