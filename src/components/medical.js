import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Medical = () => {
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
          <NavLink to="">Marks</NavLink>
        </li>
        <li onClick={cl1}>
          <NavLink to="">Duty/Medical-Leave</NavLink>
        </li>
        <li onClick={cl2}>
          <NavLink to="">Gate-Pass</NavLink>
        </li>
      </ul>
      {isShown && (
        <div className="hostelroom">
          <div className="markstable">
            <table>
              <thead>
                <tr>
                  <th>Exam Type</th>
                  <th>PA</th>
                  <th>FEE</th>
                  <th>VES</th>
                  <th>NALR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fa-1</td>
                  <td>95</td>
                  <td>91</td>
                  <td>83</td>
                  <td>98</td>
                </tr>
                <tr>
                  <td>Fa-2</td>
                  <td>95</td>
                  <td>91</td>
                  <td>83</td>
                  <td>98</td>
                </tr>
                <tr>
                  <td>Sa-1</td>
                  <td>95</td>
                  <td>91</td>
                  <td>83</td>
                  <td>98</td>
                </tr>
                <tr>
                  <td>Fa-3</td>
                  <td>95</td>
                  <td>91</td>
                  <td>83</td>
                  <td>98</td>
                </tr>
                <tr>
                  <td>Internal Assesment</td>
                  <td>25</td>
                  <td>30</td>
                  <td>28</td>
                  <td>29</td>
                </tr>
                <tr>
                  <td>Fa-4</td>
                  <td>95</td>
                  <td>91</td>
                  <td>83</td>
                  <td>98</td>
                </tr>
                <tr>
                  <td>Sa-2</td>
                  <td>95</td>
                  <td>91</td>
                  <td>83</td>
                  <td>98</td>
                </tr>
                <tr>
                  <td>End Term</td>
                  <td>95</td>
                  <td>91</td>
                  <td>83</td>
                  <td>98</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      {isShown1 && (
        <div className="hostelroom">
          <div className="hostelhead">
            <h2>PRPR University Rajpura, Punjab</h2>
            <h3>Apply Duty/Medical Leave</h3>
            {/* <p>
              (Please fill the form carefully, the information provided should
              be correct)
            </p> */}
          </div>
          <div className="medical-main">
            <div className="topmed">
              <img
                src={require(".././images/user-photo.png")}
                alt="user"
                height="100rem"
              />
              <div>
                <table>
                  <tr>
                    <th>Student Name</th>
                    <td>:</td>
                    <td>John Doe</td>
                    <td></td>
                    <th>Roll No.</th>
                    <td>:</td>
                    <td>2110991112</td>
                  </tr>
                  <tr>
                    <th>Father's Name</th>
                    <td>:</td>
                    <td>Dave Doe</td>
                    <td></td>
                    <th>Mother's Name</th>
                    <td>:</td>
                    <td>Harpreet Kaur</td>
                  </tr>
                  <tr>
                    <th>Group</th>
                    <td>:</td>
                    <td>G3</td>
                    <td></td>
                    <th>Phone No.</th>
                    <td>:</td>
                    <td>1234567890</td>
                  </tr>
                </table>
              </div>
            </div>
            <hr></hr>
            <form>
              <h3>Apply Leave</h3>
              <div className="leave-type">
                <h4>Leave Type :</h4> {" "}
                <input type="radio" name="leave" value="duty"></input> {" "}
                <label for="html">Duty Leave</label>
                <input type="radio" name="leave" value="medical"></input>
                <label for="html">Medical Leave</label>
              </div>
              <div className="leave-type">
                <h4>Catagory :</h4>

                <select name="catagory" className="cat">
                  <option value="medical">Medical</option>
                  <option value="CEED">CEED DL</option>
                  <option value="bits">Club Bits & Bytes</option>
                  <option value="codingninja">Coding Ninjas CUIET</option>
                  <option value="gfg">Geekforgeek Club</option>
                </select>
              </div>

              <div className="leave-type">
                <h4>Date from :</h4>
                <input type="text" placeholder="8/Oct/2023"></input>
                <h4>Date to :</h4>
                <input type="text" placeholder="15/Oct/2023"></input>
              </div>

              <button className="applymed">Apply</button>
            </form>
          </div>
        </div>
      )}

      {isShown2 && (
        <div className="hostelroom">
          <div className="hostelhead">
            <h2>PRPR University Rajpura, Punjab</h2>
            <h3>Apply Gate Pass</h3>
            {/* <p>
              (Please fill the form carefully, the information provided should
              be correct)
            </p> */}
          </div>
          <div className="medical-main">
            <form>
              <div className="datemed">
                <h4>Date : </h4>
                <p>9 / Oct / 2023</p>
              </div>
              <div className="leave-type">
                <h4>Leave Type :</h4>
                <input type="radio" name="leave" value="full"></input> {" "}
                <label for="html">Full Day</label>
                <input type="radio" name="leave" value="partial"></input>
                <label for="html">Partial Time</label>
              </div>
              <div className="leave-type">
                <h4>Time :</h4>
                <input type="text" placeholder="1 pm"></input>
              </div>

              <div className="leave-type">
                <h4>Leaving Reason :</h4>
                <textarea
                  rows="8"
                  cols="40"
                  placeholder="type reason here..."
                ></textarea>
              </div>

              <button className="applymed2">Apply</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Medical;
