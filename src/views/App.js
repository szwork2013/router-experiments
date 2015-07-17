/*global __CLIENT__*/
import React from 'react';
import { Link } from 'react-router';
import { load } from '../actions/infoActions';
import InfoBar from '../components/InfoBar';

if (__CLIENT__) {
  require('../assets/App.scss');
}

export default class App {
  render() {
    return (
      <div className="container app">
        <div className="jumbotron">
          <h1>React Redux Example</h1>
        </div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sign-up">Sign Up</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
        </nav>
        <InfoBar/>

        <div className="app-content">
          {this.props.children}
        </div>
      </div>
    );
  }

  static fetchData(dispatch) {
    return dispatch(load());
  }
}

