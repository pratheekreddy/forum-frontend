import React, { Component } from 'react';

import './postcard/header.css'
import './postcard/styles.css'
import logo from './postcard/bosch_logo.jpg'
import axios from 'axios';
import Postcard from './postcard/Postcard'

class App extends Component {

 reset=()=>{
  const post=axios.get('https://cors-anywhere.herokuapp.com/https://0ze03xvnwoa4ncstcap-njs-forum-srv.cfapps.eu10.hana.ondemand.com/agenda/sessions?$expand=TOPICS,FILES');
  post.then((result)=>{

    // console.log(result.data)
    this.setState({session:result.data.value})
  }).catch((e)=>{
    this.setState({session:[]})
  })
  }

  componentDidMount(){
    this.reset()
  }

  state={session:[],
showSessions:false
  }

  render() {

    let session=null

      session=(
        <div >
        {console.log('div',this.state.session)}
        {this.state.session.map((sessions,index)=>{
          {/* {console.log(sessions.ID)} */}
          return <div><Postcard 
          title={sessions.TITLE} 
          index={index}
          description={sessions.DESC } 
          date={sessions.DATE}
          key={sessions.ID}
          session_id={sessions.ID}
          topics={sessions.TOPICS}
          > </Postcard></div>
        })}
          </div>
      )

    let timeout =  0;

        //search 
    let search=(value)=>{
      if(value.length!==0){
    if(timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      
      let search=axios.get('https://i4jihdlx4gjr0iuaum-rbei-njs-forum.cfapps.us10.hana.ondemand.com/search?search='+value);
      search.then((result)=>{
        console.log('this is results',result)
        this.setState({session:result.data})
        
      }).catch((e)=>{
        console.log('error')
        this.setState({session:[]})
      })
      console.log(value)
    }, 600);
  }
  else {console.log('else')
  this.reset()
}
    }

    return (
      <div >
        <header className="class">
        <img className="img" src={logo}></img>   
        </header>
        <h1 className = 'application-name'>Forum Feed</h1>
      {/* <Postcard ></Postcard> */}
      {session}
      </div>
    );
  }
}


export default App;