import React from "react";
import axios from 'axios'

import './signup.scss'

const signup = (props) => {
    let email,idno,name,ntid,dept,username 
    // console.log(props)
    let register=()=>{
        email=document.getElementById('email').value
        idno=document.getElementById('idno').value
        name=document.getElementById('name').value
        ntid=document.getElementById('ntid').value
        dept=document.getElementById('dept').value
        username=document.getElementById('username').value
        const post = axios.post('https://0appkh5ipbo57270um-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/user/signup', {
            email, idno,name,ntid,dept,username
        });
        post.then((result) => {
            console.log(result)
            alert(result.data.msg)
            if (result.status === 201) {
                props.history.push({pathname:'/'})
            }

        }).catch((e) => {
            console.log(e)
        })
    }
    return(
        <div>
        <div className='login'>
            <label>E-mail :</label>
            <input type='text' placeholder="Enter your Email" id="email"></input>
            <label>Id number :</label>
            <input type='text' placeholder="Enter your Employee Id" id="idno"></input>
            <label>Full Name :</label>
            <input type='text' placeholder="Enter your Full Name" id="name"></input>
            <label>NT-ID :</label>
            <input type='text' placeholder="Enter your NT ID" id="ntid"></input>
            <label>Department :</label>
            <input type='text' placeholder="Enter your Department" id="dept"></input>
            <label>Username :</label>
            <input type='text' placeholder="Enter your Username" id="username"></input>
            <button className="rb-button rb-button--primary" onClick={register}>Signup</button>
        </div>
        <div className="clear"></div>
        </div>
    )
}

export default signup