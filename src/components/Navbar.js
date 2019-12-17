import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

class NavComponent extends Component {
  render() {
    return (
      <nav>
        <style jsx="true">{`
          nav {
            display: flex;
            justify-content: start;
            background: white;
            width: 100%;
            position: fixed;
            padding: 1rem;
            z-index: 999;
          }
          nav .navWide li, nav .navNarrow li {
            color: rgb(68,0,125);
            display: inline-block;
            padding: 1rem 2rem .5rem 2rem;
            font-size: 1.2rem;
            font-weight: 600;
            text-decoration: none;
          }
          nav .navNarrow li {
            display: block;
            line-height: 1.2em;
          }
          nav .navWide li {
            border-bottom: solid 8px #fff;
          }
          nav .navWide li:hover {
            border-bottom: solid 8px rgb(9,0,60);
          }
          nav a {
            display: inline-block;
          }
          nav li a, .fa-bars {
            color: rgb(255,153,0);
            text-decoration: none;
          }
          nav li:hover a, nav li a:hover {
            color: rgb(9,0,60);
          }
          .fa-bars {
            margin: 2px;
          }
          .navWide {
            display: none;
          }
          .navNarrow span {
            float: left;
          }

          .navNarrow .narrowLinks {
             display: none;
          }
          
          .navNarrow .narrowLinks a {
            display: block;
            float: left;
            clear: left;
          }
          
          @media (min-width: 600px) {
            nav {
              justify-content: center;
            }
            .navWide {
              display: block;
            }
            .navNarrow {
              display: none;
            }
          }
        `}</style>

        <div className="navWide">
          <div className="wideDiv">
              <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/agenda">AGENDA</a></li>
                <li><a href="/#about-anchor">ABOUT</a></li>
                <li><a href="/#tickets-anchor">TICKETS</a></li>
                <li><a href="/#sponsors-anchor">SPONSORS</a></li>
              </ul>
            </div>
        </div>
        <div className="navNarrow">
        <FontAwesome name='bars' onClick={this.burgerToggle} />
          <div className="narrowLinks">
            <ul>
              <li><a href="/" onClick={this.burgerToggle}>HOME</a></li>
              <li><a href="/agenda" onClick={this.burgerToggle}>AGENDA</a></li>
              <li><a href="/#about" onClick={this.burgerToggle}>ABOUT</a></li>
              <li><a href="/#tickets" onClick={this.burgerToggle}>TICKETS</a></li>
              <li><a href="/#sponsors" onClick={this.burgerToggle}>SPONSORS</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

  burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
        linksEl.style.display = 'none';
      } else {
        linksEl.style.display = 'block';
      }
  }
}

export default NavComponent