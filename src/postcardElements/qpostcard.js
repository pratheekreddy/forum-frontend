import React , {useState} from 'react';

import Answers from './answer';
import Post from './postAnswer';
import './questions.scss';

const QPostcard=(props)=>{
    // console.log(props)
    const [toggle,setToggle]=useState(false)
    const funToggle=()=>{
        setToggle(!toggle);
    }
    return(
        <div className='qpostcard'>
            <p> <span className='A'>Q.</span> <strong>{props.question.QUESTION}</strong><span style={{"fontStyle":"italic",fontSize:"14px"}}> - {props.question.USER}</span></p>
            {
                props.question.ANSWERS.map((answer,i)=>{
                    return <Answers
                        answer={answer}
                        index={i}
                        key={answer.A_ID}
                    />
                })
            }
                <button type='button' className='rb-button rb-button--primary' onClick={()=>funToggle()}>Post an Answer</button>
                {toggle ? <Post quesionReq={props.quesionReq} toggle={funToggle} qid={props.question.Q_ID} question={props.question.QUESTION}/>: null}
        </div>
    )

}
export default QPostcard;