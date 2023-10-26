import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  // const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  return (
    <div className="navbar-mainfac">
      <div className="navbar-linkfac">
        <NavLink to="/">
          <img
            className="coll"
            src={require(".././images/college-logo.png")}
            alt="college-logo"
            height="110rem"
          />
        </NavLink>
        <ul>
          <li
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <NavLink to="/faculty">
              {!isShown && (
                <img
                  src={require(".././faculty-image/faculty.png")}
                  alt="faculty icon"
                  height="50rem"
                />
              )}
              {isShown && <p>Faculty Info</p>}
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setIsShown1(true)}
            onMouseLeave={() => setIsShown1(false)}
          >
            <NavLink to="/attandence">
              {!isShown1 && (
                <img
                  src={require(".././images/attendence.png")}
                  alt="attandence icon"
                  height="45rem"
                />
              )}
              {isShown1 && <p>Attandence</p>}
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setIsShown2(true)}
            onMouseLeave={() => setIsShown2(false)}
          >
            <NavLink to="">
              {!isShown2 && (
                <img
                  src={require(".././images/pay.png")}
                  alt="fee payment icon"
                  height="45rem"
                />
              )}
              {isShown2 && <p>Salary</p>}
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setIsShown3(true)}
            onMouseLeave={() => setIsShown3(false)}
          >
            <NavLink to="">
              {!isShown3 && (
                <img
                  src={require(".././images/detail.png")}
                  alt="Acamadic details icon"
                  height="45rem"
                />
              )}
              {isShown3 && <p>Acamadic details</p>}
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setIsShown5(true)}
            onMouseLeave={() => setIsShown5(false)}
          >
            <NavLink to="/upload">
              {!isShown5 && (
                <img
                  src={require(".././images/upload-document.png")}
                  alt="student-info icon"
                  height="55rem"
                />
              )}
              {isShown5 && <p>Upload Documents</p>}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
