import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";


const initContext = {
  restaurants: [],
  cities: [],
  cityId: "",
  restaurant:null,
  pending: false,
  
};

export const RestaurantContext = createContext(initContext);

export const RestaurantContextProvider = ({ children }) => {

  let history = useHistory();

  const [restaurants, setRestaurants] = useState(initContext.restaurants);
  const [cities, setCities] = useState(initContext.cities);
  const [cityId, setCityId] = useState(initContext.cityId);
  const [restaurant, setRestaurant] = useState(initContext.restaurant);
  const [pending, setPending] = useState(initContext.pending);
 
 

  let myHeader = new Headers();
  myHeader.append("user-key", "e229f15cc483c5d7ec670a96e60bdece");

  let requestOption = {
    method: "GET",
    headers: myHeader,
    redirect: "follow",
  };

  const getCities = async (city) => {
    history.push("/citiesList");
    setPending(true)
    const response = await fetch(
      `https://developers.zomato.com/api/v2.1/cities?q=${city}`,
      requestOption
    );
    const data = await response.json();
    setPending(false)
    console.log(data.location_suggestions, "data");
    setCities(data.location_suggestions);
    
  };

  const handleCitySelect = (city) => {
    setCityId(city.id);
    getRestaurants()
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
    setRestaurants(data.restaurants);
    history.push("/restaurantList");
  };



  const handleRestaurantSelect = (item) => {
    setRestaurant(item);
    history.push("/restaurant");
  };

 


  return (
    <RestaurantContext.Provider
      value={{ pending, restaurants, cityId, cities, getCities, handleCitySelect, handleRestaurantSelect, restaurant}}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
