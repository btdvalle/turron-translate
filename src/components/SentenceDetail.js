import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const SentenceDetail = props => {
  const { migueliano, humano } = props.sentence;
  return (
    <React.Fragment>
      <section className="detail">
        <Header />
        <div className="detail_description">
          <h3 className="detail_description_title">{migueliano}</h3>
          <p className="detail_description_text">
            <strong>Definición: </strong>
            {humano}
          </p>
        </div>
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
