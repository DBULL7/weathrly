import React, {Component} from 'react'
import CurrentTemp from './CurrentTemp'
import List from './List'
import "./Main.css"

class Main extends Component {
  render() {
    return (

      <div className="main-content">
      <CurrentTemp temp={this.props.temp} city={this.props.city}  state={this.props.state} icon={this.props.icon} feelslike={this.props.feelslike}/>
<div className= "main-container">
      <div className="current-temp-content">
      <h2>Today</h2>
      <img src={this.props.icon}/>
      <h2>Current: {this.props.temp}&#8457;</h2>
      <h2>Feels Like: {this.props.feelslike}</h2>
      <h2>Hi:  Low: </h2>
      </div>

      <main className="list-container">
        <List listItems= {this.props.hourly} type = "hour" title="Hourly"/>
        <List weather= {this.props.weather} listItems= {this.props.daily}  type  = "day" title="10 Day Forecast"/>
      </main>
      </div>
      </div>
    )
  }
}


export default Main
