import React from "react";
import axios from 'axios'

import "./header.css";
import "./styles.css";

const postCard = (props) => {

    let topics=[]
    let presento=[]
    let resorc=[]
    for(let i=0;i<props.topics.length;i++){
        topics.push(props.topics[i].SUB_TOPIC)
        presento.push(props.topics[i].USER_EMAIL)
    }
    for(let j=0;j<props.files.length;j++){
      resorc.push([props.files[j].FILE_NAME.split('-')[1],props.files[j].FILE_NAME])
    }
    let presentors=[...new Set(presento)]
    let str=topics.toString()

    let list=(
        <ol className="ordered-list">
            {presentors.map((presontor,i)=>{
                   return <li key={i}>{presontor}</li>
                })}
        </ol>
    )

    let download=(
      <ul className='unordered-lis'>
          {resorc.map((down,i)=>{
            return <li key={i}><a href={"https://0appkh5ipbo57270um-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/file/download?filename="+down[1]}>{down[0]}</a></li>
          })}
      </ul>
    )
          let file
      let formSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('files',file);
        formData.append('session_id',props.session_id)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("https://0appkh5ipbo57270um-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/file/upload",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
      }
      
      let onChange=(e)=>{
        file=e.target.files[0]
      }

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
            <button className="rb-button rb-button--primary resources-button" >
              View Resources
            </button>
            {download}
            {/* list of files */}
          </div>

          <div className='upload'>
                <form onSubmit={formSubmit}> 
                    <button className='rb-button rb-button--secondary'>Upload Files</button>
                    <input multiple type="file" name="files" onChange={onChange}/>
                </form>
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
