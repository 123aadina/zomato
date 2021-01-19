import React, { useState, useEffect } from "react";

const Restaurant = () => {
  const [rest, setRest] = useState();

  let myHeader = new Headers();
  myHeader.append("user-key", "e229f15cc483c5d7ec670a96e60bdece");
  /* "content-type": "application/json" */

  let requestOption = {
    method: "GET",
    headers: myHeader,
    redirect: "follow",
  };

    const getData = async (id) => {
    /* const response = await fetch(`https://developers.zomato.com/api/v2.1/cities?q=${restaurant}`, */
    const response = await fetch(`https://developers.zomato.com/api/v2.1/establishments?city_id=${id}`, 
    requestOption)
   const data = await response.json();
   console.log('data', id);
   console.log('data', data);
   console.log('data', data.establishments);
   setRest(data.establishments)
 }; 
  useEffect(()=> {
      getData("280");
  }, []);
 
 
 

  return (
    <div>
      <h1>hi</h1>
      {rest && <div>{rest[0].name}</div>}
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