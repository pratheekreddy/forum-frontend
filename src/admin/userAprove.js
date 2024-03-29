import React ,{Component}from 'react'
import axios from 'axios';

import User from './users'
import './userAprove.scss'
import Loading from '../loading/loading'

class Aprove extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            loading:false
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
        this.setState({loading:false})
        axios.get('https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/admin/users')
        .then((result)=>{
            // console.log(result.data)
            this.setState({users:result.data.value,loading:true})
        }).catch((e)=>{
            console.log(e)
        })
    }

    componentDidMount(){
        this.getusers()
    }        

render(){
    return(
        this.state.loading? <div >
            <User data={this.state.users}/>
        </div> :<Loading/>
    )
}
}
export default Aprove;