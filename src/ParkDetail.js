import React from "react";

const ParkDetail = props => {
  let park = props.allParks.find(park => {
    return park.id === props.match.params.id;
  });
  console.log(park);
  return (
    <div>
      <h2>{park.name}</h2>
      <img src={park.images[0].url} />
    </div>
  );
};

export default ParkDetail;
