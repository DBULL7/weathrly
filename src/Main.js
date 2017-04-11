import React, {Component} from 'react'
import CurrentTemp from './CurrentTemp'
import List from './List'
import "./Main.css"

class Main extends Component {
  render() {
    return (

      <div className="main-content">
      <CurrentTemp/>
      <main className="list-container">
        <List/>
        <List/>
      </main>
      </div>
    )
  }
}


export default Main
