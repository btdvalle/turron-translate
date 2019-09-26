import React from "react";
import { Link } from "react-router-dom";

const SentenceItem = props => {
  const { id, original } = props.sentence;
  return (
    <Link to={`/${id}`}>
      <h2>{original}</h2>
    </Link>
  );
};

export default SentenceItem;
