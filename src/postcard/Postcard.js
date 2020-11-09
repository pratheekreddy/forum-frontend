import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { withRouter } from "react-router-dom";

import DownloadFile from "../postcardElements/downloadFile";
import "./postcard.scss";
import PostcardUpdate from "../postcardElements/postcardUpdate";
import Upload from "../postcardElements/file";
import Email from "../postcardElements/email";

const PostCard = (props, state) => {
  let email_local = localStorage.getItem("email");

  const [showResources, setShowResources] = useState(false);
  const [popup, setPopup] = useState(false);

  let showUpload;

  let topics = [];
  let presento = [];
  let resorc = [];

  for (let i = 0; i < props.topics.length; i++) {
    topics.push(props.topics[i].SUB_TOPIC);
    presento.push(props.topics[i].USER_EMAIL.toLowerCase());
  }

  for (let j = 0; j < props.files.length; j++) {
    let t = props.files[j].FILE_NAME.split("-");
    resorc.push([t[t.length - 1], props.files[j].FILE_NAME]);
  }

  let presentors = [...new Set(presento)];
  topics = [...new Set(topics)];
  let str = topics.toString();

  showUpload = presentors.includes(email_local.toLowerCase());
  if (localStorage.getItem("type") === "A") {
    showUpload = true;
  }

  let list = (
    <div>
      {presentors.map((presontor, i) => {
        let ref = "mailto:" + presontor;
        return (
          <li key={i}>
            <a style={{ color: "#868686" }} href={ref}>
              {presontor}
            </a>
          </li>
        );
      })}
    </div>
  );

  let download = (
    <ul className="downloads">
      <h5 style={{ "marginLeft": "10px" }}>Attachments</h5>
      {resorc.map((down, i) => {
        return <DownloadFile key={i} down={down} />;
      })}
    </ul>
  );

  let close = () => {
    setPopup(false);
  };
//  console.log(props.boschTubeURL)
  return (
    <div className="card">
      <div className="head">
        <label>{props.index}</label>
        <strong
          onClick={() => {
            setPopup(true);
          }}
        >
          {str}
        </strong>
        <span>
          <b>{props.date}</b>
        </span>
        {/* <div className="Stars" style={{ "--rating": 2.3 }}></div>
        <button style={{ float: "right" }}>give feedback</button> */}
      </div>

      <div className="desc">{props.description}</div>

      <div className="presenters">
        <h5>Presented by</h5>
        {list}
      </div>

      <div>
        {showUpload ? <Upload session_id={props.session_id} /> : null}

        {resorc && resorc.length ? (
          <div className="resources">
            <i
              data-tip
              data-for="attachmentsTip"
              className="boschicon-bosch-ic-book"
              onClick={() => {
                let newVal = showResources ? false : true;
                setShowResources(newVal);
              }}
            ></i>
            <ReactTooltip id="attachmentsTip" place="top" effect="solid">
              View Attachments
            </ReactTooltip>
          </div>
        ) : null}

        {new Date(props.date).toISOString().substring(0, 10) +
          "T18:29:59.000Z" >=
          new Date().toISOString() && localStorage.getItem("type") === "A" ? (
            <Email session_id={props.session_id} />
          ) : null}

        {props.boschTubeURL ? (
          <div className="resources">
            <a
              rel="noopener noreferrer"
              target="_blank"
              // href="https://tube.video.bosch.com/media/Sample+Recording/0_37qhkxzx"
              href={props.boschTubeURL}
            ><i data-tip data-for="video" className="boschicon-bosch-ic-start-play-frame"></i></a>
            <ReactTooltip id="video" place="top" effect="solid">
              View Session Video
            </ReactTooltip>
          </div>
        ) : null}

        {new Date(props.date).toISOString().substring(0, 10) +
          "T18:29:59.000Z" >=
          new Date().toISOString() ? (
            <label style={{ marginLeft: "15px", color: "darkgray" }}>
              Upcoming
            </label>
          ) : null}
          <div className='question-answer'>
            <i data-tip data-for="q&a" className='boschicon-bosch-ic-chat-question-answer' onClick={()=>{props.history.push({ pathname: "/Q&A/"+props.session_id })}}></i>
            <ReactTooltip id="q&a" place="top" effect="solid">
              Discussion
            </ReactTooltip>
          </div>
      </div>

      {showResources ? download : null}

      {popup && localStorage.getItem("type") === "A" ? (
        <PostcardUpdate close={close} session={props} />
      ) : null}

      <div className="clear"></div>
    </div>
  );
};

export default withRouter(PostCard);
