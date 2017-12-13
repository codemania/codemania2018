import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

class NavComponent extends Component<Props> {
  render() {
    return (
      <nav>
        <style jsx="true">{`
          nav .navWide li, nav .navNarrow li {
            color: #ff595a;
            font-weight: bold;
            display: inline-block;
            margin: 10px;
          }
          nav .navNarrow li {
            display: block;
            line-height: 1.4em;
          }
          nav li a, .fa-bars {
            color: #ff595a;
            text-decoration: none;
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
          
          @media (min-width: 480px) {
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
                <li><a href="#">HOME</a></li>
                <li><a href="#">AGENDA</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="#">TICKETS</a></li>
                <li><a href="#">SPONSORS</a></li>
              </ul>
            </div>
        </div>
        <div className="navNarrow">
        <FontAwesome name='bars' onClick={this.burgerToggle} />
          <div className="narrowLinks">
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">AGENDA</a></li>
              <li><a href="/about">ABOUT</a></li>
              <li><a href="#">TICKETS</a></li>
              <li><a href="#">SPONSORS</a></li>
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