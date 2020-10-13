import React, { useState }  from "react";
import axios from "axios";

import "./feedback.scss";
import Loading from "../loading/loading"

const Feedback =()=> {
  const [loading,setLoading]=useState(false);
  let email = localStorage.getItem("email");
  let token = localStorage.getItem("token");
  let authHeader = "requester=" +email + ";rbei_access_token=" + token;

  let postfeedback = () => {
    let feedback = document.getElementById("comments").value;
    if(feedback.length===0){
      return;
    }
    console.log(feedback)
    axios.defaults.headers.common["Authorization"] = authHeader;
    setLoading(true);
    axios({
      url:
        "https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/feedback/application",
      data: {
        EMAIL: email,
        FEEDBACK: feedback,
      },
      method: "POST",
    }).then((result) => {
        setLoading(false);
        alert('Feedback submitted successfully!');
    }).catch(e=>{
      setLoading(false);
    })
  };
    return (
      <div className="feedback">
        <h1>Please share your valuable feedback</h1>
        <textarea
          id="comments"
          rows="10"
          cols="80"
          placeholder="Please give your valuable suggestions/opinions/comments."
        ></textarea>
        <button
          className="rb-button rb-button--primary"
          onClick={postfeedback}
        >
          Submit Feedback
        </button>
        {loading ? <Loading/> : null}
      </div>
    );
}

export default Feedback;
