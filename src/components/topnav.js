import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Att from "./Attendance";

const Topnav = () => {
  const [searchValue, setSearchValue] = useState("");

  function check() {
    if (
      searchValue === "attendance" ||
      searchValue === "register" ||
      searchValue === "medical" ||
      searchValue === "upload" ||
      searchValue === "payfee" ||
      searchValue === "student"
    ) {
    } else {
      alert("Invalid Search Input");
    }
  }

  return (
    <div className="topnav">
      <h1 className="navleft">
        <strong>PRPRS UNIVERSITY</strong>
      </h1>
      <div className="navright">
        <img
          className="bell"
          src={require(".././images/notification.png")}
          alt="userimage"
          height="35rem"
        />
        <div className="search">
          <input
            className="searchitem"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <NavLink to={searchValue}>
            <button type="submit" onClick={check}>
              <i className="fa fa-search"></i>
            </button>
          </NavLink>
        </div>
        <a href="">
          <img
            className="logout"
            src={require(".././images/signout.png")}
            alt="userimage"
            height="30rem"
          />
        </a>
      </div>
    </div>
  );
};

export default Topnav;
