import React, {  useContext} from "react";
import Button from "@material-ui/core/Button";
import {RestaurantContext} from "../context/RestaurantContext";

const RestaurantList = () => {
const {rest, handleRestSelect} = useContext(RestaurantContext)

  return (
    <div>
      {rest.length !== 0 &&
        rest.map((item, id) => {
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
