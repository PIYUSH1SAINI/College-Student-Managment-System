import React from "react";
import Home from "./home";
import Student from "./student";
import Register from "./register";

const Iframe = () => {
  return (
    <div className="rightif">
      <Home />
      <Student />
      <Register />
      {/* <iframe name="frame" width="100%" height="100%" frameBorder="0"></iframe> */}
    </div>
  );
};

export default Iframe;
