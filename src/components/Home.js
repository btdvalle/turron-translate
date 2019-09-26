import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <section className="home">
        <h3 className="home_text">
          "Este diccionario pertenece a la Promoción Grace, que después de tres
          meses y medio ha conseguido, además de aprender a debuggear, descifrar
          los secretos de las expresiones de Miguel."
        </h3>
      </section>
      <Link to="/about">Link</Link>
    </React.Fragment>
  );
};

export default Home;
