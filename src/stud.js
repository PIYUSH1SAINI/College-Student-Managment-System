import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Student from "./components/student";
import Topnav from "./components/topnav";
import Register from "./components/register";
import Attendance from "./components/Attendance";
import RohitUploadDocument from "./components/RohitUploadDocument";
import Medical from "./components/medical";
import Payfee from "./components/payfee";

// import Admin from "./admin.js";
// import Faculty from "./faculty";
// import Medical from "./components/medical";

// import PApp from "./PApp";

// import Login from "./login";

const Stud = () => {
  return (
    <div className="studbody">
      <BrowserRouter>
        <Navbar />
        <Topnav />
        <>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/student" element={<Student />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/attendance" element={<Attendance />} />
            <Route exact path="/upload" element={<RohitUploadDocument />} />
            <Route exact path="/medical" element={<Medical />} />
            <Route exact path="/payfee" element={<Payfee />} />
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
};

export default Stud;
