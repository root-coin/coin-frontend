import React, { Component } from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';

//components
import Nav from './components/Nav';
import NavUnder from './components/NavUnder';
import Main from './components/Main';
import Trade from './components/Trade';
import Login from './components/Login';
import SignUp from './components/SignUp';

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

class PageGame extends Component {
  render(){
    return(
      <div>
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
      </div>
    )
  }
}

class PageSignUp extends Component {
  render(){
    return(
      <div>
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
        <Route path="/game" component={PageGame} exact></Route>
      </div>
    );
  }
}

export default App;
