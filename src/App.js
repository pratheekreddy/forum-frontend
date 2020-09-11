import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";//, Link 

import "./postcard/styles.css";
import Headers from "./header/header";
import Footers from "./footer/footer";
import Login from "./login/login";
import Signup from "./login/signup";
import Profile from "./profile/profile";
import PostcardContainer from './postcard/PostcardContainer'
class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <div className="sticky">
            <Headers user={this.user}/>
          </div>
          <Switch>
            <Route exact path="/" component={PostcardContainer} />
            <Route exact path="/index.html" component={PostcardContainer} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/profile" component={Profile}/>
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
