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
      currentCity: 'Denver',
      currentState: 'Colorado',
      currentTemp: 70,
      city: "",
      State:"",
      currentWeather:{}
    }
  }

  componentDidMount() {
    let city  = localStorage.getItem('city')
    let State = localStorage.getItem('State')
    this.setState({city: city ? city : '', State: State ? State : ''}, () => {
      if( this.state.State == "") {
        console.log("damnit");
      } else {
        $.getJSON(
          `http://api.wunderground.com/api/3d896652346518f2/hourly10day/q/${this.state.State}/${this.state.city}.json`
        ).then(weather => this.apiEdit(weather))
      }
    })
  }

  sendLocation(){
    this.apiCall()
    this.handleCurrentWeather()
  }

apiEdit(input){
     Object.keys(input.hourly_forecast).forEach((val)=>{
     this.setState({currentWeather:input})
    })
    this.setState({currentCity:this.state.city, currentState:this.state.State})
    let tempFeelsLike = this.state.currentWeather.hourly_forecast[0].feelslike.english
    this.setState({currentTemp: tempFeelsLike})
}


  apiCall() {
    localStorage.setItem('city', this.state.city)
    localStorage.setItem('State', this.state.State)
    
    $.get(
      // `http://api.wunderground.com/api/3d896652346518f2/forecast10day/q/${this.state.currentState}/${this.state.currentCity}.json`
      `http://api.wunderground.com/api/3d896652346518f2/hourly10day/q/${this.state.State}/${this.state.city}.json`
    ).then(weather => this.apiEdit(weather) )
  }
  

  updateLocation(input){
    var location = input.split(',')
    var  city = location[0]
    var  state = location[1] ? location[1] :""
    this.setState({city:city, State:state})
  }

  test() {
    if (this.state.city != "") {
      return (
        <Main temp={this.state.currentTemp} city={this.state.currentCity} state={this.state.currentState}/>
      )
    }
  }

  render() {
    return (
      <article>
        <Header sendLocation={this.sendLocation.bind(this)} updateLocation={this.updateLocation.bind(this)}/>
        {this.test()}
      </article>
    )
  }
}

export default App;
