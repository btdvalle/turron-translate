import React from "react";
import hulk from "../images/hulk-miguel-icon.png";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header_img"
        src={hulk}
        alt="Miguel nuestro profesor favorito"
      />
      <h1 className="header_title">Turrón Translate</h1>
    </header>
  );
};

export default Header;
