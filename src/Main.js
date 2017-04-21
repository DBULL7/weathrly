import React, {Component} from 'react'
// import CurrentTemp from './CurrentTemp'
import List from './List'
import "./main-css/Main.css"


let Main = (hourly, daily, temp, city, state, weather, icon, feelslike, condition, high, low, summary) => {
  return (
    <div className="main-content">
      <div className="current-temp">
        <div className="current-location-container">
          <div className="city">{city},</div>
          <div className="State">{state}</div>
        </div>
      </div>
      <div className="main-container">
          <div className="current-temp-content">
            <h2>Today</h2>
            <img src={icon} alt="current weather icon"/>
            <h2>Current: {temp}&#8457;</h2>
            <h2>{condition}, feels like {feelslike}</h2>
            <h2>High: {high} Low: {low}</h2>
            <h2>Forecast: {summary}</h2>
          </div>
        {List("daily-forecast", weather, hourly, "hour", "Hourly")}
      </div>
    {List('ten-day-forecast', weather, daily, 'day', "10 Day Forecast")}
  </div>
  )
}




export default Main
