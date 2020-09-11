import React, { useState } from "react";
import axios from 'axios';
import './profile.scss';
import { withRouter } from 'react-router-dom';

const Profile = (props) => {
    const [profileinfo,setprofileinfo]=useState([])

    let update = () => {
       let name = document.getElementById('name').value;
       let dept = document.getElementById('dept').value;
       let username = document.getElementById('username').value;
        axios.patch("https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/profile/updateprofile('"+email+"')",{
            "DEPT": dept,
            "USERNAME": username,
            "NAME":name
        })
    }

    let enableElement = (id) => {
        document.getElementById(id).disabled = false;
    }
    
    let profileDisplay=(
        <div>
            <div className='updateprofile'>
                <label>E-mail </label>
                <input type='text' placeholder="krishnan.gautam@in.bosch.com" value={profileinfo.EMAIL} id="email" disabled></input>
                <label>Id number </label>
                <input type='text' placeholder="33378755" id="idno" value={profileinfo.IDNO} disabled></input>
                <label>Full Name </label>
                <input type='text' placeholder="Gautam Krishnan" value={profileinfo.NAME} id="name" disabled></input>
                <i className="boschicon-bosch-ic-edit" onClick={(() => enableElement("name"))}></i>
                <label>NT-ID </label>
                <input type='text' placeholder="TKG1KOR" value={profileinfo.NTID} id="ntid" disabled></input>
                <label>Department </label>
                <input type='text' placeholder="RBEI/BLS5" value={profileinfo.DEPT} id="dept" disabled></input>
                <i className="boschicon-bosch-ic-edit" onClick={(() => enableElement("dept"))}></i>
                <label>Username </label>
                <input type='text' placeholder="Gomzi" value={profileinfo.USERNAME} id="username" disabled></input>
                <i className="boschicon-bosch-ic-edit" onClick={(() => enableElement("username"))}></i>
                <button className="rb-button rb-button--primary" onClick={update}>Update</button>
            </div>
        </div>
    )
    let email=localStorage.getItem('email')

    axios.get("/srv_api/profile/readprofile(email='"+email+"')/Set").then((result)=>{
        console.log(result);
        setprofileinfo(result);
    })
    .catch((e)=>{
        
        })

    return (
    {profileDisplay}
    );
    
}



export default withRouter(Profile);