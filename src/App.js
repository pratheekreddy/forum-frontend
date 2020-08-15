import React, { Component } from 'react';
import PostCard from './session/Session'

import './App.css';
import './session/session.css'
import axios from 'axios';

class App extends Component {
  // state={
  //   persons:[{name:'pratheek',age:22},{name:'hartheek',age:1}]
  // }

  // switchnameHandler=()=>{
  //   // console.log('was clicked')
  //   // this.state.persons[0].name='gautam'
  //   this.setState({persons:[{name:'gautam',age:22},{name:'hartheek',age:33}]})
  // }
  componentDidMount(){
    const post=axios.get('https://cors-anywhere.herokuapp.com/https://bvirvg1malxybxpacap-njs-forum-srv.cfapps.us10.hana.ondemand.com/agenda/sessions?$expand=topics');
    post.then((result)=>{

      // console.log(result,result.data)
      // console.log('respose')
      this.setState({session:result.data.value})
 
    }).catch((e)=>{
      this.setState({session:[]})
    })
  }

  state={session:[
  // {session_id:'1',title:'node.js Forum',description:'this is node forum',date:'2020-12-12'},
  // {session_id:'2',title:'node.js Forum',description:'this is node forum number 2',date:'2020-12-13'},
  // {session_id:'3',title:'node.js Forum',description:'this is node forum number 3',date:'2020-12-14'},
  // {session_id:'4',title:'node.js Forum',description:'this is node forum number 4',date:'2020-12-14'},
  // {session_id:'5',title:'node.js Forum',description:'this is node forum number 5',date:'2020-12-14'}
],
showSessions:false
  }
  display=()=>{
    const status=this.state.showSessions
    this.setState({showSessions:!status})
  }

  deleteSession=()=>{

  }

  render() {

    let session=null
   // if(this.state.showSessions){
      session=(
        <div >
        {console.log('div',this.state.session)}
        {this.state.session.map(sessions=>{
          return <div><PostCard className="postCard"
          title={sessions.title} 
          description={sessions.desc } 
          date={sessions.date}
          key={sessions.id}
          session_id={sessions.id}
          topics={sessions.topics}
          > </PostCard></div>
        })}
          </div>
      )
    //}

    return (
      <div>

       <div className="App">
      
        <h1>Sessions</h1>
        {/* uncomment button and if statement for toggle option */}
        {/* <button onClick={this.display}>toggle sessions</button> */}
        
          {session}
        
       </div>
      </div>
    );
  }
}



export default App;
