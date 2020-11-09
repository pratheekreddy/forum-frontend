import React from "react";
// import loading from '../fonts/loading.gif'
import "./loading.css";
const Loading = () => {
  return (
    <div className="loader">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

export default Loading;
