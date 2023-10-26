// import React from "react";
import React, { useState, useEffect } from "react";
function Studentinfo(props) {
  return (
    <div>
      <tr>
        <td>{props.name}</td>
        <td>{props.roll}</td>
        <td>{props.group}</td>
        <td>{props.attendance}</td>
        <td>{props.attendancepercentage}</td>
      </tr>
    </div>
  );
}
export default Studentinfo;
