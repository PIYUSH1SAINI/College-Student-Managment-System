import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Notice = () => {
  const [isShown, setIsShown] = useState(true);

  function cl() {
    setIsShown(true);
  }

  return (
    <div className="register-mainad">
      <ul className="reg-navbarad">
        <li onClick={cl}>
          <NavLink to="">New Notice</NavLink>
        </li>
      </ul>
      {isShown && (
        <div className="hostelroomad">
          <div className="hostelheadad">
            <h2>PRPR University Rajpura, Punjab</h2>
            <h3> Post New Notice</h3>
            {/* <p>(Before filling the form, please read the prospectus)</p> */}
          </div>
          <div className="hostelformad">
            <div className="hfinner">
              <p>Notice Name</p>
              <p>Notice No.</p>
              <p>Date</p>
              <p>Time</p>
              <p>From </p>
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
                <input type="number" placeholder="122" />
              </div>
              <div>
                <input type="text" placeholder="8 Oct 2023" />
              </div>
              <div>
                <input type="text" placeholder="9:00am" />
              </div>
              <div>
                <input type="text" placeholder="Admission department" />
              </div>
              <div>
                <input type="text" placeholder="BE/Cse" />
              </div>
            </div>

            <div className="fee-type">
              <h3 for="fee" className="feehead">
                Notice Body
              </h3>
              <div>
                <textarea
                  className="options"
                  placeholder="Write notice body here..."
                ></textarea>
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

export default Notice;
