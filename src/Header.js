import React,{Component} from "react"

import Icon from  "../images/icon.png"
import "./main-css/Header.css"

class Header extends Component{

constructor(){
  super()

  this.state ={
    currentInput:"",
    sentInput:""
  }

}

  localState(input) {
    this.setState({currentInput: input})
  }

  clearInput() {
    this.setState({currentInput: ''})
  }

  loadingAnimation(){
    if (this.props.loading) {
      return(
        <img className="header-logo animated" src={Icon} alt="logo of a weather "/>
      )
    } else {
      return (
        <img className="header-logo" src={Icon} alt="logo of a weather "/>
      )
    }
  }

render(){
  return (
    <div className="header-container">
      <div className="header-input-button-container">
      {this.loadingAnimation()}
      <button
        className="header-button locationBtn"
          onClick={ () => {
              this.props.findLocation();
              this.clearInput()
            }
          } >
          Find Location
      </button>

        <input onKeyPress={(event) => {this.props.handleKeyPress(event)}}
            onChange = {(event) => {
             this.props.updateLocation(event.target.value); this.localState(event.target.value);
            }}
            className="header-input"
            placeholder="Enter City/State"
            value={this.state.currentInput}/>

        <button
            onClick={()=>{
              this.props.sendLocation();
              this.clearInput()
            }}
            className="header-button enterBtn">
          Enter
        </button>
      </div>
    </div>
  )}
}

export default Header
