import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Main from './Main'
import $ from 'jquery'



class App extends Component {

  constructor(){
    super()
    this.state={
      currentCity:"Seattle",
      currentState:"Washington",
      currentTemp: 66,
      city: "",
      State:"",
      currentWeather:{}
    }
  }


  handleCurrentWeather(){
    var abe = this.state.currentWeather.hourly_forecast[0].feelslike.english
    console.log(abe)
    this.setState({currentTemp:abe})
  }

  sendLocation(){
    this.setState({ currentCity:this.state.city, currentState:this.state.State })

    this.apiCall()
    this.handleCurrentWeather()
  }

apiEdit(input){
     Object.keys(input.hourly_forecast).forEach((val)=>{
     this.setState({currentWeather:input})
    })
}


  apiCall() {
    if (this.state.currentState == "") {
      return console.log(typeof this.state.currentState)
    } else {
      $.getJSON(
        // `http://api.wunderground.com/api/3d896652346518f2/forecast10day/q/${this.state.currentState}/${this.state.currentCity}.json`
        `http://api.wunderground.com/api/3d896652346518f2/hourly10day/q/${this.state.currentState}/${this.state.currentCity}.json`
      ).then(weather => this.apiEdit(weather) )


    }
  }

  updateLocation(input){
    var location = input.split(',')
    var  city = location[0]
    var  state = location[1] ? location[1] :""
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
