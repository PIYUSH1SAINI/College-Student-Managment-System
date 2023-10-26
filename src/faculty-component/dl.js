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
          <NavLink to="/dl">Marks</NavLink>
        </li>
        <li onClick={cl1}>
          <NavLink to="/dl">Duty/Medical-Leave</NavLink>
        </li>
        <li onClick={cl2}>
          <NavLink to="/dl">Gate-Pass</NavLink>
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
                    Marks
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
                  <td>95</td>
                  <td>92</td>
                  <td>91</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95</td>
                  <td>92</td>
                  <td>91</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95</td>
                  <td>92</td>
                  <td>91</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95</td>
                  <td>92</td>
                  <td>91</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95</td>
                  <td>92</td>
                  <td>91</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95</td>
                  <td>92</td>
                  <td>91</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95</td>
                  <td>92</td>
                  <td>91</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95</td>
                  <td>92</td>
                  <td>91</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95</td>
                  <td>92</td>
                  <td>91</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95</td>
                  <td>92</td>
                  <td>91</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>2110991112</td>
                  <td>John Doe</td>
                  <td>95</td>
                  <td>92</td>
                  <td>91</td>
                  <td>85</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      {isShown1 && (
        <div className="hostelroomfac">
          <div className="hostelhead">
            <h2>PRPR University Rajpura, Punjab</h2>
            <h3>Approve Duty/Medical Leave</h3>
            {/* <p>
              (Please fill the form carefully, the information provided should
              be correct)
            </p> */}
          </div>
          <div className="hostelformfac">
            <table>
              <tr>
                <th>S.No.</th>
                <th>Student Name</th>
                <th>Roll No.</th>
                <th>Phone No.</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Arpit</td>
                <td>2110992013</td>
                <td>1234567890</td>
                <td>Medical Problem</td>
                <td className="pending" style={{ color: "black" }}>
                  Pending
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sahil Kumar</td>
                <td>2110991432</td>
                <td>1234567890</td>
                <td>Family issue</td>
                <td className="approve">Approved</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sainirmit</td>
                <td>2110991231</td>
                <td>1234567890</td>
                <td>Injury</td>
                <td className="approve">Approved</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Nikhil</td>
                <td>2110994132</td>
                <td>1234567890</td>
                <td>Medical Problem</td>
                <td className="approve">Approved</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Rajit</td>
                <td>2110991129</td>
                <td>1234567890</td>
                <td>College team Practice</td>
                <td className="pending" style={{ color: "black" }}>
                  Pending
                </td>
              </tr>
            </table>
          </div>
        </div>
      )}

      {isShown2 && (
        <div className="hostelroomfac">
          <div className="hostelhead">
            <h2>PRPR University Rajpura, Punjab</h2>
            <h3>Approve Gate Pass</h3>
            {/* <p>
              (Please fill the form carefully, the information provided should
              be correct)
            </p> */}
          </div>
          <div className="hostelformfac">
            <table>
              <tr>
                <th>S.No.</th>
                <th>Student Name</th>
                <th>Roll No.</th>
                <th>Phone No.</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Arpit</td>
                <td>2110992013</td>
                <td>1234567890</td>
                <td className="pending" style={{ color: "black" }}>
                  Pending
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sahil Kumar</td>
                <td>2110991432</td>
                <td>1234567890</td>
                <td className="approve">Approved</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sainirmit</td>
                <td>2110991231</td>
                <td>1234567890</td>
                <td className="denied">Denied</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Nikhil</td>
                <td>2110994132</td>
                <td>1234567890</td>
                <td className="approve">Approved</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Rajit</td>
                <td>2110991129</td>
                <td>1234567890</td>
                <td className="pending" style={{ color: "black" }}>
                  Pending
                </td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dl;
