import React, {Component} from 'react'
import Location from "./Location.js"
class CurrentTemp extends Component {
  render() {

    return (
      <div className="current-temp">
        <Location state={this.props.state} city={this.props.city}/>
        <div className="current-temp-content">
        <h2>Today</h2>
        <img src={this.props.icon}/>
        <h2>Current: {this.props.temp}&#8457;</h2>
        <h2>Feels Like: {this.props.feelslike}</h2>
        <h2>Hi:  Low: </h2>
        </div>
      </div>

    )
  }
}


export default CurrentTemp
