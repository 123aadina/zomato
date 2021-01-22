import React, { useContext } from "react";
import RestaurantList from "./RestaurantList";
import Search from "./Search";
import Restaurant from "./Restaurant";
import { RestaurantContext } from "../context/RestaurantContext";
import CitiesList from "./CitiesList";

const Home = () => {
  const { cities, cityId, restaurants } = useContext(RestaurantContext);

  return (
    <div className="container">
      <Search />
      {!cityId && <CitiesList />}
      {cityId && !restaurants && <RestaurantList cityId={cityId} />}
      {restaurants && <Restaurant item={restaurants} />}
    </div>
  );
};
export default Home;
