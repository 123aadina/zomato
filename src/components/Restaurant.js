import React, { useState } from "react";
import Details from "./Details";
import Button from "@material-ui/core/Button";

const Restaurant = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);

  console.log("item", item);

  const handleRestSelect = (item) => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <div className="restDetail">
        <div>{item.name}</div>
        <Button onClick={handleRestSelect}>More Information</Button>
      </div>
      {showDetails && <Details item={item} />}
    </div>
  );
};
export default Restaurant;
