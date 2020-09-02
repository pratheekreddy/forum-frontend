import React, { Component } from 'react';
import axios from 'axios';

import Postcards from './postcards'
class PostcardContainer extends Component {
  constructor() {
    super();
    this.state = {
      session: []
    };
  }  
    user='chathia chandran'
  reset = () => {
    let token=localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = token;
    const post = axios.get(
      "https://rbei-cloud-foundry-dev-rbei-cap-njs-forum-srv.cfapps.eu10.hana.ondemand.com/agenda/sessions?$expand=TOPICS,FILES&$orderby=DATE%20desc"
    );
    post
      .then((result) => {
        this.setState({ session: result.data.value });
      })
      .catch((e) => {
          console.log(e)
        this.setState({ session: [] });
      });
  };

  componentDidMount() {
    this.reset();
  } 
   render() {
       console.log(Object.keys(process.env))
    // console.log(props)
    return (
        <Postcards session={this.state.session}/>
    )} 
}

export default PostcardContainer;
