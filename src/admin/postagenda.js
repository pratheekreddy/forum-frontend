import React, { useState } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'

// import Post from './post'
import './postagenda.scss'
import Loading from '../loading/loading'

const PostAgenda = (props) => {
  let t = localStorage.getItem('token')
  if (!t) {
    // return props.history.push({pathname:'/login'});
  }
  let email_local = localStorage.getItem('email')
  let token = 'requester=' + email_local + ';rbei_access_token=' + t
  axios.defaults.headers.common['Authorization'] = token;

  const [fields, setFields] = useState([{ USER_EMAIL: null, SUB_TOPIC: null }]);
  const [loading, setLoading] = useState(false)
  let handleChangeEmail = (i, event) => {
    const values = [...fields];
    values[i].USER_EMAIL = event.target.value;
    setFields(values);
  }

  let handleChangeTopic = (i, event) => {
    const values = [...fields];
    values[i].SUB_TOPIC = event.target.value;
    setFields(values);
  }

  let handleAdd = () => {
    const values = [...fields];
    values.push({ USER_EMAIL: null, SUB_TOPIC: null });
    setFields(values);
  }

  let handleRemove = (i) => {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  let load = (<Loading />)

  let post = () => {
    let title = document.getElementById('title').value
    let date = document.getElementById('date').value
    let desc = document.getElementById('description').value
    console.log(title, date, desc, fields)
    setLoading(true)
    // setFields([{ USER_EMAIL: null , SUB_TOPIC:null }])
    axios.post('https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/agenda/sessions', {
      DATE: date,
      TITLE: title,
      DESC: desc,
      TOPICS: fields
    })
      .then((result) => {
        setLoading(false)
        alert('session uploaded sucessfully')
      })
      .catch(e => {
        console.log(e)
        alert('something went wrong')
      })
  }

  return (<div className='agenda'>
    <h2>Add New Agenda</h2>
    <ul>
      <li className="title">
        <label>Title  </label>
        <input type='text' id='title'></input>
      </li>
      <li className="date">
        <label>  Date  </label>
        <input type='date' id='date'></input>
      </li>
      <li className="desc">
        <label>Description  </label>
        <textarea id='description'></textarea>
      </li>
    </ul>
    <div className="presenters">
      <h4>Presenters <i className='boschicon-bosch-ic-add' title="Add Presenter" onClick={handleAdd}></i></h4>
      {fields.map((field, idx) => {
        return (
          <ul key={`${field}-${idx}`}>
            <li className="presenter">
              <label>Presentor</label>
              <input type='text' onChange={e => handleChangeEmail(idx, e)}></input>
            </li>
            <li className="topic">
              <label>Topic</label>
              <input type='text' onChange={e => handleChangeTopic(idx, e)} ></input>
            </li>
            <li className="remove"><i title="Remove Presenter" className="boschicon-bosch-ic-close" onClick={() => handleRemove(idx)}></i></li>
          </ul>
        );
      })}
    </div>
    <div className='submit'>
      <button type='button' className="rb-button rb-button--primary" onClick={post}>Submit</button>
      <div className="clear"></div>
    </div>
    {loading ? load : null}
  </div>)
}

export default withRouter(PostAgenda);