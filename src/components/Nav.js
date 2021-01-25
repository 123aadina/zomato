import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>zomato</h1>
      <ul className="nav-link">
        <li>
          <Link to="/" className="text-secondary">
            Home
          </Link>
        </li>
        <li>
          <Link to="/citiesList" className="text-secondary">
            CitiesList
          </Link>
        </li>
        <li>
          <Link to="/restaurantList" className="text-secondary">
            RestaurantList
          </Link>
        </li>
        <li>
          <Link to="/restaurant" className="text-secondary">
            Restaurant
          </Link>
        </li>
        <li>
          <Link to="/" className="text-secondary">
            Details
          </Link>
        </li>
      
      
      </ul>
    </nav>
  );
};

export default Nav;
