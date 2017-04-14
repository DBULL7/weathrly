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
      currentWeather:{},
      hourlyList:[],
      dailyList:[]

    }
  }

  componentDidMount() {
    let city  = localStorage.getItem('city')
    let State = localStorage.getItem('State')
    this.setState({city: city ? city : '', State: State ? State : ''}, () => {
      if( this.state.State == "") {
        console.log("!!")
        navigator.geolocation.getCurrentPosition(this.findLocation.bind(this))
      } else {
        $.getJSON(
          `http://api.wunderground.com/api/3d896652346518f2/hourly10day/q/${this.state.State}/${this.state.city}.json`
        ).then(weather => this.apiEdit(weather))
      }
    })
  }

  findLocation(position) {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    console.log(latitude)
    console.log(longitude)
    $.getJSON(
      `http://api.wunderground.com/api/3d896652346518f2/geolookup/q/${latitude},${longitude}.json`

    ).then(weather => {
      let zip = weather.location.zip
      $.getJSON(
        `http://api.wunderground.com/api/3d896652346518f2/hourly10day/q/${zip}.json`
      ).then(locationWeather => {
        console.log(locationWeather);
        this.setState({city: 'Your Location'})
        this.apiEdit(locationWeather)
      }).catch(() => {
        alert(`We can't find your location`)
      })
    })
  }

  sendLocation(){
    this.apiCall()
  }

  dailyUpdate(input){
    let tempArr = []
    input.forEach((value,index)=>{

      if(index%24===0){

        tempArr.push(input[index])
    }
    })
tempArr[10]="!"
  this.setState({dailyList:tempArr})
  }

  hourlyUpdate(input){
    let tempArr = []

    input.forEach((value,index)=>{
      if(index<10){
        tempArr.push(input[index])
    }
    })
  this.setState({hourlyList:tempArr})
  }


  apiEdit(input){
       Object.keys(input.hourly_forecast).forEach((val)=>{
       this.setState({currentWeather:input})
      })

      this.setState({currentCity:this.state.city, currentState:this.state.State})
      let tempFeelsLike = this.state.currentWeather.hourly_forecast[0].feelslike.english
      this.setState({currentTemp: tempFeelsLike})
      this.hourlyUpdate(this.state.currentWeather.hourly_forecast)
      this.dailyUpdate(this.state.currentWeather.hourly_forecast)
  }


  apiCall() {
    localStorage.setItem('city', this.state.city)
    localStorage.setItem('State', this.state.State)

    $.get(
      // `http://api.wunderground.com/api/3d896652346518f2/forecast10day/q/${this.state.currentState}/${this.state.currentCity}.json`
      `http://api.wunderground.com/api/3d896652346518f2/hourly10day/q/${this.state.State}/${this.state.city}.json`
    ).then(weather => this.apiEdit(weather)).catch(() => {
      alert('Sorry Something Went Wrong ☹️, please enter a city, zipcode, or state')
    })
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
        <Main hourly={this.state.hourlyList}
          daily={this.state.dailyList}
          temp={this.state.currentTemp} city={this.state.currentCity} state={this.state.currentState}/>
      )
    }
  }

  handleKeyPress(event) {
    if(event.key == 'Enter' && this.state.city !== '') {
      this.apiCall()
    }
  }

  render() {
    return (
      <article>
        <Header handleKeyPress={this.handleKeyPress.bind(this)} sendLocation={this.sendLocation.bind(this)} updateLocation={this.updateLocation.bind(this)}/>
        {this.test()}
      </article>
    )
  }
}


export default App;
