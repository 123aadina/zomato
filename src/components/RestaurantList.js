import React, {  useContext} from "react";
import Button from "@material-ui/core/Button";
import {RestaurantContext} from "../context/RestaurantContext";

const RestaurantList = () => {
const {restaurants, handleRestaurantSelect} = useContext(RestaurantContext)

  return (
    <div>
      <h1>restaurantList</h1>
      {restaurants.length !== 0 &&
        restaurants.map((item, id) => {
          return (
            <div className="restName">
              <div>{item.restaurant.name}</div>
              <Button onClick={() => handleRestaurantSelect(item.restaurant)}>
                Select
              </Button>
            </div>
          );
        })}
    </div>
  );
};
export default RestaurantList;
