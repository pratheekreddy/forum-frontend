import React ,{Component}from 'react'
import axios from 'axios';

import User from './users'
import './userAprove.scss'

class Aprove extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    getusers=()=>{
        let t = localStorage.getItem('token')
            if(!t){
                // return this.props.history.push({pathname:'/login'});
            }
        let email_local = localStorage.getItem('email')
        let token='requester='+email_local+';rbei_access_token='+t
        axios.defaults.headers.common['Authorization'] = token;
        axios.get('https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/admin/users')
        .then((result)=>{
            console.log(result.data)
            this.setState({users:result.data.value})
        }).catch((e)=>{
            console.log(e)
        })
    }

    componentDidMount(){
        this.getusers()
    }        

render(){
    return(
        <div style={{zIndex:-1}}>
            <User data={this.state.users}/>
        </div>
    )
}
}
export default Aprove;