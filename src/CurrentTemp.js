import React, {Component} from 'react'
import Location from "./Location.js"
class CurrentTemp extends Component {
  render() {

    return (
      <div className="current-temp">
        <Location state={this.props.state} city={this.props.city}/>
        <div className="current-temp-content">
        <h2>Today:</h2>
        <h3>{this.props.temp}</h3>
        </div>
      </div>

    )
  }
}


export default CurrentTemp
