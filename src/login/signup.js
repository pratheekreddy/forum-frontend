import React, { useState } from "react";
import axios from 'axios';

import Loading from '../loading/loading'
import './signup.scss'

const Signup = (props) => {
    const [vuserName, setUsername] = useState();
    let email,idno,name,ntid,dept,username ;
    const [loading,setloading]=useState(false)
    
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
        setloading(true)
        const post = axios.post('https://rbei-cloud-foundry-dev-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/user/signup', {
            email, idno,name,ntid,dept,username
        });
        post.then((result) => {
            console.log(result);
            setloading(false)
            alert(result.data.msg);
            if (result.status === 201) {
                props.history.push({pathname:'/login'});
            }

        }).catch((e) => {
            alert(e.response.data.msg)
            console.log(e.response.data.msg);
        })
    }

    let checkUsername=()=>{
        setUsername('loading')
        username=document.getElementById('username').value
        axios.get('https://rbei-cloud-foundry-dev-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/user/valid?username='+username)
        .then((result)=>{
            console.log(result.data.valid)
            if(result.data.valid===true){
                // alert('valid username');
                setUsername('valid')
            }
            else{
                // alert('username already exist');
                setUsername('invalid')
            }
        })
        .catch(e=>{
            alert(e)
            setUsername('invalid')
        })
    }

    let load=(<Loading/>)

    return(
        <div className='login'>
        <p >Sign up (only Bosch employees)</p>
        <div>
            <label className="required">E-mail</label>
            <input type='text' placeholder="Enter your Email" id="email"></input>
            <label>Username </label>
            <input className={vuserName} type='text' onBlur={checkUsername} placeholder="Enter your Username" id="username"></input>
            <label className="required">Employee Id</label>
            <input type='text' placeholder="Enter your Employee Id" id="idno"></input>
            <label className="required">Full Name</label>
            <input type='text' placeholder="Enter your Full Name" id="name"></input>
            <label className="required">NT-ID</label>
            <input type='text' placeholder="Enter your NT ID" id="ntid"></input>
            <label className="required">Department</label>
            <input type='text' placeholder="Enter your Department" id="dept"></input>
            <button className="rb-button rb-button--primary" onClick={register}>Signup</button>
        </div>
        {loading? load:null}
        <div className="clear"></div>
        </div>
    )
}

export default Signup;