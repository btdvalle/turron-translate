import React from "react";
import { Link } from "react-router-dom";

const SentenceItem = props => {
  const { id, migueliano } = props.sentence;
  return (
    <Link className="link" to={`/${id}`}>
      <h2>{migueliano}</h2>
    </Link>
  );
};

export default SentenceItem;
