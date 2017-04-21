import React, { Component } from 'react'
import './main-css/App.css'
import Header from './Header'
import Main from './Main'
import $ from 'jquery'
var key = require("./apiKey")
var myKey = key.key


class App extends Component {

  constructor(){
    super()
    this.state={
      currentCity: '',
      currentState: '',
      currentTemp: '',
      city: "",
      State:"",
      currentWeather:{},
      hourlyList:[],
      dailyList:[],
      icon: "",
      feelslike: '',
      condition: '',
      high: '',
      low: '',
      summary: '',
      apiSource:"http://api.wunderground.com/api",
      loading: false
    }
  }

  componentDidMount() {
    let city  = localStorage.getItem('city')
    let State = localStorage.getItem('State')
    this.setState({city: city ? city : '', State: State ? State : ''}, () => {

      if(this.state.State === "" && city === undefined) {
        navigator.geolocation.getCurrentPosition(this.findLocation.bind(this))
      } else {
        $.getJSON(
          `${this.state.apiSource}/${myKey}/forecast/hourly/hourly10day/q/${State}/${city}.json`
        ).then(weather => this.apiEdit(weather))
      }
    })
  }

  findLocation(position) {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    $.getJSON(
      `${this.state.apiSource}/${myKey}/geolookup/q/${latitude},${longitude}.json`

    ).then(weather => {
      let zip = weather.location.zip
      $.getJSON(
        `${this.state.apiSource}/${myKey}/forecast/hourly/hourly10day/conditions/q/${zip}.json`
      ).then(locationWeather => {
        this.setState({city: locationWeather.current_observation.display_location.city, State: locationWeather.current_observation.display_location.state_name})
        localStorage.setItem('city', locationWeather.current_observation.display_location.city)
        localStorage.setItem('State', locationWeather.current_observation.display_location.state_name)
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
      input[index].hasOwnProperty("weatherData") ? null :input[index].weatherData=input
      tempArr.push(input[index])
      }
    })
    tempArr[10]="!"
    this.setState({dailyList:tempArr})
  }

  hourlyUpdate(input){
    let tempArr = []

    input.forEach((value,index)=>{
      if(index<7){
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
      let tempFeelsLike = this.state.currentWeather.hourly_forecast[0].temp.english
      this.setState({currentTemp: tempFeelsLike})
      this.hourlyUpdate(this.state.currentWeather.hourly_forecast)
      this.dailyUpdate(this.state.currentWeather.hourly_forecast)
      let icon = this.state.currentWeather.hourly_forecast[0].icon_url
      this.setState({icon: icon})
      let feelslike = this.state.currentWeather.hourly_forecast[0].feelslike.english
      this.setState({feelslike: feelslike})
      let condition = this.state.currentWeather.hourly_forecast[0].condition
      this.setState({condition: condition})
      let high = this.state.currentWeather.forecast.simpleforecast.forecastday[0].high.fahrenheit
      this.setState({high: high})
      let low = this.state.currentWeather.forecast.simpleforecast.forecastday[0].low.fahrenheit
      this.setState({low: low})
      let summary = this.state.currentWeather.forecast.txt_forecast.forecastday[0].fcttext
      this.setState({summary: summary})
      this.setState({loading: false})
  }


  apiCall() {

    if(this.state.State === '') {
      $.getJSON(
        `http://autocomplete.wunderground.com/aq?cb=?&query=${this.state.city}`
      ).then(autocomplete => {
        if(autocomplete.RESULTS.length === 0) {
          alert('Sorry Something Went Wrong ☹️, please enter a city, zipcode, or state')
        } else {
          let probableLocation = autocomplete.RESULTS[0].name.split(',')
          localStorage.setItem('city', probableLocation[0])
          localStorage.setItem('State', probableLocation[1])
          $.get(
            `${this.state.apiSource}/${myKey}/forecast/hourly/hourly10day/conditions/q/${probableLocation[1]}/${probableLocation[0]}.json`
          ).then(weather => {
            this.apiEdit(weather)
            this.setState({currentState: probableLocation[1]})
          })
        }
      })
    } else {
      localStorage.setItem('city', this.state.city)
      localStorage.setItem('State', this.state.State)

      $.get(
        `${this.state.apiSource}/${myKey}/forecast/hourly/hourly10day/conditions/q/${this.state.State}/${this.state.city}.json`
      ).then(weather => this.apiEdit(weather)).catch(() => {
        alert('Sorry Something Went Wrong ☹️, please enter a city, zipcode, or state')
      })
    }

  }

  updateLocation(input){
    var location = input.split(',')
    var  city = location[0]
    var  state = location[1] ? location[1] :""
    this.setState({city:city, State:state})
  }

  handleKeyPress(event) {
    if(event.key === 'Enter' && this.state.city !== '') {
      this.apiCall()
    }
  }

  findLocationKeyPress() {
    this.setState({loading: true})
    navigator.geolocation.getCurrentPosition(this.findLocation.bind(this))
  }

  mainRender() {
    if(this.state.currentCity !== '') {
      return (
        Main(
             this.state.hourlyList,
             this.state.dailyList,
             this.state.currentTemp,
             this.state.currentCity,
             this.state.currentState,
             this.state.currentWeather,
             this.state.icon,
             this.state.feelslike,
             this.state.condition,
             this.state.high,
             this.state.low,
             this.state.summary
           )
      )
    }

    return (
      <h2 className="welcome">
        Welcome. To get weather conditions please enter a City, zip code, or click Find Location
      </h2>
    )

  }
  render() {
    return (
      <article>
        <Header
          findLocation={this.findLocationKeyPress.bind(this)}
          handleKeyPress={this.handleKeyPress.bind(this)}
          sendLocation={this.sendLocation.bind(this)}
          updateLocation={this.updateLocation.bind(this)}
          loading={this.state.loading}
        />
        {this.mainRender()}
      </article>
    )
  }
}


export default App;
