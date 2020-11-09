import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';

import Loading from '../loading/loading'
import Qpostcard from './qpostcard'
import './questions.scss'
import PostQuestion from './postquestion';

class Questions extends Component{

    constructor() {
        super();
        this.state = {
            questions: [],
            loading:false,
            session:'loading...',
            post:false
        };
    }

    load=(<Loading/>)
    
    quesionReq=()=>{

    let t = localStorage.getItem('token')
    if(!t){
        return this.props.history.push({pathname:'/index.html#login'});
    }
    let email_local = localStorage.getItem('email')
    let token='requester='+email_local+';rbei_access_token='+t
    axios.defaults.headers.common['Authorization'] = token;

    let session=this.props.location.pathname.split('/')[2];
    this.setState({loading:true})
    axios.get('https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/qa/questions?$expand=ANSWERS&$filter=SESSION eq %27'+session+'%27')
    .then((result)=>{
        this.setState({questions:result.data.value,loading:false});
    })
    .catch(e=>{
        console.log(e);
        this.setState({loading:false});
    })
    axios.get("https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/agenda/session_topics?$filter=SESSION_ID eq '"+session+"'")
    .then((result)=>{
        let topics=[];

        for (let i = 0; i < result.data.value.length; i++) {
            topics.push(result.data.value[i].SUB_TOPIC);
        }

        topics = [...new Set(topics)];
        let str = topics.toString();
        this.setState({session:str});
    })
    .catch(e=>{
        console.log(e);
    })
    }

    close=()=>{
        this.setState({post:!this.state.post})
    }

    postQuestion=()=>{
        let session=this.props.location.pathname.split('/')[2];
        let question=document.getElementById('question').value;
        if(question.length===0){
            return
        }
        let user=localStorage.getItem('email');
        console.log(session,question,user);
        this.setState({loading:true});
        axios.post("https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/qa/questions",{
            "SESSION":session,
            "QUESTION":question,
            "USER":user
        })
        .then((result)=>{
            this.setState({loading:false})
            this.quesionReq();
            document.getElementById('question').value=''
            console.log(result)
        })
        .catch(e=>{
            console.log(e)
            this.setState({loading:false})
        })
    }

    componentDidMount() {
        this.quesionReq();
    }

    render() {

    return(
    <div className='questions'>
        <div className='title'>
            <label>{this.state.session}</label>
            <button className="rb-button rb-button--primary" title="Back" onClick={()=>{this.props.history.push({ pathname: "/"})}}>
            <i  className="boschicon-bosch-ic-back-left" ></i> Back
            </button>
            <button type='button' onClick={()=>{this.setState({post:!this.state.post})}} className='rb-button rb-button--primary'>Ask a Question</button>
        </div>

        {this.state.questions.map((question)=>{
            return <Qpostcard
                question={question}
                key={question.Q_ID}
                quesionReq={this.quesionReq}
            />
        })}
        {this.state.loading ? <Loading/> : null}
        {this.state.post ? <PostQuestion quesionReq={this.quesionReq} title={this.state.session} toggle={this.close}/> : null}
    </div>
    )
    }
}

export default withRouter(Questions);