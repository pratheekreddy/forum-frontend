import React , {useState} from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';

import './questions.scss'
import Loading from '../loading/loading';

const PostAnswer=(props)=>{
    const [loading,setLoading]=useState(false)
    
    const post=()=>{
        let session=props.location.pathname.split('/')[2];
        let answer=document.getElementById('answer').value;
        let user=localStorage.getItem('email');
        let qid=props.qid;
        
        setLoading(true);
        console.log(session,answer,user,qid);
        axios.post('https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/qa/answers',{
            "SESSION":session,
            "QUESTION_Q_ID": qid,
            "ANSWER":answer,
            "USER":user
        })
        .then((result)=>{
            props.toggle();
            console.log(result);
            setLoading(false)
        })
        .catch(e=>{
            console.log(e);
            setLoading(false);
        })
        
    }
    const trigger=()=>{
        post();
        props.quesionReq();
    }
    return(
        <div className='postanswer'>
            <div className='post'>
                <i onClick={props.toggle} title="Back" className="boschicon-bosch-ic-close"></i>
                <p>{props.question}</p>
                <textarea id='answer'></textarea>
                <button onClick={trigger} type='button' className='rb-button rb-button--primary' >Post an Answer</button>
            </div>
            {loading ? <Loading></Loading>:null}
        </div>
    )
}
export default withRouter(PostAnswer);