import React, { Component } from "react";

class Park extends Component {
  render() {
    const id = this.props.match.params.id;
    const parkOnId = this.props.parks[id];
    console.log(parkOnId);
    return (
      <div>
        <h2>{parkOnId.name}</h2>
        <p>{parkOnId.description}</p>
        <p>
          {parkOnId.addresses[0].line1}
          <br></br>
          {parkOnId.addresses[0].city}, {parkOnId.addresses[0].stateCode}{" "}
          {parkOnId.addresses[0].postalCode}
        </p>
        <p><a href={ parkOnId.directionsUrl }>Directions</a></p>
      </div>
    );
  }
}

export default Park;
