import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <header>
        <h1>Home</h1>
      </header>
      <Link to="/about">Lista</Link>
    </React.Fragment>
  );
};

export default Home;
