import React, { Component } from "react";

import type { Year } from "../constants";
import { years } from "../constants";

type Props = {
  setFocusedYearFn: Year => void
};

class YearSelector extends Component<Props> {
  render() {
    return (
      <div className="YearSelector">
        <style jsx="true">{`
            .year-selector {
                align: left;
                background: #fff;
                color: #ff595a;
                display: flex;
                justify-content: center;
            }
            li {
                list-style: none;
                display: inline-block;
                margin: 0 5px;
                font-weight: bold;
                margin: 10px;
            }
            li a {
                text-decoration: none;
                color: #ff595a;
            }
            .year-selector-button {
                cursor: pointer;
            }
        `}</style>
        <div className="year-selector">
          <ul>
            {years.slice().map(year => {
              return (
                <li key={year} className="year-selector-button">
                  <a href={"/year/"+year}>{year}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default YearSelector;
