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
        <a href="https://kp9jdncx7nlupys6bei-cap-njs-reuse.cfapps.us10.hana.ondemand.com/bulk/sample">file 1</a><br/>
        <a href={file2}>file 2</a><br/>
        <a href={file3}>file 3</a><br/>
        </div>
    </div>)
}

export default subTopic