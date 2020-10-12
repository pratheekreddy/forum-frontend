import React, { Component } from "react";
import "./feedback.scss";
import axios from "axios";
// import { withRouter } from 'react-router-dom';

class Feedback extends Component {
  email = localStorage.getItem("email");
  token = localStorage.getItem("token");
  authHeader = "requester=" + this.email + ";rbei_access_token=" + this.token;

  feedback = () => {
    let feedback = document.getElementById("comments");
    axios.defaults.headers.common["Authorization"] = this.authHeader;
    axios({
      url:
        "https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/feedback/application",
      data: {
        EMAIL: this.email,
        COMMENTS: feedback,
      },
      method: "POST",
    }).then((result) => {
        alert('Feedback submitted successfully!');
    })
  };
  render() {
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
          onClick={this.postfeedback}
        >
          Submit Feedback
        </button>
      </div>
    );
  }
}

export default Feedback;
