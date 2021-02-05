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





/* return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
 */







