import React, { Component} from "react";
import axios from 'axios';
import './profile.scss';
import { withRouter } from 'react-router-dom';
import ProfileInfo from './profileInfo'
import Loading from '../loading/loading'

class Profile extends Component {


    constructor() {
        super();
        this.state = {
            profileinfomation: [],
            response:false
        };
    }

    getProfileInfo=()=>{
    let t = localStorage.getItem('token')
    let email=localStorage.getItem('email')
    let email_local = localStorage.getItem('email')
    let token='requester='+email_local+';rbei_access_token='+t
    axios.defaults.headers.common['Authorization'] = token;
        this.setState({response:false})
    axios.get("https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/profile/readprofile(email='"+email+"')/Set").then((result)=>{
        // console.log(result);
        this.setState({profileinfomation : result.data.value[0],
        response:true});
        console.log(this.state)
        console.log(this.state.profileinfomation.EMAIL_ID)
    })
    .catch((e)=>{
        console.log(e)
        })
    }
    
    componentDidMount() {
        this.getProfileInfo()
      };

      render() {
    return (
        
        this.state.response ?<ProfileInfo EMAIL={this.state.profileinfomation.EMAIL_ID} IDNO={this.state.profileinfomation.IDNO} NAME={this.state.profileinfomation.NAME} NTID={this.state.profileinfomation.NTID} DEPT={this.state.profileinfomation.DEPT} USERNAME={this.state.profileinfomation.USERNAME}/> : <Loading/>
    );
      }
    
}

export default withRouter(Profile);