import React, { useState, useEffect } from 'react';
import Restaurant from "./Restaurant";
import Search from "./Search";



const Home = () => {
    /* const [data, setData] = useState(); */
    const [selected, setSelected] = useState(null)
    const [cities, setCities] = useState(null)


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
    setSelected(city.id)
}

    return (
        <div>
            <Search getCitys={(value) => getCitys(value)} />
            {cities && !selected && cities.map(city => {
                return (<div>
                    <p>{city.name}</p>
                    <button onClick={() =>handleCitySelect(city)} >Select</button>
                </div>)
            })}
            {selected && <Restaurant cityId={selected} setSelected={setSelected} />}
        </div>
    )
};
export default Home;

