import React , {useState} from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios'

import './questions.scss';
import Loading from '../loading/loading';

const PostQuestion=(props)=>{
    const [loding,setLoding]=useState(false)
    console.log(props)

    const postQuestion=()=>{
        let session=props.location.pathname.split('/')[2];
        let question=document.getElementById('question').value;
        if(question.length===0){
            return
        }
        let user=localStorage.getItem('email');
        console.log(session,question,user);
        setLoding(true);
        axios.post("https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/qa/questions",{
            "SESSION":session,
            "QUESTION":question,
            "USER":user
        })
        .then((result)=>{
            setLoding(false)
            props.quesionReq();
            document.getElementById('question').value=''
            console.log(result)
            props.toggle();
        })
        .catch(e=>{
            console.log(e)
            setLoding(false)
        })
    }

    return(
        <div>
            <div className='postanswer'>
                <div className='post'>
                    <i onClick={props.toggle} title="Back" className="boschicon-bosch-ic-close"></i>
                    <p>{props.title}</p>
                    <textarea id='question'></textarea>
                    <button type='button' onClick={postQuestion} className='rb-button rb-button--primary' >Post a Question</button>
                </div>
            </div>
            {loding ? <Loading/> : null}
        </div>
    )
}
export default withRouter(PostQuestion)