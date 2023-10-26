import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-main">
      <div>
        <div className="firstli">
          <NavLink to="/">
            <div className="dash-inner">
              <img
                src={require(".././admin-image/dashboard.png")}
                alt="home"
                height="25rem"
              />
              <h3>Dashboard</h3>
            </div>
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/student">
              <img
                src={require(".././admin-image/Student.png")}
                alt="home"
                height="30rem"
              />
              <h3>Students</h3>
            </NavLink>
          </li>

          <li>
            <NavLink to="/faculty">
              <img
                src={require(".././admin-image/faculty.png")}
                alt="home"
                height="30rem"
              />
              <h3>Faculty</h3>
            </NavLink>
          </li>

          <li>
            <NavLink to="/course">
              <img
                src={require(".././admin-image/course.png")}
                alt="home"
                height="25rem"
                width="30rem"
              />
              <h3>Course</h3>
            </NavLink>
          </li>

          <li>
            <NavLink to="/notice">
              <img
                src={require(".././admin-image/notice.png")}
                alt="home"
                height="30rem"
              />
              <h3>Notice</h3>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="signout">
        <a href="">
          <img
            src={require(".././images/signout.png")}
            alt="home"
            height="30rem"
          />
          <h3>Logout</h3>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
