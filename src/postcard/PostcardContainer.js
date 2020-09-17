import React, { Component } from 'react';
import axios from 'axios';
import Postcards from './postcards'
import Loading from '../loading/loading'

class PostcardContainer extends Component {
    constructor() {
        super();
        this.state = {
            session: [],
            loading:false
        };
    }
    reset = () => {
        let t = localStorage.getItem('token')
        if(!t){
            // return this.props.history.push({pathname:'/login'});
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
            })
            .catch((e) => {
                alert('Please login again')
                console.log('error')
                // console.log(this.props.history)
                this.props.history.push({pathname:'/login'})
                // this.setState({ session: [] });
            });
    };

    componentDidMount() {
        this.reset();
    }
    render() {
        // console.log(Object.keys(process.env))
        // console.log(props)
        return (
            this.state.loading?<Postcards session={this.state.session} /> : <Loading/>
        )
    }
}

export default PostcardContainer;
