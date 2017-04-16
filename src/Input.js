import React, {Component} from 'react'

class Input extends Component{
  // add state with location -- location should match input.value
  // add button to this component that sends state to parent
  render(){
    return(
      <input
        onKeyPress={(event)=>{this.props.handleKeyPress(event)}}  onChange={(event)=>{this.props.updateLocation(event.target.value)}}
       className="header-input"
       placeholder="Enter City/State"/>
    )

  }
}





export default Input
