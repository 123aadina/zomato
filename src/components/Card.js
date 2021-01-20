import React from 'react';
/* import Details from "./Details"; */

const Card = ({item, setSelected}) =>  {
console.log('item.restaurant.name', item.restaurant.name)
    return (
        <div>
            <h3>{item.restaurant.name}</h3> 
            <h3>{item.restaurant.address}</h3> 
            <h3>{item.restaurant.url}</h3> 
            <h3>{item.restaurant.price_range}</h3> 
            <h3>{item.restaurant.currency}</h3> 
            <h3>{item.restaurant.highlights}</h3>

            <button onClick={() => {setSelected(item)}}>info</button>
           {/*  <Details /> */}
        </div>
    )
}
export default Card;