import React, { Component } from "react";

import type { Year } from "../constants";
import { speakers } from "../constants";

type Props = {
  year: Year
};

class YearLayout extends Component<Props> {
  render() {
    const year = speakers[this.props.year];
    return (
      <div className="Year">
        <style jsx="true">{`
            .Year {
                margin: 10px;
            }
            li {
                list-style: none;
                display: inline-block;
                margin: 5px;
            }
        `}</style>
        <ul>
          {year.speakers.slice().map((speaker) => {
              return (
            <li key={speaker.name}>
              <h2>{speaker.name}</h2>
              <p>{speaker.topic}</p>
            </li>)
          })}
        </ul>
      </div>
    );
  }
}

export default YearLayout;
