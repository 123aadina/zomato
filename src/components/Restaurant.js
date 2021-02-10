import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { RestaurantContext } from "../context/RestaurantContext";
import ListItemText from "@material-ui/core/ListItemText";

const Restaurant = () => {
  const { restaurant } = useContext(RestaurantContext);

  return (
    <div>
      <h1>Restaurant detail</h1>
      <div className="restDetail">
        {restaurant && <div>{restaurant.name}</div>}
        <ListItemText
          primary={restaurant.name}
          secondary={restaurant.location.address}
        />
        <ListItemText primary={restaurant.url} secondary={restaurant.photos} />
        <ListItemText
          primary={restaurant.highlights}
          secondary={restaurant.photos}
        />
      </div>
    </div>
  );
};
export default Restaurant;




