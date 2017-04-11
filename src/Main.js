import React, {Component} from 'react'
import CurrentTemp from './CurrentTemp'
import List from './List'
import "./Main.css"

class Main extends Component {
  render() {
    return (

      <div className="main-content">
      <CurrentTemp temp={this.props.temp} city={this.props.city}  state={this.props.state}/>
      <main className="list-container">
        <List title="Hourly"/>
        <List title="10 Day Forecast"/>
      </main>
      </div>
    )
  }
}


export default Main
