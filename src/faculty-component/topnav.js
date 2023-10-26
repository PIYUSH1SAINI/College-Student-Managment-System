import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Topnav = () => {
  const [searchValue, setSearchValue] = useState("");

  function check() {
    if (
      searchValue === "attandence" ||
      searchValue === "faculty" ||
      searchValue === "dl" ||
      searchValue === "upload" ||
      searchValue === "salary"
    ) {
    } else {
      alert("Invalid Search Input");
    }
  }

  return (
    <div className="topnavfac">
      <h1 className="navleft">
        <strong>PRPRS UNIVERSITY</strong>
      </h1>
      <div className="navrightfac">
        <img
          className="bell"
          src={require(".././images/notification.png")}
          alt="userimage"
          height="35rem"
        />
        <div className="searchfac">
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <NavLink to={searchValue}>
            <button type="submit">
              <i class="fa fa-search"></i>
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
