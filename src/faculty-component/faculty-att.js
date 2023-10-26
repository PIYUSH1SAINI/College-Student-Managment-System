import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Dl = () => {
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
    <div className="register-mainfac">
      <ul className="reg-navbarfac">
        <li onClick={cl}>
          <NavLink to="">Attendance</NavLink>
        </li>
      </ul>
      {isShown && (
        <div className="hostelroomfac">
          <div className="hostelformfac">
            <table>
              <thead>
                <tr>
                  <th rowSpan="2">Roll No.</th>
                  <th rowSpan="2">Name</th>
                  <th rowSpan="1" colSpan="4">
                    Students Attandence
                  </th>
                </tr>
                <tr>
                  <th>PA</th>
                  <th>FEE</th>
                  <th>VES</th>
                  <th>NALR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95%</td>
                  <td>92%</td>
                  <td>91%</td>
                  <td>85%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>Ram Sharma</td>
                  <td style={{ backgroundColor: "orange" }}>69%</td>
                  <td>71%</td>
                  <td>88%</td>
                  <td style={{ backgroundColor: "red" }}>24%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95%</td>
                  <td>92%</td>
                  <td>91%</td>
                  <td>85%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>Ram Sharma</td>
                  <td style={{ backgroundColor: "orange" }}>69%</td>
                  <td>71%</td>
                  <td>88%</td>
                  <td style={{ backgroundColor: "red" }}>24%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95%</td>
                  <td>92%</td>
                  <td>91%</td>
                  <td>85%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>Ram Sharma</td>
                  <td style={{ backgroundColor: "orange" }}>69%</td>
                  <td>71%</td>
                  <td>88%</td>
                  <td style={{ backgroundColor: "red" }}>24%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95%</td>
                  <td>92%</td>
                  <td>91%</td>
                  <td>85%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>Ram Sharma</td>
                  <td style={{ backgroundColor: "orange" }}>69%</td>
                  <td>71%</td>
                  <td>88%</td>
                  <td style={{ backgroundColor: "red" }}>24%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95%</td>
                  <td>92%</td>
                  <td>91%</td>
                  <td>85%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>Ram Sharma</td>
                  <td style={{ backgroundColor: "orange" }}>69%</td>
                  <td>71%</td>
                  <td>88%</td>
                  <td style={{ backgroundColor: "red" }}>24%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95%</td>
                  <td>92%</td>
                  <td>91%</td>
                  <td>85%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>Ram Sharma</td>
                  <td style={{ backgroundColor: "orange" }}>69%</td>
                  <td>71%</td>
                  <td>88%</td>
                  <td style={{ backgroundColor: "red" }}>24%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95%</td>
                  <td>92%</td>
                  <td>91%</td>
                  <td>85%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>Ram Sharma</td>
                  <td style={{ backgroundColor: "orange" }}>69%</td>
                  <td>71%</td>
                  <td>88%</td>
                  <td style={{ backgroundColor: "red" }}>24%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95%</td>
                  <td>92%</td>
                  <td>91%</td>
                  <td>85%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>Ram Sharma</td>
                  <td style={{ backgroundColor: "orange" }}>69%</td>
                  <td>71%</td>
                  <td>88%</td>
                  <td style={{ backgroundColor: "red" }}>24%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95%</td>
                  <td>92%</td>
                  <td>91%</td>
                  <td>85%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>Ram Sharma</td>
                  <td style={{ backgroundColor: "orange" }}>69%</td>
                  <td>71%</td>
                  <td>88%</td>
                  <td style={{ backgroundColor: "red" }}>24%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95%</td>
                  <td>92%</td>
                  <td>91%</td>
                  <td>85%</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>Ram Sharma</td>
                  <td style={{ backgroundColor: "orange" }}>69%</td>
                  <td>71%</td>
                  <td>88%</td>
                  <td style={{ backgroundColor: "red" }}>24%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dl;
