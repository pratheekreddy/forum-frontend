import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";//, Link 

import './postcard/styles.css'
import Headers from './header'
import Postcards from './postcard/postcards'
import  Login from './login/login'

class App extends Component {

  constructor() {
    super();
    this.state = {
      session: [],
      showPopup: false
    }
  }
 user='pratheek'
  reset = () => {
    const post = axios.get('https://cors-anywhere.herokuapp.com/https://0ze03xvnwoa4ncstcap-njs-forum-srv.cfapps.eu10.hana.ondemand.com/agenda/sessions?$expand=TOPICS,FILES&$orderby=DATE%20desc');
    post.then((result) => {

      this.setState({ session: result.data.value })
    }).catch((e) => {
      this.setState({ session: [] })
    })
  }

  componentDidMount() {
    this.reset()
  }

  // state={
  //       session:[],
  //       showPopup:false
  //   }
  postc=()=>{
      return(
        <Postcards
          session={this.state.session}
          showPopup={this.state.showPopup}
        />
      )
  }

  render() {
    return (<Router>
      <div >
      <div className="sticky">
        <Headers user={this.user}/>
        </div>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/landing' component={this.postc} />
        </Switch>
      </div></Router>
    );
  }
}

export default App;