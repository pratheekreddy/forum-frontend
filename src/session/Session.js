import React from 'react'
import './session.css'
import SubTopic from './Sub'
import axios from 'axios';

const postCard=(props)=>{
    // console.log(props)
    let topics=props.topics
    // console.log(topics) 
    let sub=(
        <div className="part">
        {topics.map(topic=>{
          return <div >
          <SubTopic className="subtopic"
          name={topic.user_email} 
          sub_topic={topic.sub_topic } 
          key={topic.sub_topic_id}
          file1={topic.file_01}
          file2={topic.file_02}
          file3={topic.file_03}
          /> </div>
        })}
          </div>
      )
      let triggerEmail=()=>{
        const email=axios.get('https://cors-anywhere.herokuapp.com/https://zrfwopzy3iqv2cwirum-rbei-cap-node.cfapps.us10.hana.ondemand.com/publishagenda?session_id='+props.session_id);
          email.then((result)=>{
              console.log(result.status)
              if(result.status==='200'){
                return (<div class="alert success">
                <span class="closebtn">&times;</span>  
                <strong>Success!</strong> Indicates a successful or positive action.
              </div>)
              }
          }).catch((e)=>{
            console.log('error')
          })
      }

    return(
        <div className="postCard">
        <div className="forbuttons">
        <div>
         <p><b>session:</b> {props.title}</p>
         <p> <b>description :</b>{props.description}</p>
         <p> <b>date :</b>{props.date}</p>
         </div>
         <div><button className="button" onClick={triggerEmail}>send email</button></div>
         </div>
         <div>{sub}</div>

        </div>
    )
}

export default postCard