
import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import { Card } from "@material-ui/core";

const Details = ({ item }) => {
 /*  console.log("item", item); */

  return (
    <div className="info">
      <h1>Details</h1>
      <ListItemText primary={item.name} secondary={item.location.address} />
      <ListItemText primary={item.url} secondary={item.photos} />
      <ListItemText primary={item.highlights} secondary={item.photos} />
    </div>
  );
};

export default Details;


  
