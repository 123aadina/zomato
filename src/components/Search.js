import React,{useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {RestaurantContext} from "../context/RestaurantContext";


const Search = () => {
    const {getCities} = useContext(RestaurantContext);
    const [city, setCity] = useState("");
    
    return (
        <div className="input">
            <TextField type="text" onChange={(event) => setCity(event.target.value)} placeholder="search..."/>
            <Button size="small" variant="contained" color="primary" onClick={() => getCities(city)}>Search</Button>
        </div>
    )
};

export default Search;
