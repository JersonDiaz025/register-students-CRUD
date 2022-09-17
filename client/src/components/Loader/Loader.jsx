import React from "react";
import "./index.css";
const Loader = () => {
  return (
    <div className="modal">
      <div className="container_modal backdrop-blur-xl bg-white/30">
        <div className="loader"></div>
        <h1 className="text">Loading...</h1>
      </div>
    </div>
  );
};
export default Loader;
