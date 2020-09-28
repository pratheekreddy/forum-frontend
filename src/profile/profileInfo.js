import React,{Component} from "react";
import axios from 'axios'

import Loader from '../loading/loading'

class ProfileInfo extends Component {

    constructor(props) {
        super(props);
        this.state = ({
          props: props,
          name:props.NAME,
          dept:props.DEPT,
          username:props.USERNAME,
          loading:false
        });
      }
    // console.log(props)
     t = localStorage.getItem('token')
     email=localStorage.getItem('email')
     email_local = localStorage.getItem('email')
     token='requester='+this.email_local+';rbei_access_token='+this.t
    
     load=(<Loader/>)

     enableElement = (id) => {
        document.getElementById(id).disabled = false;
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
        // console.log(e.target.id)
      }

    update = () => {
        let name = document.getElementById('name').value;
        let dept = document.getElementById('dept').value;
        let username = document.getElementById('username').value;
        axios.defaults.headers.common['Authorization'] = this.token;
        this.setState({loading:true})
         axios({url:"https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/profile/updateprofile('"+this.email+"')",data:{
             "DEPT": dept,
             "USERNAME": username,
             "NAME":name
         },method:'PATCH'})
         .then((result)=>{
             this.setState({loading:false})
             alert('Profile updated sucessfully')
             localStorage.setItem('name',name)
         })
     }

     render(){
    return(        
    <div>
        <div className='updateprofile'>
            <label>E-mail </label>
            <input type='text' placeholder="krishnan.gautam@in.bosch.com" value={this.props.EMAIL} id="email" disabled></input>
            <label>Username </label>
            <input type='text' placeholder="Gomzi" onChange={this.onChange}  value={this.state.username} id="username" disabled></input>
            {/* <i className="boschicon-bosch-ic-edit" onClick={(() => this.enableElement("username"))}></i> */}
            <label>Employee ID </label>
            <input type='text' placeholder="33378755" id="idno" value={this.props.IDNO} disabled></input>
            <label>NT-ID </label>
            <input type='text' placeholder="TKG1KOR" value={this.props.NTID} id="ntid" disabled></input>
            <label>Full Name </label>
            <input type='text' placeholder="Gautam Krishnan" onChange={this.onChange} value={this.state.name} id="name" disabled></input>
            <i className="boschicon-bosch-ic-edit" onClick={(() => this.enableElement("name"))}></i>
            
            <label>Department </label>
            <input type='text' placeholder="RBEI/BLS5" onChange={this.onChange}  value={this.state.dept} id="dept" disabled></input>
            <i className="boschicon-bosch-ic-edit" onClick={(() => this.enableElement("dept"))}></i>
            
            <button className="rb-button rb-button--primary" onClick={this.update}>Update</button>
        </div>
        {this.state.loading? this.load:null}
    </div>
    )
     }
}

export default  ProfileInfo