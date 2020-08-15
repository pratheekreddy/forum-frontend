import React from 'react'
import './session.css'
const subTopic=(props)=>{
    // console.log(props)
    let file1,file2,file3
    return(<div className="sub">
        <div><p>topic:{props.sub_topic}</p>
        <p>presentor :{props.name}</p>
        </div>
        <div className="hyper">
        <a href="https://kp9jdncx7nlupys6bei-cap-njs-reuse.cfapps.us10.hana.ondemand.com/bulk/sample">download file</a><br/>
        <a href={file2}>download file</a><br/>
        <a href={file3}>download file</a><br/>
        </div>
    </div>)
}

export default subTopic