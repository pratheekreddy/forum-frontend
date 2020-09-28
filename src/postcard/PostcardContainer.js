import React, { Component } from 'react';
import axios from 'axios';
import Postcards from './postcards'
import Loading from '../loading/loading'

class PostcardContainer extends Component {
    intervalID;
    constructor() {
        super();
        this.state = {
            session: [],
            searchlist:[],
            loading:false
        };
    }
    reset = () => {
        let t = localStorage.getItem('token')
        if(!t){
            return this.props.history.push({pathname:'/login'});
        }
        let email_local = localStorage.getItem('email')
        let token='requester='+email_local+';rbei_access_token='+t
        axios.defaults.headers.common['Authorization'] = token;
        this.setState({loading:false})
        const post = axios.get(
            "https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/agenda/sessions?$expand=TOPICS,FILES&$orderby=DATE%20desc"
        );
        post
            .then((result) => {
                this.setState({ session: result.data.value ,loading:true});
                // this.intervalID = setTimeout(this.reset.bind(this), 5000);
            })
            .catch((e) => {
                alert('Please login again')
                console.log(e)
                this.props.history.push({pathname:'/login'})
            });
    };

    componentDidMount() {
        this.reset();
    }

    timeout=0
    searchRequest(value){
        
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
  
            console.log(value)
          }, 600);
    }

    render() {
        return (
            <div>
            <input className="search" placeholder="Search" onChange={e=>this.searchRequest(e.target.value)}></input>
            <div className="postcords_div">
            {this.state.loading?<Postcards session={this.state.session} /> : <Loading/>}
            </div>
            </div>
        )
    }
}

export default PostcardContainer;
