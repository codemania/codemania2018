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
import Navbar from "../components/Navbar";
import About from "../components/About";

type CodemaniaAppState = {
  focusedYear: Year,
}

const defaultState = (): CodemaniaAppState => {
  return {
    focusedYear: "2018"
  }
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
          <style jsx="true">{`
            .App {
              display: flex;
              flex-flow: row wrap;
            }
            .App > * {
              flex: 1 100%;
            }
            .bg {
              background: #ff595a;
            }

            /* Medium screens */
            @media all and (max-width: 699px) {
              /* Hide Sidbars */
              .sidebar { display: none; }
            }

            /* Large screens */
            @media all and (min-width: 700px) {
              /* We invert order of first sidebar and main
               * And tell the main element to take 8x as much width as the other two sidebars
               */
              .sidebar { flex: 1 1px; display: block; }
              .content { flex: 8 0px; }
            }
          `}</style>
          <Navbar />
          <sidebar class="sidebar bg"></sidebar>
          <div className="content bg">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route path="/year/:id" component={YearLayout}/>
            <Route path="/speakers/:year/:speaker" component={SpeakerPage}/>
          </div>
          <sidebar class="sidebar bg"></sidebar>
          {/* <YearSelector setFocusedYearFn={this.setFocusedYear.bind(this)} /> */}
          <footer class="footer bg">Footer</footer>
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
