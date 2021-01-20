import React, {useState} from 'react';
import Details from "./Details";

const Restaurant = ({item}) =>  {  
const [showDetails, setShowDetails] = useState(false);

console.log('item', item);



const handleRestSelect = (item)=> {
    setShowDetails(!showDetails)
      }

    return (
        <div>
            <div>
               <h3>{item.name}</h3>
                    <button onClick={handleRestSelect} >More Information</button>
                </div>
                {showDetails && <Details item={item} />}
        </div>
    )
}
export default Restaurant;

