import React,{useState, useEffect} from 'react';
import Card from "./Card";
import City from "./City";
import Search from "./Search";



 const Home = () => {
     const [data, setData] = useState();
     const [selected, setSelected] = useState()

     let myHeader = new Headers()
     myHeader.append("user-key", "e229f15cc483c5d7ec670a96e60bdece")
     /* "content-type": "application/json" */

     let requestOption = {
         method: 'GET',
         headers:myHeader,
         redirect: 'follow'
     };

     const getCitys = async (city) => {
        const response = await fetch(
          `https://developers.zomato.com/api/v2.1/cities?q=${city}`,
          requestOption
        );
        const cityData = await response.json();
    
        console.log(cityData.location_suggestions[1], "cityData");
        setData(cityData.location_suggestions);
      };
    
      useEffect(() => {
        getCitys("berlin");
      }, []);
 

    return (
        <div>
            <Search />
            {data &&  !selected && data.map((item, id) => {
                return (
                    <Card item={item} key={item.id} setSelected={setSelected} />
                )
            })}
            {selected && <City city={selected.id} setSelected={setSelected} />}
        </div>
    )
}
export default Home;


 /* const response = await fetch(`https://developers.zomato.com/api/v2.1/cities?q=${city}`,  */