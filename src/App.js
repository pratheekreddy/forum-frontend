import React, { Component } from 'react';
import axios from 'axios';

import './postcard/styles.css'
import Headers from './header'
import Postcards from './postcard/postcards'

class App extends Component {

 reset=()=>{
  const post=axios.get('https://cors-anywhere.herokuapp.com/https://0ze03xvnwoa4ncstcap-njs-forum-srv.cfapps.eu10.hana.ondemand.com/agenda/sessions?$expand=TOPICS,FILES');
  post.then((result)=>{

    this.setState({session:result.data.value})
  }).catch((e)=>{
    this.setState({session:[]})
  })
  }

  componentDidMount(){
    this.reset()
  }

state={
      session:[],
      showSessions:false
  }

  render() {
    return (
      <div >
      <Headers/>
      <Postcards session={this.state.session}/>
      </div>
    );
  }
}

export default App;