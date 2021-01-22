import React, { useContext } from "react";
import RestaurantList from "./RestaurantList";
import Search from "./Search";
import Restaurant from "./Restaurant";
import { RestaurantContext } from "../context/RestaurantContext";
import CitiesList from "./CitiesList";

const Home = () => {
  const { cities, cityId, restaurants ,rest} = useContext(RestaurantContext);

  return (
    <div className="container">
      <Search />
      {!cityId && cities &&  <CitiesList />}
      {cityId && restaurants && !rest && <RestaurantList />}
      {rest && <Restaurant />}
    </div>
  );
};
export default Home;
