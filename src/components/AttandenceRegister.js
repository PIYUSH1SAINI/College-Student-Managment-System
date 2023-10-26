import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import AttendanceTable from "./AttendanceTable";

const Register = () => {
  const [isShown, setIsShown] = useState(true);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  function cl() {
    setIsShown(true);
    setIsShown1(false);
    setIsShown2(false);
  }

  function cl1() {
    setIsShown(false);
    setIsShown1(true);
    setIsShown2(false);
  }

  function cl2() {
    setIsShown(false);
    setIsShown1(false);
    setIsShown2(true);
  }

  return (
    <div className="register-main">
      <ul className="reg-navbar">
        <li onClick={cl}>
          <a>NALR</a>
        </li>
        <li onClick={cl1}>
          <a>VES</a>
        </li>
        <li onClick={cl2}>
          <a>PA</a>
        </li>
      </ul>
      {isShown && (
        <div className="hostelroom">
          <AttendanceTable />
        </div>
      )}
      {isShown1 && (
        <div className="hostelroom">
          <AttendanceTable />
        </div>
      )}

      {isShown2 && (
        <div className="hostelroom">
          <AttendanceTable />
        </div>
      )}
    </div>
  );
};

export default Register;
