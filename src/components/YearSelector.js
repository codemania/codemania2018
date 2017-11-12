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
            }
            li {
                list-style: none;
                display: inline-block;
                margin: 0 5px;
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
                  <h2
                    onClick={() => this.props.setFocusedYearFn(year)}
                  >
                    {year}
                  </h2>
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
