import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ParksList.css";

class ParksList extends Component {
  render() {
    const parksArray = this.props.parks.map((value, index) => {
      return (
        <div key={index}>
          <Link to={"/park/" + index}>
            <div>
              <img src={value.images[0].url} alt={value.images[0].altText} />
              <div>{value.name}</div>
            </div>
          </Link>
        </div>
      );
    });

    return (
      <div>
            <div>{parksArray}</div>
      </div>
    );
  }
}

export default ParksList;
