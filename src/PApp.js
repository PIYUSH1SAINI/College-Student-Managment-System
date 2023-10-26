import "./components/stylePrince.css";
import React, { useState, useEffect } from "react";
import Attendance from "./components/Attendance";
// import Timetable from "./components/Timetable";
// import AttendanceRegister from "./components/AttendanceRegister";
// import AttendanceTable from "./components/AttendanceTable";
// import RohitUploadDocument from "./components/RohitUploadDocument";
function PApp() {
  return (
    <div className="PApp">
      {/* <AttendanceTable /> */}
      {/* <AttendanceRegister /> */}
      <Attendance />
      {/* <RohitUploadDocument /> */}
      {/* <Timetable /> */}
    </div>
  );
}

export default PApp;
