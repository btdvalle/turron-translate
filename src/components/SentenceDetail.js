import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const SentenceDetail = props => {
  const { migueliano, humano } = props.sentence;
  return (
    <React.Fragment>
      <section className="detail">
        <Header />
        <h3 className="detail_title">{migueliano}</h3>
        <p className="detail_text">
          <strong>Definición: </strong>
          {humano}
        </p>
        <Link className="detail_link" to="/about">
          {"< Volver al diccionario"}
        </Link>
        <Link className="detail_link" to="/">
          {"< Home"}
        </Link>
      </section>
    </React.Fragment>
  );
};

export default SentenceDetail;
