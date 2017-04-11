import React, {Component} from "react"

class Button extends Component{

  render(){
    return <button onClick={()=>{this.props.sendLocation()}} className="header-button">Enter</button>
  }
}

export default Button
