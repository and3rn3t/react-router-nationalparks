import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import "./App.css";
import ParksList from "./parksList/ParksList";
import Park from "./park/Park";

const apiUrl =
  "https://developer.nps.gov/api/v1/parks?api_key=YT2Ducba4XPc7pQJ7Iih7dzM7uEA8ccv17SYQizs";

class App extends Component {
  async fetchParkInfo() {
    let results = await axios.get(apiUrl);
    console.log(results);
  }

  async componentDidMount() {
    await this.fetchParkInfo();
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <h1>National Parks Service</h1>
          </Link>
        </nav>
        <Route
          exact
          path="/"
          render={() => <ParksList parks={this.props.parks} />}
        />
        <Route
          path="/park/:id"
          render={(props) => <Park {...props} parks={this.props.parks} />}
        />
      </div>
    );
  }
}

export default App;
