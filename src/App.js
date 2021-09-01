import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import "./App.css";
import ParksList from "./parksList/ParksList";
import Park from "./park/Park";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <nav>
          <Link to="/">
            <h1>National Parks App</h1>
          </Link>
        </nav>
        <Route 
          path="/"
          render={() => 
          <ParksList 
            parks={this.props} 
          />
          }
        />
      </div>
    );
  }
}

export default App;
