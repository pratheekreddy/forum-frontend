import React from "react";
import "./header.css";
import "./styles.css";

const postCard = (props) => {
    // console.log(props.topics)
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
