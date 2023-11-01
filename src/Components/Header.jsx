import React from "react";
import "./Header.css";
import { BsCart3 } from "react-icons/bs";
import logo from "../images/logo.svg";
import imageAvatar from "../images/imageAvatar.png";

function Header() {
  return (
    <div className="headContainer">
      <div className="headLeft">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="list">
          <ul className="menuContainer">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
      <div className="headRight">
        <div className="cartImage">
          <div className="cartItem">
            <p>0</p>
          </div>
          <BsCart3 className="cart" />
        </div>
        <div className="userImage">
          <img src={imageAvatar} alt="userImage" />
        </div>
      </div>
    </div>
  );
}

export default Header;
