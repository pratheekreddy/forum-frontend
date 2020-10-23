import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./postcard/styles.css";
import Headers from "./header/header";
import Footers from "./footer/footer";
import Login from "./login/login";
import Signup from "./login/signup";
import Profile from "./profile/profile";
import PostcardContainer from "./postcard/PostcardContainer";
import PostAgenda from "./admin/postagenda";
import Aprove from "./admin/userAprove";
import Feedback from "./profile/feedback";
import About from "./profile/about";
import CacheBuster from "./CacheBuster";

class App extends Component {
  render() {
    return (
      <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload }) => {
          if (loading) return null;
          if (!loading && !isLatestVersion) {
            refreshCacheAndReload();
          }
          return (
            <Router>
              <div>
                <div className="sticky">
                  <Headers />
                </div>
                <Switch>
                  <Route exact path="/" component={PostcardContainer} />
                  <Route exact path="/index.html" component={PostcardContainer} />
                  <Route exact path="/index.html#login" component={Login} />
                  <Route exact path="/index.html#signup" component={Signup} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/postagenda" component={PostAgenda} />
                  <Route exact path="/approve" component={Aprove} />
                  <Route exact path="/feedback" component={Feedback} />
                  <Route exact path="/about" component={About} />
                </Switch>
                <div className="footer">
                  <Footers />
                </div>
              </div>
            </Router>
          );
        }}
      </CacheBuster>
    );
  }
}

export default App;
