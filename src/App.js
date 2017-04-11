import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Main from './Main'



class App extends Component {

  constructor(){
    super()
    this.state={
      currentCity:"San-Fran",
      currentState:"Cali",
      currentTemp:59,
      city: "",
      State:""
    }
  }

  sendLocation(){
    this.setState({currentCity:this.state.city,currentState:this.state.State} )
  }

  updateLocation(input){
    var location = input.split(',')
    var  city = location[0]
    var  state = location[1]
    this.setState({city:city, State:state})
  }


  render() {
    return (
      <article>
        <Header sendLocation={this.sendLocation.bind(this)} updateLocation={this.updateLocation.bind(this)}/>
        <Main temp={this.state.currentTemp} city={this.state.currentCity} state={this.state.currentState}/>
      </article>
    )
  }
}

export default App;
