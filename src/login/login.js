import React, { useState } from "react";
import axios from 'axios';

import './login.scss'
import Loading from '../loading/loading'

const Login = (props) => {
    // let token = localStorage.getItem('token')
    // axios.defaults.headers.common['Authorization'] = token;
    // console.log(props)
    const [showOTP, setshowOTP] = useState(false);
    const [loading,setLoading]=useState(false)
    let email = ''
    let otp = ''
    let header = ''
    // console.log(props)
    let getOtp = () => {
        // console.log('getotp')
        email=document.getElementById('email').value
        if(!email){
            return alert('please enter a valid username or email')
        }
        setLoading(true)
        const post = axios.get('https://rbei-cloud-foundry-dev-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/user/auth/otp?user=' + email);
        post.then((result) => {
            setshowOTP(true);
            alert(result.data.msg)
            setLoading(false)
        }).catch((e) => {
            alert(e.response.data.msg)
            console.log(e.response.data.msg)
        })
    }

    let validateOtp = () => {
        let user=document.getElementById('email').value
        otp=document.getElementById('otp').value
        if(!otp){
            return alert('please enter a valid otp')
        }
        // console.log(user)
        // console.log('validate otp')
        setLoading(true)
        const post = axios.post('https://rbei-cloud-foundry-dev-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/user/auth/login', {
            user, otp
        });
        post.then((result) => {
            // console.log(result)
            setLoading(false)
            if (result.status === 200) {
                header = result.data.token;
                let name=result.data.name
                localStorage.setItem('token',header);
                localStorage.setItem('type',result.data.type);
                localStorage.setItem('name',name.split(' ')[0]);
                localStorage.setItem('email',result.data.email);
                if(localStorage.getItem('token')){
                props.history.push({pathname:'/'});
                }
                else{
                    props.history.push({pathname:'/index.html#login'});
                }
            }
            else{
                setLoading(false)
                alert(result.data.msg);
                props.history.push({pathname:'/index.html#login'});
            }
            // console.log(header)
        }).catch((e) => {
            console.log(e);
            alert(e.response.data.msg);
        })
    }
    let emailContainer = (
        <div>
            <div>

                <label >E-mail / Username </label>
                <input disabled={showOTP} id="email" type="text" />
                {!showOTP ? (<button className="rb-button rb-button--primary" onClick={getOtp}>Get OTP</button>) : null}
            </div>
            <div className="clear"></div>
        </div>
    )
    let load=(
        <Loading/>
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
            <p>Sign in (only Bosch employees)</p>
            {emailContainer}
            {showOTP ? otpContainer : null}
            {loading ? load :null}
        </div>
    )
}

export default Login;