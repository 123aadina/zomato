import React, { useState, useEffect } from "react";

const City = () => {
  const [singleCity, setSingleSet] = useState();

  let myHeader = new Headers();
  myHeader.append("user-key", "e229f15cc483c5d7ec670a96e60bdece");
  /* "content-type": "application/json" */

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
    const cityData = await response.json();

    console.log(cityData.location_suggestions[1].name, "cityData");
    setSingleSet(cityData.location_suggestions);
  };

  useEffect(() => {
    getCitys("berlin");
  }, []);

  return (
    <div>
      <h1>hi</h1>
      {singleCity && <div>{singleCity[0].name}</div>}
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
export default City;


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

