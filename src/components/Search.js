import React,{useState} from 'react'

const Search = ({getCitys}) => {
    const [city, setCity] = useState("")
    return (
        <div>
            <input type="text" onChange={(event) => setCity(event.target.value)} placeholder="search..."/>
            <button onClick={() => getCitys(city)}>Search</button>
        </div>
    )
}

export default Search;
