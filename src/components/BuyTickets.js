import React, { Component } from 'react'

import tickets from "../images/2020/assets/buy-large.svg";

const BuyTicketsStyle = () => {
  return (
    <style jsx="true">{`
      .buy-tickets {
        float: right;
        animation: float 2s infinite ease-in;
      }
      .ticket-mobile-sidebar {
        display: none;
        flex: 3 0 auto;
      }
      .buy-tickets-image {
        width: 190px;
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
          <a href="https://codemania-2020.lilregie.com/">
          <img src={tickets} alt="Buy Tickets Link" />
          </a>
        </div>
        <div className="ticket-mobile-sidebar"></div>
      </div>
    )
  }
}
