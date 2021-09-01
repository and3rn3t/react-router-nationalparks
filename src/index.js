import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
// import Parks from "./data/parks.json"; parks={Parks} 
import "./index.css";

// API Key: YT2Ducba4XPc7pQJ7Iih7dzM7uEA8ccv17SYQizs
// Example URL: https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=YT2Ducba4XPc7pQJ7Iih7dzM7uEA8ccv17SYQizs

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
