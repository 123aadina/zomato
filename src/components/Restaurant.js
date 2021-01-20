import React, { useState, useEffect } from "react";
import Card from "./Card";

const Restaurant = ({ cityId, setSelected }) => {
  const [rest, setRest] = useState([]);

  let myHeader = new Headers();
  myHeader.append("user-key", "e229f15cc483c5d7ec670a96e60bdece");
 

  let requestOption = {
    method: "GET",
    headers: myHeader,
    redirect: "follow",
  };

    const getRestaurant = async () => {
    const response = await fetch(`https://developers.zomato.com/api/v2.1/search?res_id=${cityId}&entity_type=city`, 
    requestOption)
   const data = await response.json();
   console.log('data', cityId);
   console.log('data', data);
   console.log('data.restaurants', data.restaurants);
   setRest(data.restaurants)
 }; 
  useEffect(()=> {
    getRestaurant();
  }, []);
 
 
 

  return (
    <div>
      <h1>hi</h1>
      {rest.length !== 0 &&  rest.map((item, id) => {
                return (
                    <Card item={item} key={item.id} setSelected={setSelected} />
                )
            })}
      
     {/*  <div> {singleCity[0].country_name}</div>
      {
        <img
          src={singleCity[0].country_flag_url}
          alt="Avatar"
          width="200"
          height="300"
          className="imageCard"
        />
      } */}
    </div>
  );
};
export default Restaurant;


/**  const getData = async (id) => {
    /* const response = await fetch(`https://developers.zomato.com/api/v2.1/cities?q=${city}`, */
   /*  const response = await fetch(`https://developers.zomato.com/api/v2.1/establishments?city_id=${id}`,  */
  /*  requestOption)
   const data = await response.json();
   console.log('data', id);
   console.log('data', data);
   console.log('data', data.establishments);
   setData(data.establishments)
 }; 
  useEffect(()=> {
      getData("280");
  }, []);
 
 
 */

/**{data &&  !selected && data.map((item, id) => {
                return (
                    <Card item={item} key={item.id} setSelected={setSelected} />
                )
            })}
            {selected && <City city={selected.id} setSelected={setSelected} />} */


            /**
     const getCitys = async (city) => {
        const response = await fetch(
          `https://developers.zomato.com/api/v2.1/cities?q=${city}`,
          requestOption
        );
        const data = await response.json();
    
        console.log(data.location_suggestions, "data");
        setData(data.location_suggestions);
      };
    
      useEffect(() => {
        getCitys("");
      }, []);
  */