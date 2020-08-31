import React, { useState } from "react";
import axios from 'axios'

import './login.scss'
const Login = (props) => {
    const [showOTP, setshowOTP] = useState(false);
    let email = ''
    let otp = ''
    let header = ''

    let getOtp = () => {
        console.log('getotp')
        const post = axios.post('https://0appkh5ipbo57270um-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/getotp', {
            email
        });
        post.then((result) => {
            console.log(result);
            email = '';
            otp = '';
            setshowOTP(true);
            alert(result.data.status)
        }).catch((e) => {
            console.log(e)
        })
    }

    let validateOtp = () => {
        console.log('validate otp')
        const post = axios.post('https://0appkh5ipbo57270um-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/login', {
            email, otp
        });
        post.then((result) => {
            alert(result.data.status)
            if (result.data.status === 'valid otp') {
                header = result.data.token

            }
            console.log(header)
        }).catch((e) => {
            console.log(e)
        })
    }
    let emailContainer = (
        <div>
            <div>
                <label >E-mail:</label>
                <input disabled={showOTP} type="text" onChange={event => email = event.target.value} />
                {!showOTP ? (<button className="rb-button rb-button--primary" onClick={getOtp}>Get OTP</button>) : null}
            </div>
            <div className="clear"></div>
        </div>
    )
    let otpContainer = (
        <div>
            <div>
                <label >OTP:</label>
                <input type='text' placeholder="Enter your OTP" onChange={event => otp = event.target.value} />
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