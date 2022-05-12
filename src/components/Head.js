import React from "react";
import { categoriesList } from "../utils/MockData";
import logo from "../utils/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

const Head = () => {
  return (
    <div className="head">
      <div className="head-header">
        <div className="header-left">
          <FaBars style={{ marginBottom: "5px", marginRight: "12px" }} />
          <img src={logo} alt="hi" style={{ height: "auto", width: "60px" }} />
        </div>
        <div className="header-right">
          <GoPerson style={{marginRight: "12px" }} />
          <FaShoppingCart style={{marginRight: "12px" }} />
        </div>
      </div>
      <div className="head-search">
        <form type="submit" className="header-form">
          <input
            type="text"
            className="header-input"
            placeholder="Search... products here"
          ></input>
          <button className="header-button">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="head-category">
        {categoriesList.map((item, index) => (
          <div key={index} className="header-cat-item">
            <img
              src={item.image}
              alt=""
              className="header-cat-img"
              style={{ height: "20px", width: "20px" }}
            />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Head;
