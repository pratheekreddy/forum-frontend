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
          name={topic.USER_EMAIL} 
          sub_topic={topic.SUB_TOPIC } 
          key={topic.SUB_TOPIC_ID}
          file1={topic.FILE_01}
          file2={topic.FILE_02}
          file3={topic.FILE_03}
          /> </div>
        })}
          </div>
      )
      let triggerEmail=()=>{
        const email=axios.get('https://cors-anywhere.herokuapp.com/https://zrfwopzy3iqv2cwirum-rbei-cap-node.cfapps.us10.hana.ondemand.com/publishagenda?session_id='+props.session_id);
          email.then((result)=>{
              console.log(result.status)
              if(result.status==='200'){

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
         <div><button className="button" onClick={triggerEmail}>Notify</button></div>
         </div>
         <div>{sub}</div>

        </div>
    )
}

export default postCard