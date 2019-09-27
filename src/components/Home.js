import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const Home = () => {
  return (
    <React.Fragment>
      <section className="home">
        <Header />
        <h3 className="home_text">
          "Este diccionario pertenece a la Promoción Grace, que después de tres
          meses y medio ha conseguido, además de aprender a debuggear, descifrar
          los secretos de las expresiones de Miguel."
        </h3>

        <Link className="home_link" to="/about">
          Ir al diccionario >
        </Link>
      </section>
    </React.Fragment>
  );
};

export default Home;
