import React, {  useContext} from "react";
import Button from "@material-ui/core/Button";
import {RestaurantContext} from "../context/RestaurantContext";

const RestaurantList = () => {
const {restaurants, handleRestSelect} = useContext(RestaurantContext)

  return (
    <div>
      {restaurants.length !== 0 &&
        restaurants.map((item, id) => {
          return (
            <div className="restName">
              <div>{item.restaurant.name}</div>
              <Button onClick={() => handleRestSelect(item.restaurant)}>
                Select
              </Button>
            </div>
          );
        })}
    </div>
  );
};
export default RestaurantList;
