import React from "react";
import "./admin.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./admin-component/navbar";
import Dashboard from "./admin-component/dashboard";
import Faculty from "./admin-component/faculty";
import Course from "./admin-component/course";
import Notice from "./admin-component/notice";
import Student from "./admin-component/student";

const Admin = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/student" element={<Student />} />
            <Route exact path="/faculty" element={<Faculty />} />
            <Route exact path="/course" element={<Course />} />
            <Route exact path="/notice" element={<Notice />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
};

export default Admin;
