import React, { Component } from "react";

class Park extends Component {
  render() {
    const id = this.props.match.params.id;
    const parkOnId = this.props.parks[id];
    return (
      <div>
        <a href={parkOnId.url} class="parkUrl">
          {parkOnId.name}
        </a>
        <p class="address">
          {parkOnId.addresses[0].line1}
          <br></br>
          {parkOnId.addresses[0].city}, {parkOnId.addresses[0].stateCode}{" "}
          {parkOnId.addresses[0].postalCode}
        </p>
        <p class="directions">
          <a href={parkOnId.directionsUrl}>Directions</a>
          <br></br>
          {parkOnId.directionsInfo}
        </p>
        <p class="description">{parkOnId.description}</p>
      </div>
    );
  }
}

export default Park;
