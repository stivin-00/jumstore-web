import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBoxs(props) {
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <div className="head-search">
      <form className="header-form" onSubmit={submitHandler}>
        <input
          type="text"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
          className="header-input"
          placeholder="Search... products here"
        ></input>
        <button className="header-button" type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}
