import React, { useState, useContext } from "react";
import RestaurantList from "./RestaurantList";

import Search from "./Search";
import Restaurant from "./Restaurant";
import Button from "@material-ui/core/Button";
import { RestaurantContext } from "../context/RestaurantContext";
import CitiesList from "./CitiesList";

const Home = () => {
  /*  const [restaurant, setRestaurant] = useState(null)
    const [cities, setCities] = useState(null)
    const [cityId, setCityId] = useState(null)



    let myHeader = new Headers()
    myHeader.append("user-key", "e229f15cc483c5d7ec670a96e60bdece")


    let requestOption = {
        method: 'GET',
        headers: myHeader,
        redirect: 'follow'
    };

    const getCitys = async (city) => {
        const response = await fetch(
            `https://developers.zomato.com/api/v2.1/cities?q=${city}`,
            requestOption
        );
        const data = await response.json();

        console.log(data.location_suggestions, "data");
        setCities(data.location_suggestions);
    };

 */
  const { cities, cityId, restaurants } = useContext(RestaurantContext);

  return (
    <div className="container">
      <Search />
      {!cityId && <CitiesList />}
      {cityId && !restaurants && <RestaurantList cityId={cityId} />}
      {/* {restaurant && <Restaurant item={restaurant} />} */}
    </div>
  );
};
export default Home;
