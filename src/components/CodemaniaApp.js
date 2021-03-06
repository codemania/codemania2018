import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import Home from "../components/Home";
import SpeakerPage from "../components/SpeakerPage"
import type Year from "../constants";
import YearLayout from "../components/Year";
import Navbar from "../components/Navbar";
import About from "../components/About";
import CodeOfConduct from "./CodeOfConduct";
import Agenda from "./Agenda";
//import Placeholder from "./Placeholder";

type CodemaniaAppState = {
  focusedYear: Year,
}

const defaultState = (): CodemaniaAppState => {
  return {
    focusedYear: "2020"
  }
}

/* The 2019 page with the nav bar and the updated Home page, etc... */
const AppDiv = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="sidebar bg"></div>
      <div className="content bg">
        <Route exact path="/" component={Home} />
        <Route exact path="/coc" component={CodeOfConduct} />
      </div>
      <div className="sidebar bg"></div>
      <footer className="footer bg"></footer>
    </div>
    );
}

class CodemaniaApp extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.state = defaultState()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <AppDiv />
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
