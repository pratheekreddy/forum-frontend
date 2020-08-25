import React from "react";
import './login.css'
const login=(props)=>{
    return (
<div className = 'form'>
        <form action='/login' method='post'>
            <form action="/login" method="post">
                <ul>
                    <li>
                        <label for="mail">E-mail:</label>
                        <input type="email" id="mail" name="user_email"/>
                        <button>Get OTP</button>
                    </li>
                    <li>
                        <label for="otp">OTP:</label>
                        <input type='text' placeholder="Enter your OTP" id="otp" name="otp" />
                    </li>
                    <li class="button">
                        <button type="submit">Login</button>
                    </li>
                </ul>
            </form>
        </form>
    </div>
    )
}

export default login