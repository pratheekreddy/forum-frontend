import React from "react";
import axios from 'axios'

import './login.css'
const login=(props)=>{
    let email=''
    let otp=''
    let header=''
    let updateEmail=(value)=>{
        email=value
        // console.log(email)
    }

    let updateOtp=(value)=>{
        otp=value
    }

    let getOtp=()=>{
        console.log('getotp')
        const post = axios.post('https://0appkh5ipbo57270um-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/getotp',{
            email
        });
        post.then((result) => {
            console.log(result)
            alert(result.data.status)
        }).catch((e) => {
          console.log(e)
        })
    }

    let validateOtp=()=>{
        console.log('validate otp')
        const post = axios.post('https://0appkh5ipbo57270um-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/login',{
            email,otp
        });
        post.then((result) => {
            alert(result.data.status)
            if(result.data.status==='valid otp'){
                header=result.data.token
                
            }
            console.log(header)
        }).catch((e) => {
          console.log(e)
        })
    }

    return (
            <div className = 'form'>
                <label >E-mail:</label>
                <input  type="text"  onChange={event=>updateEmail(event.target.value)}/>
                <button onClick={getOtp}>Get OTP</button><br/>
                <label >OTP:</label>
                <input type='text' placeholder="Enter your OTP"  onChange={event=>updateOtp(event.target.value)}/><br/>
                <button onClick={validateOtp}>Login</button>
            </div>
    )
}

export default login