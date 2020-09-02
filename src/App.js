import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";//, Link 

import "./postcard/styles.css";
import Headers from "./header";
import Footers from "./footer/footer";
import Login from "./login/login";
import Signup from "./login/signup"
import PostcardContainer from './postcard/PostcardContainer'
class App extends Component {


  render() {
       console.log(Object.keys(process.env))
    // console.log(props)
    return (
      <Router>
        <div>
          <div className="sticky">
            <Headers user={this.user}/>
          </div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/landing" component={PostcardContainer} />
            <Route exact path="/signup" component={Signup}/>
          </Switch>
          <div className="footer">
            <Footers />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
