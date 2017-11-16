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
                background: #ff595a;
                color: #fff;
            }
            li {
                list-style: none;
                display: inline-block;
                margin: 0 5px;
            }
            li a {
                text-decoration: none;
                color: #fff;
            }
            .year-selector-button {
                cursor: pointer;
            }
        `}</style>
        <div className="year-selector">
          <p>Nostalgia:</p>
          <ul>
            {years.slice().map(year => {
              return (
                <li key={year} className="year-selector-button">
                  <a href={"/"+year}>{year}</a>
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
