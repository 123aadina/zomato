import React from "react";
import Search from "./Search";
import app from "../components/config/fbConfig";

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <Search />
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
};
export default Home;
