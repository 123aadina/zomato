import React, { useState, useEffect } from 'react';
import RestaurantList from "./RestaurantList";
import Search from "./Search";
import Restaurant from "./Restaurant";



const Home = () => {
    const [restaurant, setRestaurant] = useState(null)
    const [cities, setCities] = useState(null)
    const [cityId, setCityId] = useState(null)



    let myHeader = new Headers()
    myHeader.append("user-key", "e229f15cc483c5d7ec670a96e60bdece")


    let requestOption = {
        method: 'GET',
        headers: myHeader,
        redirect: 'follow'
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
    setCityId(city.id)
}

    return (
        <div>
            <Search getCitys={(value) => getCitys(value)} />
            {cities && !cityId && cities.map(city => {
                return (<div>
                    <p>{city.name}</p>
                    <button onClick={() =>handleCitySelect(city)} >Select</button>
                </div>)
            })}
            {cityId && !restaurant &&<RestaurantList cityId={cityId} setRestaurant={setRestaurant} />}
           {restaurant && <Restaurant item={restaurant} />} 

        </div>
    )
};
export default Home;

