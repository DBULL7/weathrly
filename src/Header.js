import React,{Component} from "react"
import Input from "./Input"
import Button from "./Button"
import Icon from  "../images/icon.png"
import "./Header.css"

class Header extends Component{



  render(){



    return (
      <div className="header-container">
        <img src={Icon} alt="logo of a weather "/>
        <div className="header-input-button-container">
          <Input/>
          <Button/>
        </div>
      </div>
    )
  }
}

export default Header
