import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Main from './Main'



class App extends Component {
  render() {
    return (
      <article>
        <Header/>
        <Main/>
      </article>
    )
  }
}

export default App;
