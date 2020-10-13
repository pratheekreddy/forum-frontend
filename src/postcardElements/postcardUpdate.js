import React, { useState } from 'react'

import './postcardUpdate.scss'

const Popup=(props)=>{

    const [title,setTitle]=useState(props.session.title)
    const [date,setDate]=useState(props.session.date)
    const [description,setDesc]=useState(props.session.description)
    let a=[]

    for(let i=0;i<props.session.topics.length;i++){
        a.push({ USER_EMAIL: props.session.topics[i].USER_EMAIL , SUB_TOPIC:props.session.topics[i].SUB_TOPIC })
    }
    
    const [fields, setFields] = useState([...a]);
    
    let handleChangeEmail=(i, event)=> {
        const values = [...fields];
        values[i].USER_EMAIL = event.target.value;
        setFields(values);
      }

    let handleChangeTopic=(i, event)=> {
        const values = [...fields];
        values[i].SUB_TOPIC = event.target.value;
        setFields(values);
      }
    
    let update=()=>{
        
    }

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
                fields.map((sub,idx)=>{
                    return(
                        <div key={idx}>
                            <label> presentor</label>
                            <input value={sub.USER_EMAIL} onChange={e => handleChangeEmail(idx, e)}></input>
                            <label>topic</label>
                            <input value={sub.SUB_TOPIC} onChange={e => handleChangeTopic(idx, e)}></input><br></br>
                        </div>
                    )
                })
            }
            <button className="rb-button rb-button--primary" onClick={update}>Update</button>
            <button className="rb-button rb-button--primary" onClick={props.close} >Close</button>
        </div>
        </div>
    )
}

export default Popup