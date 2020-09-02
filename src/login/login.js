import React, { useState } from "react";
import axios from 'axios'

import './login.scss'
const Login = (props) => {
    // console.log(props)
    const [showOTP, setshowOTP] = useState(false);
    let email = ''
    let otp = ''
    let header = ''
    // console.log(props)
    let getOtp = () => {
        // console.log('getotp')
        email=document.getElementById('email').value
        const post = axios.get('https://0appkh5ipbo57270um-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/user/auth/otp?user='+email);
        post.then((result) => {
            // console.log(result);
            // email = '';
            // otp = '';
            setshowOTP(true);
            alert(result.data.msg)
        }).catch((e) => {
            console.log(e)
        })
    }

    let validateOtp = () => {
        let user=document.getElementById('email').value
        otp=document.getElementById('otp').value
        // console.log(user)
        // console.log('validate otp')
        const post = axios.post('https://0appkh5ipbo57270um-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/user/auth/login', {
            user, otp
        });
        post.then((result) => {
            // console.log(result)
            if (result.status === 200) {
                header = result.data.token
                props.history.push({pathname:'/landing'})
                localStorage.setItem('token',header)
            }
            else{
                alert(result.data.msg)
            }
            // console.log(header)
        }).catch((e) => {
            console.log(e)
        })
    }
    let emailContainer = (
        <div>
            <div>
                <label >E-mail:</label>
                <input disabled={showOTP} id="email" type="text" />
                {!showOTP ? (<button className="rb-button rb-button--primary" onClick={getOtp}>Get OTP</button>) : null}
            </div>
            <div className="clear"></div>
        </div>
    )
    let otpContainer = (
        <div>
            <div>
                <label >OTP:</label>
                <input type='text' id="otp" placeholder="Enter your OTP" />
                <button className="rb-button rb-button--primary" onClick={validateOtp}>Login</button>
            </div>
            <div className="clear"></div>
        </div>
    )

    return (
        <div className='login'>
            {emailContainer}
            {showOTP ? otpContainer : null}
        </div>
    )
}

export default Login