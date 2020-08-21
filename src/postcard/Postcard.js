import React from "react";
import axios from "axios";
import "./header.css";
import "./styles.css";
import logo from "./bosch_logo.jpg";

const postCard = (props) => {
    // console.log(props.topics)
    let topics=[]
    let presento=[]
    for(let i=0;i<props.topics.length;i++){
        topics.push(props.topics[i].SUB_TOPIC)
        presento.push(props.topics[i].USER_EMAIL)
    }
    let presentors=[...new Set(presento)]
    let str=topics.toString()
    // console.log('hello',presentors)
    let list=(
        <ol className="ordered-list">
            {presentors.map((presontor,i)=>{
                   return <li key={i}>{presontor}</li>
                })}
        </ol>
    )

  return (
    <div>
      <div className="postcard">
        <div className="highlight">
          <h4 className="sessioncss">
            <strong>Session {props.index+1} : </strong>
          </h4>
          <h4 className="sessiontopic">
            <strong>{str}</strong>
          </h4>
          <h4 className="sessiondate">{props.date}</h4>
        </div>

        <p className="content">
          {props.description}
        </p>
        <div className="p-vc-uf">
          <div className="presenter-information">
            <h4 className="presenter-heading">Presented by</h4>  
            {list}        
          </div>
          <div className="resources">
            <button className="rb-button rb-button--primary resources-button">
              View Resources
            </button>
            {/* list of files */}
          </div>

          <div className="upload">
            <button className="rb-button rb-button--secondary">
              Upload Files
            </button>
          </div>
        </div>
      </div>

      <div className="admin-notify">
        <button className="rb-button rb-button--secondary">
          Notify Agenda
        </button>
      </div>
    </div>
  );
};

export default postCard;
