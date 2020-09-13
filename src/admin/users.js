import React from 'react'
import './userAprove.scss'

const User = (props) => {
    console.log(props)

    let sub=(
        <table>
        <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Department</th>
            <th>ID-NO</th>
            <th>NT-ID</th>
            <th>UserName</th>
            <th>Registered on</th>
            <th>Action</th>
        </tr>
        {props.data.map(user=>{
          return <tr>
            <td>{user.EMAIL_ID}</td>
            <td>{user.NAME}</td>
            <td>{user.DEPT}</td>
            <td>{user.IDNO}</td>
            <td>{user.NTID}</td>
            <td>{user.USERNAME}</td>
            <td>{user.REGD_ON}</td>
            <td><button className='aprove' >Approve</button><button className='reject'>reject</button></td>
        </tr>
        })}
        </table>
      )


    return(<div>
                {sub}
        
        </div>
    )

}

export default User;