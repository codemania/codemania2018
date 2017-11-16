import "./CodemaniaApp.css";

import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import Home from "../components/Home";
import SpeakerPage from "../components/SpeakerPage"
import type Year from "../constants";
import YearLayout from "../components/Year";
import YearSelector from "../components/YearSelector";

type CodemaniaAppState = {
  focusedYear: Year,
}

const defaultState = (): CodemaniaAppState => {
  return {
    focusedYear: "2018"
  }
}

class CodemaniaApp extends Component<Props, SnowflakeAppState> {
  constructor(props: Props) {
    super(props)
    this.state = defaultState()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/:id" component={YearLayout}/>
            <Route path="/speakers/:year/:speaker" component={SpeakerPage}/>
          </div>
          {/* <YearSelector setFocusedYearFn={this.setFocusedYear.bind(this)} /> */}
        </div>
      </Router>
    );
  }

  setFocusedYear(year: Year) {
    const focusedYear = year
    this.setState({ focusedYear })
  }
}

export default CodemaniaApp;
