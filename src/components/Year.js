import React, { Component } from "react";

import type { Year } from "../constants";
import { speakers } from "../constants";

type Props = {
  year: Year
};

class YearLayout extends Component {
  render() {
    const year = speakers[this.props.year];
    return (
      <div className="Year">
        <style jsx>{`
            li {
                list-style: none;
                display: inline-block;
                margin: 0 5px;
            }
        `}</style>
        <ul>
          {year.speakers.slice().map((speaker) => {
              return (
            <li>
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
