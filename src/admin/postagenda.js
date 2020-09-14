import React ,{useState}from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'

// import Post from './post'
import './postagenda.scss'

const PostAgenda = (props) => {
    let t = localStorage.getItem('token')
        if(!t){
            // return this.props.history.push({pathname:'/login'});
        }
    let email_local = localStorage.getItem('email')
    let token='requester='+email_local+';rbei_access_token='+t
    axios.defaults.headers.common['Authorization'] = token;

    const [fields, setFields] = useState([{ USER_EMAIL: null , SUB_TOPIC:null }]);

    let handleChangeEmail=(i, event)=> {
        const values = [...fields];
        values[i].USER_EMAIL = event.target.value;
        setFields(values);
      }

    let handleChangeTopic=(i, event)=> {
        const values = [...fields];
        values[i].SUB_TOPIC = event.target.value;
        setFields(values);
      }

    let handleAdd=()=> {
        const values = [...fields];
        values.push({ USER_EMAIL: null , SUB_TOPIC:null });
        setFields(values);
      }

    let handleRemove=(i)=> {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
      }
    
    let post=()=>{
        let title=document.getElementById('title').value
        let date=document.getElementById('date').value
        let desc=document.getElementById('description').value
        console.log(title,date,desc,fields)
        axios.post('https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/agenda/sessions',{
            DATE:date,
            TITLE:title,
            DESC:desc,
            TOPICS:fields
        })
        .then((result)=>{
            alert('session uploaded sucessfully')
        })
        .catch(e=>{
            console.log(e)
            alert('something went wrong')
        })
    }
    
    return(<div className='agenda'>
        <label>Title  </label>
        <input type='text' id='title'></input>
        <label>  Date  </label>
        <input type='date' id='date'></input><br></br><br></br>
        <label className='desclabel'>Description  </label>
        <textarea id='description' rows = "5" cols = "70" className='desc' placeholder='Some description about the session'></textarea>
        <i className='boschicon-bosch-ic-add' onClick={handleAdd}></i>
        {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <label>Presentor Email  </label>
            <input type='text' onChange={e => handleChangeEmail(idx, e)}></input>
            <label>     Topic    </label>
            <input type='text' onChange={e => handleChangeTopic(idx, e)} ></input>
            <button type="button" onClick={() => handleRemove(idx)}>
              X
            </button>
          </div>
        );
      })}
      <div className='submit'>
      <button type='button' className="rb-button rb-button--primary" onClick={post}>Submit</button>
      </div>
    </div>)
}

export default withRouter(PostAgenda);