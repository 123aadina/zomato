import React from 'react'

 const Card = ({item, setSelected}) =>  {

    return (
        <div>
            <h3>{item.establishment.name}</h3>
           {/*  console.log(item.id, {item.establishment.name}) */}
            <button onClick={() => {setSelected(item)}}>info</button>
        </div>
    )
}
export default Card;