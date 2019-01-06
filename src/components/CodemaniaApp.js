import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import Home from "../components/Home";
import SpeakerPage from "../components/SpeakerPage"
import type Year from "../constants";
import YearLayout from "../components/Year";
//import YearSelector from "../components/YearSelector";
import Navbar from "../components/Navbar";
import About from "../components/About";
import CodeOfConduct from "./CodeOfConduct";
import Agenda from "./Agenda";
import Placeholder from "./Placeholder";

type CodemaniaAppState = {
  focusedYear: Year,
}

const defaultState = (): CodemaniaAppState => {
  return {
    focusedYear: "2019"
  }
}

/* The 2019 page with the nav bar and the updated Home page, etc... */
const AppDiv2019 = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="sidebar bg"></div>
      <div className="content bg">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/coc" component={CodeOfConduct}/>
        <Route exact path="/agenda" render={(props) => (<Agenda is2019="true"/>)} />
        <Route path="/year/:id" component={YearLayout}/>
        <Route path="/speakers/:year/:speaker" component={SpeakerPage}/>
      </div>
      <div className="sidebar bg"></div>
      <footer className="footer bg"></footer>
    </div>
    );
}

/* The placeholder, just with a 'buy now' table... */
const AppDiv = () => {
  return (
    <div className="App">
      <style jsx="true">{`
            .bg {
              background: #ff595a;
      `}</style>
      <div className="sidebar bg"></div>
      <div className="content bg">
        <Route exact path="/" component={Placeholder} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/coc" component={CodeOfConduct}/>
        <Route exact path="/agenda" render={(props) => (<Agenda is2019="false"/>)} />
        <Route path="/year/:id" component={YearLayout}/>
        <Route path="/speakers/:year/:speaker" component={SpeakerPage}/>
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
    if (this.props.flags.is2019 === "true") {
      return (
        <Router>
            <AppDiv2019 />
        </Router>
      );
    }

    return (
      <Router>
          <AppDiv />
      </Router>
    );
  }

  setFocusedYear(year: Year) {
    const focusedYear = year
    this.setState({ focusedYear })
  }
}

export default CodemaniaApp;
