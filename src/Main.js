import React, {Component} from 'react'
import CurrentTemp from './CurrentTemp'
import List from './List'
import "./Main.css"

class Main extends Component {
  render() {
    return (

      <div className="main-content">
      <CurrentTemp temp={this.props.temp} city={this.props.city}  state={this.props.state} icon={this.props.icon} feelslike={this.props.feelslike}/>
      <main className="list-container">
        <List listItems= {this.props.hourly} type = "hour" title="Hourly"/>
        <List weather= {this.props.weather} listItems= {this.props.daily}  type  = "day" title="10 Day Forecast"/>
      </main>
      </div>
    )
  }
}


export default Main
