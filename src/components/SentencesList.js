import React from "react";
import Header from "./Header";
import SentenceItem from "./SentenceItem";
import { Link } from "react-router-dom";

const renderList = sentences => {
  return sentences.map(sentence => {
    return (
      <li className="sentenceList_li" key={sentence.id}>
        <SentenceItem sentence={sentence} />
      </li>
    );
  });
};

const SentencesList = props => {
  return (
    <div>
      <Header />
      <ul className="sentenceList">{renderList(props.sentences)}</ul>
      <Link className="sentenceLis_link" to="/">
        {"< Home"}
      </Link>
    </div>
  );
};

export default SentencesList;
