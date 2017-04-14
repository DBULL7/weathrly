import React, {Component} from 'react'

class Input extends Component{

  render(){
    return(
      <input onKeyPress={(event)=>{this.props.handleKeyPress(event)}}  onChange={(event)=>{this.props.updateLocation(event.target.value)}}
       className="header-input"
       placeholder="Enter City/State"/>
    )
  }
}





export default Input
