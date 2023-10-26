import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Faculty = () => {
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
                <th>Name</th>
                <th>Phone No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>1234567890</td>
              </tr>
              <tr>
                <td>liza beth</td>
                <td>5634567120</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>1234567890</td>
              </tr>
              <tr>
                <td>liza beth</td>
                <td>5634567120</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>1234567890</td>
              </tr>
              <tr>
                <td>liza beth</td>
                <td>5634567120</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>1234567890</td>
              </tr>
              <tr>
                <td>liza beth</td>
                <td>5634567120</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {isShown && (
        <div className="hostelroomad">
          <div className="hostelheadad">
            <h2>PRPR University Rajpura, Punjab</h2>
            <h3>Add / Update Faculty Form</h3>
            <p>(Before filling the form, please read the prospectus)</p>
          </div>
          <div className="hostelformad">
            <div className="hfinner">
              <p>Name</p>
              <p>Blood Group</p>
              <p>Phone No.</p>
              <p>Roll No.</p>
              <p>Salary</p>
              <p>Course/Branch</p>
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
                <input type="text" placeholder="Allen hitler" />
              </div>
              <div>
                <input type="text" placeholder="A+" />
              </div>
              <div>
                <input type="number" placeholder="+91-1234567890" />
              </div>
              <div>
                <input type="number" placeholder="211099xxxx" />
              </div>
              <div>
                <input type="number" placeholder="10,00,000" />
              </div>
              <div>
                <input type="text" placeholder="BE/Cse" />
              </div>
            </div>

            <div className="hfinner">
              <p>Father's Name</p>
              <p>Father's Phone No.</p>
              <p>Occupation</p>
              <p>Annual Income</p>
              <p>Permanent Address</p>
              <p>Correspondence Address</p>
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
                <input type="text" placeholder="Cole hitler" />
              </div>
              <div>
                <input type="number" placeholder="+91-9087654321" />
              </div>
              <div>
                <input type="text" placeholder="Businessman" />
              </div>
              <div>
                <input type="number" placeholder="x,xx,xxx" />
              </div>
              <div>
                <input type="text" placeholder="#123 sector 12, Chandigarh" />
              </div>
              <div>
                <input type="text" placeholder="#34 sector 21, Rajpura" />
              </div>
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
            <h3>Delete Faculty</h3>
            <p>
              (Please fill the form carefully, the information provided should
              be correct)
            </p>
          </div>
          <div className="hostelformad">
            <div className="hfinner">
              <p>Name</p>
              <p>Date of registration</p>
              <p>Phone No.</p>
              <p>Roll No.</p>
              <p>Salary</p>
              <p>Course/Branch</p>
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
                <input type="text" placeholder="Allen hitler" />
              </div>
              <div>
                <input type="text" placeholder="2 oct 2023" />
              </div>
              <div>
                <input type="number" placeholder="+91-1234567890" />
              </div>
              <div>
                <input type="number" placeholder="211099xxxx" />
              </div>
              <div>
                <input type="number" placeholder="10,00,000" />
              </div>
              <div>
                <input type="text" placeholder="BE/Cse" />
              </div>
            </div>

            <div className="hfinner">
              <p>Father's Name</p>
              <p>Father's Phone No.</p>
              {/* <p>Mentor's Name</p> */}
              {/* <p>Marks</p> */}
              <p>Reason</p>
              {/* <p>FA/ST/ETE</p> */}
            </div>

            <div className="hfinner1">
              <p> : </p>
              <p> : </p>
              <p> : </p>
              {/* <p> : </p> */}
              {/* <p> : </p> */}
              {/* <p> : </p> */}
            </div>

            <div className="hfinner2">
              <div>
                <input type="text" placeholder="Cole hitler" />
              </div>
              <div>
                <input type="number" placeholder="+91-9087654321" />
              </div>
              {/* <div>
                <input type="text" placeholder="Shilpa" />
              </div> */}
              {/* <div>
                <input type="number" placeholder="0" />
              </div> */}
              <div>
                <input type="text" placeholder="Left" />
              </div>
              {/* <div>
                <input type="text" placeholder="ETE" />
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

export default Faculty;
