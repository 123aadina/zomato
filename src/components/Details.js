import React from 'react'

const Details = ({item}) => {

    console.log("item", item)

    return (
        <div>
            <h2>{item.name}</h2>
            <h3>{item.address}</h3> 
            <h3>{item.url}</h3> 
            <h3>{item.price_range}</h3> 
            <h3>{item.currency}</h3> 
            <h3>{item.highlights}</h3>
        </div>
    )
}

export default Details
