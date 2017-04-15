import React, {Component} from 'react'
import Location from "./Location.js"
class CurrentTemp extends Component {
  render() {

    return (
      <div className="current-temp">
        <Location state={this.props.state} city={this.props.city}/>
      </div>

    )
  }
}


export default CurrentTemp
