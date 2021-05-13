import React, { Component } from 'react';
import './App.css';

//router
import { Router, Route } from 'react-router-dom';

//components
import Nav from './components/Nav';
import NavUnder from './components/NavUnder';
import Main from './components/Main';
import Trade from './components/Trade';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Grow from './components/Grow';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class PageMain extends Component {
  render(){
    return(
      <div>
        <Nav />
        <Main />
        <NavUnder />
      </div>
    )
  }
}

class PageGrow extends Component {
  render(){
    return(
      <div>
        <Nav />
        <Grow />
        <NavUnder />
      </div>
    )
  }
}

class PageTrade extends Component {
  render(){
    return (
      <div>
        <Nav></Nav>
        <Trade></Trade>
        <NavUnder></NavUnder>
      </div>
    )
  }
}

class PageLogin extends Component {
  render(){
    return (
      <div>
        <Login />
      </div>
    )
  }
}

class PageSignUp extends Component {
  render(){
    return(
      <div>
        <SignUp/>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={PageMain} exact></Route>
        <Route path="/login" component={PageLogin} exact></Route>
        <Route path="/signUp" component={PageSignUp} exact></Route>
        <Route path="/trade" component={PageTrade} exact></Route>
        <Route path="/grow" component={PageGrow} exact></Route>
      </div>
    );
  }
}

export default App;
