import React, { useState, useContext } from "react";
import Details from "./Details";
import Button from "@material-ui/core/Button";
import { RestaurantContext } from "../context/RestaurantContext";

const Restaurant = () => {
  const [showDetails, setShowDetails] = useState(false);
  const { restaurant } = useContext(RestaurantContext);

  const handleShowMore = () => {
    setShowDetails(true);
  /*   setShowDetails(false); */
  };

  return (
    <div>
       <h1>Restaurants</h1>
      <div className="restDetail">
        {restaurant && <div>{restaurant.name}</div>}
        <Button onClick={handleShowMore}>More Information</Button>
      </div>
      {showDetails && <Details item={restaurant}  />}
    </div>
  );
};
export default Restaurant;
