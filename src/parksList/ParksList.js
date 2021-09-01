import React, { Component } from "react";
import "./ParksList.css";

class ParksList extends Component {
  render() {
    const parksArray = this.props.parks.map((value, index) => {
      return (
        <div>
          <h2>{value.name}</h2>
          <img src={value.images[0].url} alt={value.images[0].altText}/>
        </div>
      );
    });
    console.log(parksArray);

    return (
      <div>
        <ul>
          <li>{parksArray}</li>
        </ul>
      </div>
    );
  }
}

export default ParksList;
