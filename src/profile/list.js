import React, { useState } from "react";
// import axios from 'axios';
import { withRouter } from "react-router-dom";

import "./list.scss";

const List = (props) => {
  const [display, setDisplay] = useState(false);
  let type = localStorage.getItem("type");

  let signout = () => {
    localStorage.clear();
    // console.log(props)
    props.history.push({ pathname: "/login" });
    setDisplay(false);
  };

  let profile = () => {
    props.history.push({ pathname: "/profile" });
    setDisplay(false);
  };

  let approve = () => {
    props.history.push({ pathname: "/approve" });
    setDisplay(false);
  };

  let postAgenda = () => {
    props.history.push({ pathname: "/postagenda" });
    setDisplay(false);
  };

  let home = () => {
    props.history.push({ pathname: "/" });
    setDisplay(false);
  };

  let feedback = () => {
    props.history.push({ pathname: "/feedback" });
    setDisplay(false);
  }

  let about=()=>{
    props.history.push({pathname:'/about'})
    setDisplay(false);
  }

  let admin = (
    <div>
      <li onClick={approve}>Approve users</li>
      <li onClick={postAgenda}>Post Agenda</li>
    </div>
  );

  let list = (
    <div className="dropdown-content">
      <li onClick={home}>Home</li>
      <li onClick={profile}>Your Profile</li>
      {type === "A" ? admin : null}
      <li onClick={feedback}>Feedback</li>
      <li onClick={about}>About</li>
      <li onClick={signout}>Sign out</li>
    </div>
  );

  let toggle = () => {
    setDisplay(!display);
  };
  return (
    <div className="dropdown" onBlur={() => setDisplay(false)} tabIndex="-1">
      {/* <i className="boschicon-bosch-ic-refresh"></i> */}
      <i className="boschicon-bosch-ic-user" onClick={toggle}></i>
      {display ? list : null}
    </div>
  );
};

export default withRouter(List);
