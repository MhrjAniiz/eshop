import React from "react";
import "./navbar.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/haha.svg";

export default function Navbar() {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          Contact
        </Link>
      </div>
    </div>
  );
}
