import React, { useState } from "react";
import axios from 'axios'
import ReactTooltip from "react-tooltip";

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
    let t=props.files[j].FILE_NAME.split('-')
    resorc.push([t[t.length-1], props.files[j].FILE_NAME])
  }
  let presentors = [...new Set(presento)]
  topics=[...new Set(topics)]
  let str = topics.toString()

  let list = (
    <div>
      {presentors.map((presontor, i) => {
        let ref="mailto:"+presontor
        return <li key={i}><a style={{color:"#868686"}} href={ref}>{presontor}</a></li>
      })}
    </div>
  )

  let download = (
    <ul className="downloads">
    {/*TODO: add heading*/}
      <h5 style={{"margin-left": "10px"}}>Attachments</h5>
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
        // console.log(response)
        if(response.status===200){
        alert(response.data.status);}
      }).catch((error) => {
      });
  }

  let onChange = (e) => {
    file = e.target.files[0];
    formSubmit(e)
  }

  let emailicon=(
    <div className="admin-notify">
        <i data-tip data-for="emailTip" className="boschicon-bosch-ic-mail"></i>
          <ReactTooltip id="emailTip" place="top" effect="solid">
                Email Subscribers
          </ReactTooltip>
      </div>
  )

  return (
    <div className="card">
      <div className="head">
        <label>{props.index + 1}</label>
        <strong>{str}</strong>
        <span><b>{props.date}</b></span>
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
          <i  className="boschicon-bosch-ic-cloud-upload"></i>
          <ReactTooltip id="uploadTip" place="top" effect="solid">
                Upload Attachments
          </ReactTooltip>
          <input data-tip data-for="uploadTip" type="file" name="files" onChange={onChange} />
          <div className="clear"></div>
        </form>
      </div>
      {resorc && resorc.length ?
        <div className="resources">
          <i data-tip data-for="attachmentsTip" className="boschicon-bosch-ic-book" onClick={() => {
            let newVal = showResources ? false : true;
            setShowResources(newVal);
          }}></i>
          <ReactTooltip id="attachmentsTip" place="top" effect="solid">
                View Attachments
          </ReactTooltip>
        </div> : null}
      <div >{showResources ? download : null}</div>


      <div>{(new Date(props.date) > new Date() ) ? emailicon: null}</div>
      <div className="clear"></div>
    </div>
  );
};

export default PostCard;
