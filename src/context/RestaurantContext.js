import React, { useState, useEffect, createContext } from "react";

const initContext = {
  restaurants: [],
  cities: [],
  cityId: "",
  rest:[],
};

export const RestaurantContext = createContext(initContext);

export const RestaurantContextProvider = ({ children }) => {
  //const [characters, setCharacters] = useState(initContext.characters)
  const [restaurants, setRestaurants] = useState(initContext.restaurants);
  const [cities, setCities] = useState(initContext.cities);
  const [cityId, setCityId] = useState(initContext.cityId);
  const [rest, setRest] = useState(initContext.rest);

  let myHeader = new Headers();
  myHeader.append("user-key", "e229f15cc483c5d7ec670a96e60bdece");

  let requestOption = {
    method: "GET",
    headers: myHeader,
    redirect: "follow",
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

  const handleCitySelect = (city) => {
    setCityId(city.id);
  };


  const getRestaurants = async () => {
    const response = await fetch(
      `https://developers.zomato.com/api/v2.1/search?res_id=${cityId}&entity_type=city`,
      requestOption
    );
    const data = await response.json();
    console.log("data", cityId);
    console.log("data", data);
    console.log("data.restaurants", data.restaurants);
    setRest(data.restaurants);
  };
  useEffect(() => {
    getRestaurants();
  }, []);

  const handleRestSelect = (item) => {
    setRestaurants(item);
  };

  return (
    <RestaurantContext.Provider
      value={{ restaurants, cityId, cities, getCitys, handleCitySelect, handleRestSelect, rest}}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
