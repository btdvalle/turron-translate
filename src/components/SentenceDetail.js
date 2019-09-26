import React from "react";
import { Link } from "react-router-dom";

const SentenceDetail = props => {
  const { original, translated } = props.sentence;
  return (
    <React.Fragment>
      <h3>{original}</h3>
      <p>
        <strong>Definición: </strong>
        {translated}
      </p>
      <Link to="/about">Volver</Link>
      <Link to="/">Home</Link>
    </React.Fragment>
  );
};

export default SentenceDetail;
