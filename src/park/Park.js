import React, { Component } from "react";
import "./Park.css";

class Park extends Component {
  render() {
    const id = this.props.match.params.id;
    const parkOnId = this.props.parks[id];
    return (
      <div>
        <a href={parkOnId.url} className="parkUrl">
          {parkOnId.name}
        </a>
        <h3 className="address">Address</h3>
        <p>
          {parkOnId.addresses[0].line1}
          <br></br>
          {parkOnId.addresses[0].city}, {parkOnId.addresses[0].stateCode}{" "}
          {parkOnId.addresses[0].postalCode}
        </p>
        <p >
          <a href={parkOnId.directionsUrl}>Directions</a>
          <br></br>
          {parkOnId.directionsInfo}
        </p>
        <p className="description">{parkOnId.description}</p>
      </div>
    );
  }
}

export default Park;
