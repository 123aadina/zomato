import React ,{useContext}from "react";
import Button from '@material-ui/core/Button';
import {RestaurantContext} from "../context/RestaurantContext"

const CitiesList = () => {
    const {cities , handleCitySelect} = useContext(RestaurantContext)
  return (
    <div>
      {cities &&
        cities.map((city) => {
          return (
            <div className="city">
              <div className="cityName">{city.name}</div>
              <Button onClick={() => handleCitySelect(city)}>Select</Button>
            </div>
          );
        })}
    </div>
  );
};

export default CitiesList;
