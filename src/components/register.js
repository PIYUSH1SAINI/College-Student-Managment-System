import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink to="">Hostel-Room</NavLink>
        </li>
        <li onClick={cl1}>
          <NavLink to="">Reappear-From</NavLink>
        </li>
        <li onClick={cl2}>
          <NavLink to="">Sports-Fee</NavLink>
        </li>
      </ul>
      {isShown && (
        <div className="hostelroom">
          <div className="hostelhead">
            <h2>PRPR University Rajpura, Punjab</h2>
            <h3>Hostel Admission Form</h3>
            <p>(Before filling the form, please read the prospectus)</p>
          </div>
          <div className="hostelform">
            <div className="hfinner">
              <p>Name</p>
              <p>Blood Group</p>
              <p>Phone No.</p>
              <p>Roll No.</p>
              <p>Group</p>
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
                <input type="text" placeholder="G3" />
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
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      )}
      {isShown1 && (
        <div className="hostelroom">
          <div className="hostelhead">
            <h2>PRPR University Rajpura, Punjab</h2>
            <h3>Registration Form for Re-appear</h3>
            <p>
              (Please fill the form carefully, the information provided should
              be correct)
            </p>
          </div>
          <div className="hostelform">
            <div className="hfinner">
              <p>Name</p>
              <p>Date of registration</p>
              <p>Phone No.</p>
              <p>Roll No.</p>
              <p>Group</p>
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
                <input type="text" placeholder="G3" />
              </div>
              <div>
                <input type="text" placeholder="BE/Cse" />
              </div>
            </div>

            <div className="hfinner">
              <p>Subject Name</p>
              <p>Subject Code</p>
              <p>Subject Teacher</p>
              <p>Marks</p>
              <p>Reason</p>
              <p>FA/ST/ETE</p>
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
                <input type="text" placeholder="Java" />
              </div>
              <div>
                <input type="text" placeholder="CSJ102" />
              </div>
              <div>
                <input type="text" placeholder="Aman" />
              </div>
              <div>
                <input type="number" placeholder="0" />
              </div>
              <div>
                <input type="text" placeholder="unable to give test" />
              </div>
              <div>
                <input type="text" placeholder="ETE" />
              </div>
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      )}

      {isShown2 && (
        <div className="hostelroom">
          <div className="hostelhead">
            <h2>PRPR University Rajpura, Punjab</h2>
            <h3>Sports Activity Registration Fees</h3>
            {/* <p>
              (Please fill the form carefully, the information provided should
              be correct)
            </p> */}
          </div>
          <div className="hostelform">
            <div className="hfinner">
              <p>Name</p>
              <p>Email</p>
              <p>Phone No.</p>
              <p>Roll No.</p>
              <p>Group</p>
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
                <input type="text" placeholder="abc@gmail.com" />
              </div>
              <div>
                <input type="number" placeholder="+91-1234567890" />
              </div>
              <div>
                <input type="number" placeholder="211099xxxx" />
              </div>
              <div>
                <input type="text" placeholder="G3" />
              </div>
              <div>
                <input type="text" placeholder="BE/Cse" />
              </div>
            </div>

            <div className="fee-type">
              <h3 for="fee" className="feehead">
                Choose Fee Type
              </h3>
              <div>
                <select name="fee" className="options">
                  <option value="pool">Pool Fee</option>
                  <option value="badminton">Badminton Fee</option>
                  <option value="table-tennis">Table Tennis Fee</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Register;
