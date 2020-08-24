import React, { useState } from "react";
import axios from 'axios'

import "./postcard.scss";
const PostCard = (props, state) => {
  const [showResources, setShowResources] = useState(false);
  let topics = [];
  let presento = [];
  let resorc = [];
  for (let i = 0; i < props.topics.length; i++) {
    topics.push(props.topics[i].SUB_TOPIC)
    presento.push(props.topics[i].USER_EMAIL)
  }
  for (let j = 0; j < props.files.length; j++) {
    resorc.push([props.files[j].FILE_NAME.split('-')[1], props.files[j].FILE_NAME])
  }
  let presentors = [...new Set(presento)]
  let str = topics.toString()

  let list = (
    <div>
      {presentors.map((presontor, i) => {
        return <li key={i}>{presontor}</li>
      })}
    </div>
  )

  let download = (
    <ul className="downloads">
      {resorc.map((down, i) => {
        const tempName = down[0].split('.');
        return <li key={i}><a target="_blank" rel="noopener noreferrer" href={"https://0appkh5ipbo57270um-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/file/download?filename=" + down[1]}><span>{tempName[1]}</span>{tempName[0]}</a></li>
      })}
    </ul>
  )
  let file
  let formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('files', file);
    formData.append('session_id', props.session_id)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios.post("https://0appkh5ipbo57270um-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/file/upload", formData, config)
      .then((response) => {
        alert("The file is successfully uploaded");
      }).catch((error) => {
      });
  }

  let onChange = (e) => {
    file = e.target.files[0];
  }

  return (
    <div className="card">
      <div className="head">
        <label>{props.index + 1}</label>
        <strong>{str}</strong>
        <span>{props.date}</span>
      </div>
      <div className="desc">
        {props.description}
      </div>
      <div className="presenters">
        <h5>Presented by</h5>
        {list}
      </div>

      <div className='upload'>
        <form onSubmit={formSubmit}>
          <i className="boschicon-bosch-ic-cloud-upload"></i>
          <input multiple type="file" name="files" onChange={onChange} />
          <div className="clear"></div>
        </form>
      </div>
      {resorc && resorc.length ?
        <div className="resources">
          <i className="boschicon-bosch-ic-book" onClick={() => {
            let newVal = showResources ? false : true;
            setShowResources(newVal);
          }}></i>
        </div> : null}
      <div>{showResources ? download : null}</div>


      <div className="admin-notify">
        <button className="rb-button rb-button--secondary">
          Notify Agenda
        </button>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default PostCard;
