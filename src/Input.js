import React, {Component} from 'react'

class Input extends Component{

  render(){
    return(
      <input onChange={(event)=>{this.props.updateLocation(event.target.value)}}
       className="header-input"
       placeholder="Enter City/State"/>
    )
  }
}





export default Input
