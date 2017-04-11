import React, {Component} from 'react'
import CurrentTemp from './CurrentTemp'
import List from './List'


class Main extends Component {
  render() {
    return (
      <div className="bullshit">
        <CurrentTemp/>
        <List/>
        <List/>        
      </div>
    )
  }
}


export default Main
