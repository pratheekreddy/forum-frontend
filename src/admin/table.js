import React,{useState} from 'react'
import axios from 'axios';

import './userAprove.scss'

const Table = (props) => {
    const [show,setShow]=useState(true)
    let approve=()=>{
        axios.post('https://rbei-cloud-foundry-dev-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/admin/approve',{
            email:props.user.EMAIL_ID,
            status:'A'
        }).then(result=>{
            setShow(false)
        })
        // let style={display:none}
        .catch(e=>{
            console.log(e)
        })
    }

    let reject=()=>{
        axios.post('https://rbei-cloud-foundry-dev-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/admin/approve',{
            email:props.user.EMAIL_ID,
            status:'R'
        }).then(result=>{
            setShow(false)
        })
        // let style={display:none}
        .catch(e=>{
            console.log(e)
        })
    }

    let content=(<tr>
        <td>{props.user.EMAIL_ID}</td>
        <td>{props.user.NAME}</td>
        <td>{props.user.DEPT}</td>
        <td>{props.user.IDNO}</td>
        <td>{props.user.NTID}</td>
        <td>{props.user.USERNAME}</td>
        <td>{props.user.REGD_ON}</td>
        <td><button onClick={approve} className='aprove' >Approve</button><button onClick={reject} className='reject'>reject</button></td>
    </tr>)
    return(<tbody>
        {show ? content : null}
        </tbody>
    )
}

export default Table;