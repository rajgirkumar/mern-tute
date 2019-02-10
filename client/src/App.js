import React, { Component } from 'react';
import  Header  from "./components/Header/Header";
//import {Routers} from "./Router/index";
//import { Button, Form, FormGroup ,ControlLabel,FormControl} from "react-bootstrap";
import Error from "./components/Error";
import  About  from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Signup/login";
import Signup from "./components/Signup/signup";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/user/login" component={Login} />
              <Route exact path="/user/signup" component={Signup} />
              <Route component={Error} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App; 
