import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import Parks from "./data/parks.json";
import "./index.css";

ReactDOM.render(
  <Router>
    <App parks={Parks} />
  </Router>,
  document.getElementById("root")
);
