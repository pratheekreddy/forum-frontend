import React from 'react'
import './userAprove.scss'
import Table from './table'

const User = (props) => {
    // console.log(props)

    let sub=(
        <table>
        <thead>
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
        </thead>
        <tbody>
        {props.data.map((user,index)=>{
          return <Table key={index} user={user}></Table>
        })}
        </tbody>
        </table>
      )


    return(<div>
                {sub}
        
        </div>
    )

}



export default User;