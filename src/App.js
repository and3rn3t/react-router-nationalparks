import React, { Component } from "react";
import "./App.css";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import ParkList from "./ParkList";
import parkData from "./data/parks.json";
import ParkDetail from "./ParkDetail";
import axios from "axios";

const key = "TJc5xhPEj843fL2dKD7mfxmKWFDrel9K50a97Hbd";

class App extends Component {
  constructor() {
    super();

    this.state = {
      allParks: []
    };
  }

  componentDidMount = () => {
    this.getParks();
  };

  // getParks = async () => {
  //   let response = await axios.get(
  //     `https://developer.nps.gov/api/v1/parks?limit=10&api_key=${key}`
  //   );
  //   console.log(response);
  //   this.setState({
  //     allParks: response.data.data
  //   });
  // };

  getParks = () => {
    axios
      .get(`https://developer.nps.gov/api/v1/parks?limit=10&api_key=${key}`)
      .then(response => {
        this.setState({
          allParks: response.data.data
        });
      });
  };

  render() {
    return (
      <div>
        <nav>
          <Link to="/">National Parks List</Link>
        </nav>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <ParkList allParks={this.state.allParks} />}
            />
            <Route
              path="/park/:id"
              render={routerProps => (
                <ParkDetail {...routerProps} allParks={this.state.allParks} />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
