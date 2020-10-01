import React, { useState } from 'react'

import './postcardUpdate.scss'

const Popup=(props)=>{

    // console.log(props)
    const [title,setTitle]=useState(props.session.title)
    const [date,setDate]=useState(props.session.date)
    const [description,setDesc]=useState(props.session.description)
    const [topics,setTopics]=useState(props.session.topics)
    console.log(topics)

    return(
        <div className='update-popup'>
        <div className='update-pop2'>
            <label>Title  </label>
            <input type='text' id='title' value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
            <label>  Date  </label>
            <input type='date' id='date' value={date} onChange={(e)=>{setDate(e.target.value)}}></input><br></br>
            <label style={{float:'left'}}>Description  </label>
            <textarea id='description' rows = "3" cols = "50" value={description} onChange={(e)=>{setDesc(e.target.value)}}></textarea><br></br>
            {
                topics.map((sub,i)=>{
                    return(
                        <div key={sub.SUB_TOPIC_ID}>
                            <label> presentor</label>
                            <input value={sub.USER_EMAIL} onChange={(e)=>{}}></input>
                            <label>topic</label>
                            <input value={sub.SUB_TOPIC}></input><br></br>
                        </div>
                    )
                })
            }
            <button className="rb-button rb-button--primary">Update</button>
            <button className="rb-button rb-button--primary" onClick={props.close} >Close</button>
        </div>
        </div>
    )
}

export default Popup