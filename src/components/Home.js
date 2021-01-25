import React, { useContext } from "react";
import RestaurantList from "./RestaurantList";
import Search from "./Search";
import Restaurant from "./Restaurant";
import { RestaurantContext } from "../context/RestaurantContext";
import CitiesList from "./CitiesList";

const Home = () => {
  const { cities, cityId, restaurants ,restaurant} = useContext(RestaurantContext);

  return (
    <div className="container">
      <Search />
      {!cityId && cities &&  <CitiesList />}
      {cityId && restaurants && !restaurant && <RestaurantList />}
      {restaurant && <Restaurant />}
    </div>
  );
};
export default Home;
