import React, {Component} from 'react'
import Location from "./Location.js"
class CurrentTemp extends Component {
  render() {

    return (
      <div className="current-temp">
        <Location state={this.props.state} city={this.props.city}/>
        <div className="current-temp-content">
        <h2> temp:</h2>
        <h2>{this.props.temp} deg</h2>
        </div>
      </div>

    )
  }
}


export default CurrentTemp
