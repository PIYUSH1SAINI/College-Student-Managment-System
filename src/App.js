import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stud from "./stud";
import Faculty from "./faculty";
import Admin from "./admin";

import "./login.css";

const App = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(true);

  function Select() {
    const email = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    const usertype = document.querySelector(".userselect").value;

    if (
      email === "student@gmail.com" &&
      pass === "s123" &&
      usertype === "student"
    ) {
      setIsShown(true);
      setIsShown1(false);
      setIsShown2(false);
      setIsShown3(false);
    } else if (
      email === "teacher@gmail.com" &&
      pass === "t123" &&
      usertype === "teacher"
    ) {
      setIsShown(false);
      setIsShown1(true);
      setIsShown2(false);
      setIsShown3(false);
    } else if (
      email === "admin@gmail.com" &&
      pass === "a123" &&
      usertype === "admin"
    ) {
      setIsShown(false);
      setIsShown1(false);
      setIsShown2(true);
      setIsShown3(false);
    } else {
      window.location.href = "";
      alert("you have entered the wrong ID or password");
    }
  }

  return (
    <>
      {isShown3 && (
        <div className="preview p1" data-target="p-1">
          <div className="preview-box">
            <div className="im">
              <img
                src={require("./images/login-icon.png")}
                alt="admin"
                height="400rem"
              />
            </div>
            <div className="content">
              <table>
                <tr>
                  <th>USERNAME : </th>
                  <td></td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <input type="text" id="user" placeholder="username" />
                  </td>
                </tr>

                <tr>
                  <th>PASSWORD : </th>
                  <td></td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <input type="password" id="pass" placeholder="password" />
                  </td>
                </tr>

                <tr>
                  <th>SELECT USER</th>
                  <td></td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <select className="userselect">
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <th>INSTITUTE</th>
                  <th>SESSION</th>
                </tr>

                <tr>
                  <td id="l2">
                    <select>
                      <option value="CSE">CSE</option>
                      <option value="Hotel management">Hotel management</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="CSE - AI">CSE - AI</option>
                    </select>
                  </td>
                  <td id="l3">
                    <select>
                      <option value="2020-2021">2020-2021</option>
                      <option value="2021-2022">2021-2022</option>
                      <option value="2022-2023">2022-2023</option>
                      <option value="2023-2024">2023-2024</option>
                    </select>
                  </td>
                </tr>

                <tr rowSpan="2">
                  <td colSpan="2" id="l1">
                    <button id="login" onClick={Select}>
                      LOGIN
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>Forget password</td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
      {isShown && <Stud />}
      {isShown1 && <Faculty />}
      {isShown2 && <Admin />}
    </>
  );
};

export default App;
