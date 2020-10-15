import React, { Component } from 'react';
import axios from 'axios';

import Postcards from './postcards'
import Loading from '../loading/loading'
import List from './searchlist'

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
                this.setState({ session: result.data.value ,loading:true,searchlist:[]});
                // document.getElementById('search').value = ''
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
            axios.get('https://rbei-cloud-foundry-dev-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/user/search?search='+value)
            .then(result=>{
                this.setState({searchlist:result.data})
            })
            .catch(e=>{
                console.log(e)
            })
          }, 300);
    }

    getSearch=(id)=>{

        this.setState({loading:false,searchlist:[]})
        axios.get("https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/agenda/sessions?$expand=TOPICS,FILES&$orderby=DATE%20desc&$filter=ID eq '"+id+"'")
        .then(result1=>{
            this.setState({ session: result1.data.value ,loading:true,searchlist:[]});
        })
        .catch(e=>{
            console.log(e)
        })
    }

    render() {
        return (
            <div>
                <div className="search-content">
                    <input id='search' className="search"  placeholder="Search" onChange={e=>this.searchRequest(e.target.value)}></input>
                    <i style={{width:'25px',height:'25px'}} onClick={this.reset} className="boschicon-bosch-ic-reset"> </i>
                    <List list={this.state.searchlist} search={this.getSearch}></List>
                </div>
                <div className="postcords_div">
                    {this.state.loading?<Postcards session={this.state.session} no_of_sessions = {this.state.session.length} /> : <Loading/>}
                </div>
            </div>
        )
    }
}

export default PostcardContainer;
