import React from "react";
import { Card } from "@material-ui/core";

const Details = ({ item }) => {
  console.log("item", item);

  return (
    <div className="info">
        <h1>Details</h1>
      <div className="list">Name: {item.name}</div>
      <div className="list"> Address: {item.location.address}</div>
      <div className="list"> Url: {item.url}</div>
      <div className="list"> Price: {item.price_range}</div>
      <div className="list"> Currency: {item.photos}</div> 
      <div className="list"> Highlights: {item.highlights}</div>
    </div>
  );
};

export default Details;
