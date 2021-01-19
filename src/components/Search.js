import React,{useState} from 'react'

const Search = ({getCity}) => {
    const [city, setCity] = useState("")
    return (
        <div>
            <input type="text" onChange={(event) => setCity(event.target.value)} placeholder="search..."/>
            <button onClick={() => getCity(city)}>Search</button>
        </div>
    )
}

export default Search;
