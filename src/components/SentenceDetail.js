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
      <Link to="/about">Volver</Link>
      <Link to="/">Home</Link>
    </React.Fragment>
  );
};

export default SentenceDetail;
