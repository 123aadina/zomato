import React, { useState, useEffect } from "react";


const RestaurantList = ({ cityId, setRestaurant }) => {
  const [rest, setRest] = useState([]);
  

  let myHeader = new Headers();
  myHeader.append("user-key", "e229f15cc483c5d7ec670a96e60bdece");
 

  let requestOption = {
    method: "GET",
    headers: myHeader,
    redirect: "follow",
  };

    const getRestaurants = async () => {
    const response = await fetch(`https://developers.zomato.com/api/v2.1/search?res_id=${cityId}&entity_type=city`, 
    requestOption)
   const data = await response.json();
   console.log('data', cityId);
   console.log('data', data);
   console.log('data.restaurants', data.restaurants);
   setRest(data.restaurants)
 }; 
  useEffect(()=> {
    getRestaurants();
  }, []);
 
  const handleRestSelect = (item)=> {
    setRestaurant(item)
      } 
 
  return (
    <div>
      <h1>hi</h1>
      {rest.length !== 0 &&  rest.map((item, id) => {
                return (
                  <div>
                  <p>{item.restaurant.name}</p>
                  <button onClick={() =>handleRestSelect(item.restaurant)} >Select</button>
                  </div> 

                  )
            })}
    </div>
  );
};
export default RestaurantList;










          
    