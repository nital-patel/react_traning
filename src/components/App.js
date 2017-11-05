import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <h1> This is some text</h1>

    );
  }

  }

  const mapStateTopProps = function (state) {
    return {
      username: state.username
    };
  }
  export default connect(mapStateTopProps)(App);