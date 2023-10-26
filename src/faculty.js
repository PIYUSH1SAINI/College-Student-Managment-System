import React from "react";
import "./faculty.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./faculty-component/navbar";
import Topnav from "./faculty-component/topnav";
import Home from "./faculty-component/homefac";
import Dl from "./faculty-component/dl";
import Facultyinfo from "./faculty-component/faculty-info";
import Att from "./faculty-component/faculty-att";
import Upload from "./faculty-component/upload";

const Faculty = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Topnav />

        <>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/faculty" element={<Facultyinfo />} />
            <Route exact path="/dl" element={<Dl />} />
            <Route exact path="/attandence" element={<Att />} />
            <Route exact path="/upload" element={<Upload />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
};

export default Faculty;
