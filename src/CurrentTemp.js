import React, {Component} from 'react'
import Location from "./Location.js"
class CurrentTemp extends Component {
  render() {

    return (
      <div className="current-temp">
        <Location/>
        <div className="current-temp-content">
        <h2>Today:</h2>
        <h3>70/35</h3>
        </div>
      </div>

    )
  }
}


export default CurrentTemp
