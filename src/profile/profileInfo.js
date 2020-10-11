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
          idno: props.IDNO,
          ntid : props.NTID,
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

    disableElement = () => {
        document.getElementById("ntid").disabled = true;
        document.getElementById("idno").disabled = true;
        document.getElementById("name").disabled = true;
        document.getElementById("dept").disabled = true;
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
        // console.log(e.target.id)
      }

    update = () => {
        let name = document.getElementById('name').value;
        let dept = document.getElementById('dept').value;
        let username = document.getElementById('username').value;
        let idno = document.getElementById('idno').value;
        let ntid = document.getElementById('ntid').value;
        if(!name || !dept){
            return alert('Please fill in the mandatory fields')
        }
        if (!dept.startsWith("RBEI/")) {
            return alert("Please fill in the department as shown in the example");
          }
        axios.defaults.headers.common['Authorization'] = this.token;
        this.setState({loading:true})
         axios({url:"https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/profile/updateprofile('"+this.email+"')",data:{
             "DEPT": dept,
             "USERNAME": username,
             "NAME":name,
             "IDNO" : idno,
             "NTID" : ntid
         },method:'PATCH'})
         .then((result)=>{
             this.setState({loading:false})
             alert('Profile updated sucessfully')
             localStorage.setItem('name',name)
             this.disableElement()
         })
     }

     render(){
    return(        
    <div>
        <div className='updateprofile'>
            <label className="required">E-mail </label>
            <input type='text' placeholder="Eg. john@in.bosch.com" value={this.props.EMAIL} id="email" disabled></input>
            <label>Username </label>
            <input type='text' placeholder="Eg. Johnny" onChange={this.onChange}  value={this.state.username} id="username" disabled></input>
            {/* <i className="boschicon-bosch-ic-edit" onClick={(() => this.enableElement("username"))}></i> */}
            <label className="required">Full Name </label>
            <input type='text' placeholder="Eg. John Doe" onChange={this.onChange} value={this.state.name} id="name" disabled></input>
            <i className="boschicon-bosch-ic-edit" onClick={(() => this.enableElement("name"))}></i>
            <label className="required">Department </label>
            <input type='text' placeholder="Eg. RBEI/BSL1" onChange={this.onChange}  value={this.state.dept} id="dept" disabled></input>
            <i className="boschicon-bosch-ic-edit" onClick={(() => this.enableElement("dept"))}></i>
            <label>Employee ID </label>
            <input type='text' placeholder="Eg. 33345678" onChange={this.onChange} id="idno" value={this.state.idno} disabled></input>
            <i className="boschicon-bosch-ic-edit" onClick={(() => this.enableElement("idno"))}></i>
            <label>NT-ID </label>
            <input type='text' placeholder="Eg. JOD3COB" onChange={this.onChange} value={this.state.ntid} id="ntid" disabled></input>
            <i className="boschicon-bosch-ic-edit" onClick={(() => this.enableElement("ntid"))}></i>
            <button className="rb-button rb-button--primary" onClick={this.update}>Update</button>
        </div>
        {this.state.loading? this.load:null}
    </div>
    )
     }
}

export default  ProfileInfo