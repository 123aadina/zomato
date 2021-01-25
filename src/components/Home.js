import React, { useContext } from "react";
import Search from "./Search";
import { RestaurantContext } from "../context/RestaurantContext";
import CitiesList from "./CitiesList";
import RestaurantList from "./RestaurantList";
import Restaurant from "./Restaurant";

const Home = () => {
  const { cities, cityId, restaurants ,restaurant} = useContext(RestaurantContext);

  return (
    <div className="container">
        <h1>Home</h1>
      <Search />

      {/* {!cityId && cities &&  <CitiesList />}
      {cityId && restaurants && !restaurant && <RestaurantList />}
      {restaurant && <Restaurant />} */}
    </div>
  );
};
export default Home;
