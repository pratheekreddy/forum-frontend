import React from 'react'
import './userAprove.scss'

const Table = (props) => {

    let approve=()=>{
        
    }

    let reject=()=>{

    }
    return(
        <tr>
            <td>{props.user.EMAIL_ID}</td>
            <td>{props.user.NAME}</td>
            <td>{props.user.DEPT}</td>
            <td>{props.user.IDNO}</td>
            <td>{props.user.NTID}</td>
            <td>{props.user.USERNAME}</td>
            <td>{props.user.REGD_ON}</td>
            <td><button onClick={approve} className='aprove' >Approve</button><button onClick={reject} className='reject'>reject</button></td>
        </tr>
    )
}

export default Table;