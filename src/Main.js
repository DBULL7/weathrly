import React, {Component} from 'react'
import CurrentTemp from './CurrentTemp'
import List from './List'
import "./Main.css"

class Main extends Component {
  render() {
    return (

      <div className="main-content">
        <CurrentTemp temp={this.props.temp} city={this.props.city}  state={this.props.state} icon={this.props.icon} feelslike={this.props.feelslike}/>
        <div className="main-container">
          <div className="current-temp-content">
            <h2>Today</h2>
            <img src={this.props.icon} alt="current weather icon"/>
            <h2>Current: {this.props.temp}&#8457;</h2>
            <h2>{this.props.condition}, feels like {this.props.feelslike}</h2>
            <h2>Hi: {this.props.high} Low: {this.props.low}</h2>
            <h2>Forecast: {this.props.summary}</h2>
          </div>
          <List id="daily-forecast" listItems={this.props.hourly} type="hour" title="Hourly"/>
        </div>
          <List id="ten-day-forecast" weather={this.props.weather} listItems={this.props.daily}  type="day" title="10 Day Forecast"/>
      </div>
    )
  }
}


export default Main
