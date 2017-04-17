import React,{Component} from "react"
import Input from "./Input"
import Icon from  "../images/icon.png"
import "./Header.css"

class Header extends Component{

constructor(){
  super()

  this.state ={
    currentInput:"",
    sentInput:""
  }

}


render(){
  return (
    <div className="header-container">
      <img className="header-logo" src={Icon} alt="logo of a weather "/>
      <div className="header-input-button-container">
        <button onClick={this.props.findLocation} className="header-button">Find Location</button>
        <Input handleKeyPress={this.props.handleKeyPress} updateLocation={this.props.updateLocation}/>
        <button onClick={()=>{this.props.sendLocation()}} className="header-button">Enter</button>
      </div>
    </div>
  )
  }
}

export default Header
