import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import "./App.css";
import ParksList from "./parksList/ParksList";
import Park from "./park/Park";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <h1>National Parks App</h1>
          </Link>
        </nav>
        <Route
          exact
          path="/"
          render={() => <ParksList parks={this.props.parks} />}
        />
        <Route
          path="/park/:id"
          render={(props) => <Park {...props} parks={this.props.parks}/>}
        />
      </div>
    );
  }
}

export default App;
