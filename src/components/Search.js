import React,{useState} from 'react'

const Search = () => {
    const [city, setCity] = useState("")
    return (
        <div>
            <input type="text" onChange={() => console.log("object")} placeholder="search..."/>
        </div>
    )
}

export default Search;
