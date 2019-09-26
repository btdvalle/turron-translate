import React from "react";
import SentenceItem from "./SentenceItem";
import { Link } from "react-router-dom";

const renderList = sentences => {
  return sentences.map(sentence => {
    return (
      <li key={sentence.id}>
        <SentenceItem sentence={sentence} />
      </li>
    );
  });
};

const SentencesList = props => {
  return (
    <div>
      <ul>{renderList(props.sentences)}</ul>
      <Link className="link" to="/">
        {"< Home"}
      </Link>
    </div>
  );
};

export default SentencesList;
