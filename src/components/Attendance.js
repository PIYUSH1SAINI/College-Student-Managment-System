import "./stylePrince.css";
import Display from "./Display.js";
import React, { useState, useEffect } from "react";

import Adisplay from "./Adisplay";
function Attendance() {
  return (
    <div className="wrapper">
      <h1 className="h1"> ATTENDANCE</h1>
      <div className="attendance-circle">
        <Display name="PA" percentage="65" class="orange" />
        <Display name="FEE" percentage="45" class="red" />
        <Display name="NALR" percentage="78" class="yellow" />
        <Display name="VES" percentage="89" class="green" />
      </div>
      {/* <Adisplay name="PA" percentage="65" />
      <Adisplay name="FEE" percentage="65" />
      <Adisplay name="NALR" percentage="65" />
      <Adisplay name="VES" percentage="65" /> */}
      {/* <Adisplay /> */}
      <div className="tab">
        <table>
          <tr>
            <td>
              <h3>SNO.</h3>
            </td>
            <td>
              <h3>Subject Code</h3>
            </td>
            <td>
              <h3>Subject Name</h3>
            </td>
            <td>
              <h3>Teacher</h3>
            </td>
            <td>
              <h3>From</h3>
            </td>
            <td>
              <h3>To</h3>
            </td>
            <td>
              <h3>Attended</h3>
            </td>
            <td>
              <h3>Delivered</h3>
            </td>
            <td>
              <h3>percentage</h3>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>CS179</td>
            <td>Programming Abstraction</td>
            <td>Bhavna</td>
            <td>31-jul-23</td>
            <td>25-sep-23</td>
            <td>43</td>
            <td>63</td>
            <td>65%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>CS186</td>
            <td>Front-end Engineering</td>
            <td>Pratibha</td>
            <td>31-jul-23</td>
            <td>25-sep-23</td>
            <td>43</td>
            <td>63</td>
            <td>65%</td>
          </tr>
          <tr>
            <td>3</td>
            <td>GE101</td>
            <td>Numerical Ability</td>
            <td>Shilpi</td>
            <td>31-jul-23</td>
            <td>25-sep-23</td>
            <td>43</td>
            <td>63</td>
            <td>65%</td>
          </tr>
          <tr>
            <td>4</td>
            <td>PD080</td>
            <td>Vital Employility Skills</td>
            <td>Pratibha</td>
            <td>31-jul-23</td>
            <td>25-sep-23</td>
            <td>43</td>
            <td>63</td>
            <td>65%</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
