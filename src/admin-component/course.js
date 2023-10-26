import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(true);

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

  const sub = () => {
    setIsShown(false);
    setIsShown1(false);
    setIsShown2(true);
  };

  return (
    <div className="register-mainad">
      <ul className="reg-navbarad">
        <li onClick={cl}>
          <NavLink to="">Add/Update</NavLink>
        </li>
        <li onClick={cl1}>
          <NavLink to="">Delete</NavLink>
        </li>
      </ul>
      {isShown2 && (
        <div className="adminstudent">
          <table>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Course No.</th>
                <th>Students Enrolled</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CSE</td>
                <td>CS101</td>
                <td>2,340</td>
              </tr>
              <tr>
                <td>CSE-AI</td>
                <td>CS103</td>
                <td>150</td>
              </tr>
              <tr>
                <td>BBA</td>
                <td>BA11</td>
                <td>890</td>
              </tr>
              <tr>
                <td>Bcom</td>
                <td>bm20</td>
                <td>1240</td>
              </tr>
              <tr>
                <td>LLB</td>
                <td>lb10</td>
                <td>300</td>
              </tr>
              <tr>
                <td>Merchant Navy</td>
                <td>nvy12</td>
                <td>220</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {isShown && (
        <div className="hostelroomad">
          <div className="hostelheadad">
            <h2>PRPR University Rajpura, Punjab</h2>
            <h3>Add / Update Course Form</h3>
            <p>(Before filling the form, please read the prospectus)</p>
          </div>
          <div className="hostelformad">
            <div className="hfinner">
              <p>Course Name</p>
              <p>Course Code</p>
              <p>Course No.</p>
              <p>Students Enrolled</p>
              <p>Faculty Enrolled</p>
              <p>For Branch</p>
            </div>

            <div className="hfinner1">
              <p> : </p>
              <p> : </p>
              <p> : </p>
              <p> : </p>
              <p> : </p>
              <p> : </p>
            </div>

            <div className="hfinner2">
              <div>
                <input type="text" placeholder="Computer Animation" />
              </div>
              <div>
                <input type="text" placeholder="CSE134A" />
              </div>
              <div>
                <input type="number" placeholder="11" />
              </div>
              <div>
                <input type="number" placeholder="200" />
              </div>
              <div>
                <input type="number" placeholder="17" />
              </div>
              <div>
                <input type="text" placeholder="BE/Cse" />
              </div>
            </div>

            <div className="hfinner">
              <p>Duration</p>
              <p>Total Fee</p>
              <p>Block Assigned</p>
              <p>Floor No.</p>
              {/* <p>Permanent Address</p>
              <p>Correspondence Address</p> */}
            </div>

            <div className="hfinner1">
              <p> : </p>
              <p> : </p>
              <p> : </p>
              <p> : </p>
              {/* <p> : </p>
              <p> : </p> */}
            </div>

            <div className="hfinner2">
              <div>
                <input type="text" placeholder="2 years" />
              </div>
              <div>
                <input type="number" placeholder="8,00,000" />
              </div>
              <div>
                <input type="text" placeholder="Beta" />
              </div>
              <div>
                <input type="number" placeholder="3" />
              </div>
              {/* <div>
                <input type="text" placeholder="#123 sector 12, Chandigarh" />
              </div> */}
              {/* <div>
                <input type="text" placeholder="#34 sector 21, Rajpura" />
              </div> */}
            </div>
          </div>
          <button onClick={sub} type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      )}
      {isShown1 && (
        <div className="hostelroomad">
          <div className="hostelheadad">
            <h2>PRPR University Rajpura, Punjab</h2>
            <h3>Delete Course</h3>
            <p>
              (Please fill the form carefully, the information provided should
              be correct)
            </p>
          </div>
          <div className="hostelformad">
            <div className="hfinner">
              <p>Course Name</p>
              <p>Course Code</p>
              <p>Course No.</p>
              {/* <p>Students Enrolled</p>
              <p>Faculty Enrolled</p> */}
              <p>For Branch</p>
            </div>

            <div className="hfinner1">
              <p> : </p>
              <p> : </p>
              <p> : </p>
              <p> : </p>
              {/* <p> : </p>
              <p> : </p> */}
            </div>

            <div className="hfinner2">
              <div>
                <input type="text" placeholder="Computer Animation" />
              </div>
              <div>
                <input type="text" placeholder="CSE134A" />
              </div>
              <div>
                <input type="number" placeholder="11" />
              </div>
              {/* <div>
                <input type="number" placeholder="200" />
              </div> */}
              {/* <div>
                <input type="number" placeholder="17" />
              </div> */}
              <div>
                <input type="text" placeholder="BE/Cse" />
              </div>
            </div>

            <div className="hfinner">
              <p>Duration</p>
              <p>Total Fee</p>
              <p>Block Assigned</p>
              <p>Floor No.</p>
              {/* <p>Permanent Address</p>
              <p>Correspondence Address</p> */}
            </div>

            <div className="hfinner1">
              <p> : </p>
              <p> : </p>
              <p> : </p>
              <p> : </p>
              {/* <p> : </p>
              <p> : </p> */}
            </div>

            <div className="hfinner2">
              <div>
                <input type="text" placeholder="2 years" />
              </div>
              <div>
                <input type="number" placeholder="8,00,000" />
              </div>
              <div>
                <input type="text" placeholder="Beta" />
              </div>
              <div>
                <input type="number" placeholder="3" />
              </div>
              {/* <div>
                <input type="text" placeholder="#123 sector 12, Chandigarh" />
              </div> */}
              {/* <div>
                <input type="text" placeholder="#34 sector 21, Rajpura" />
              </div> */}
            </div>
          </div>
          <button onClick={sub} type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Course;
