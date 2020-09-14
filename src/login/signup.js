import React from "react";
import axios from 'axios';
import './signup.scss'

const signup = (props) => {
    let email,idno,name,ntid,dept,username ;
    // console.log(props)
    let register=()=>{
        
        email=document.getElementById('email').value
        idno=document.getElementById('idno').value
        name=document.getElementById('name').value
        ntid=document.getElementById('ntid').value
        dept=document.getElementById('dept').value
        username=document.getElementById('username').value
        if(!email|| !idno || !name || !ntid || !dept){
            return alert('please enter credientials')
        }
        const post = axios.post('https://rbei-cloud-foundry-dev-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/user/signup', {
            email, idno,name,ntid,dept,username
        });
        post.then((result) => {
            console.log(result);
            alert(result.data.msg);
            if (result.status === 201) {
                props.history.push({pathname:'/login'});
            }

        }).catch((e) => {
            alert(e.response.data.msg)
            console.log(e.response.data.msg);
        })
    }
    return(
        <div className='login'>
        <div>
            <label className="required">E-mail</label>
            <input type='text' placeholder="Enter your Email" id="email"></input>
            <label className="required">Id number</label>
            <input type='text' placeholder="Enter your Employee Id" id="idno"></input>
            <label className="required">Full Name</label>
            <input type='text' placeholder="Enter your Full Name" id="name"></input>
            <label className="required">NT-ID</label>
            <input type='text' placeholder="Enter your NT ID" id="ntid"></input>
            <label className="required">Department</label>
            <input type='text' placeholder="Enter your Department" id="dept"></input>
            <label>Username </label>
            <input type='text' placeholder="Enter your Username" id="username"></input>
            <button className="rb-button rb-button--primary" onClick={register}>Signup</button>
        </div>
        <div className="clear"></div>
        </div>
    )
}

export default signup;