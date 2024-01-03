import React from "react";
import "./Header.css";
import { IoIosSearch } from "react-icons/io";
import { BiCartAdd } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search..."
        />
        <IoIosSearch className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, sign in</span>
          <span className="header__optionLineTwo">Account & Lists</span>
          <span className="header__optionLineThree">prime</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
          <span className="header__optionLineThree">prime</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
          <span className="header__optionLineThree">prime</span>
        </div>
        <div className="header__optionBasket">
          <BiCartAdd />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
