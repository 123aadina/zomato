/* import React, { useState, useEffect } from 'react'

const Details = () => {

    const [singleRest, setSingleRest] = useState({});

    let myHeader = new Headers();
    myHeader.append("user-key", "e229f15cc483c5d7ec670a96e60bdece");
   
  
    let requestOption = {
      method: "GET",
      headers: myHeader,
      redirect: "follow",
    };
  
      const getSingleRest= async () => {
      const response = await fetch(`https://developers.zomato.com/api/v2.1/cities?q=${restaurant}`,
      const response = await fetch(`https://developers.zomato.com/api/v2.1/establishments?city_id=${cityId}`, 
      requestOption)
     const data = await response.json();
     console.log('data', );
     console.log('data', data);
     console.log('data.establishments', data.establishments);
     setSingleRest(data.establishments)
   }; 
    useEffect(()=> {
        getSingleRest();
    }, []);


    return (
        <div>
            <h2>Details</h2>
        </div>
    )
}

export default Details
 */