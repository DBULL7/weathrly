import React,{Component} from "react"
import Input from "./Input"
import Button from "./Button"
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
        <Input handleKeyPress={this.props.handleKeyPress} updateLocation={this.props.updateLocation}/>
        <Button endLocation={this.props.sendLocation}/>
      </div>
    </div>
  )
  }
}

export default Header
