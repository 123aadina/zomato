import React from "react";
import { Card } from "@material-ui/core";

const Details = ({ item }) => {
  console.log("item", item);

  return (
    <div className="info">
        <h1>Details</h1>
      <div className="list">Name: {item.name}</div>
      <div className="list"> Address: {item.address}</div>
      <div className="list"> Url: {item.url}</div>
      <div className="list"> Price: {item.price_range}</div>
      {/* <div> Currency: {item.currency}</div>  */}
      <div className="list"> Highlights: {item.highlights}</div>
    </div>
  );
};

export default Details;
