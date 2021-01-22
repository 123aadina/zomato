import React, {  useContext} from "react";
import Button from "@material-ui/core/Button";
import {RestaurantContext} from "../context/RestaurantContext";

const RestaurantList = () => {
/*   const [rest, setRest] = useState([]);

  let myHeader = new Headers();
  myHeader.append("user-key", "e229f15cc483c5d7ec670a96e60bdece");

  let requestOption = {
    method: "GET",
    headers: myHeader,
    redirect: "follow",
  };

  const getRestaurants = async () => {
    const response = await fetch(
      `https://developers.zomato.com/api/v2.1/search?res_id=${cityId}&entity_type=city`,
      requestOption
    );
    const data = await response.json();
    console.log("data", cityId);
    console.log("data", data);
    console.log("data.restaurants", data.restaurants);
    setRest(data.restaurants);
  };
  useEffect(() => {
    getRestaurants();
  }, []);

  const handleRestSelect = (item) => {
    setRestaurant(item);
  }; */
const {rest, handleRestSelect} = useContext(RestaurantContext)

  return (
    <div>
      {rest.length !== 0 &&
        rest.map((item, id) => {
          return (
            <div className="restName">
              <div>{item.restaurant.name}</div>
              <Button onClick={() => handleRestSelect(item.restaurant)}>
                Select
              </Button>
            </div>
          );
        })}
    </div>
  );
};
export default RestaurantList;
