import React from "react";
import { Link } from "react-router-dom";

const SentenceDetail = props => {
  const { migueliano, humano } = props.sentence;
  return (
    <React.Fragment>
      <h3>{migueliano}</h3>
      <p>
        <strong>Definición: </strong>
        {humano}
      </p>
      <Link className="link" to="/about">
        {"< Volver al diccionario"}
      </Link>
      <Link className="link" to="/">
        {"< Home"}
      </Link>
    </React.Fragment>
  );
};

export default SentenceDetail;
