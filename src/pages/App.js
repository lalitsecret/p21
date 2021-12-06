import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
export default function App() {
  return <React.Fragment>
     <Header/>
      <Router>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Signup" component={Signup}/>
          <Route exact path="/Dashboard" component={Dashboard}/>
        </Switch>
        <Router/>
      <Footer/>
  </React.Fragment>;
}
