import React from 'react'
import './session.css'
const subTopic=(props)=>{
    // console.log(props)
    let file1,file2,file3
    return(<div className="sub">
        <div>
        <table>
        <tr>
            <td><p>Topic</p></td>
            <td><p>Presentor</p></td>
        </tr>
        <tr>
            
            <td>{props.sub_topic}</td>
            <td>{props.name}</td>
        </tr>
        </table>
        
        </div>
        <div className="hyper">
        <a href="https://kp9jdncx7nlupys6bei-cap-njs-reuse.cfapps.us10.hana.ondemand.com/bulk/sample">file 1</a><br/>
        <a href={file2}>file 2</a><br/>
        <a href={file3}>file 3</a><br/>
        </div>
    </div>)
}

export default subTopic