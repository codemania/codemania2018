import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

class NavComponent extends Component<Props> {
  render() {
    return (
      <div>
        <style jsx="true">{`
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
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
        </div>
        <div className="navNarrow">
        <FontAwesome name='bars' onClick={this.burgerToggle} />
          <div className="narrowLinks">
              <a href="#">NLink 1</a>
              <a href="#">NLink 2</a>
              <a href="#">NLink 3</a>
          </div>
      </div>
      </div>
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