import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ParksList.css";

class ParksList extends Component {
  render() {
    const parksArray = this.props.parks.map((value, index) => {
      return (
        <div key={index}>
            <Link to={"/park/"+ index} >
          <h2>{value.name}</h2> </Link>
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
