// The design for this file came from 20-MERN\04-Supplemental\create-react-express\client\src\App.js
// I used page files, and components rather than App.css for this file
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbotron />
          <Switch>
            {/* The two lines below insure that the Buttons to the search page work */}
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            {/* renders the Saved page when the "Saved Books button is pressed" */}
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
