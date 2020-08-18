import React from "react";
import { Link } from "react-router-dom";

const ParkList = props => {
  let parks = props.allParks.map(park => {
    return (
      <div>
        <Link to={`/park/${park.id}`}>
          <h2>{park.name}</h2>
        </Link>
        <img src={park.images[0].url} />
      </div>
    );
  });
  return <div>{parks}</div>;
};

export default ParkList;
