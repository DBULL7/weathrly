import React,{Component} from 'react'

class Location extends Component{
  render(){
    return(
      <div className="current-location-container">

      <div className ="city">{this.props.city},</div>
      <div className ="State">{this.props.state}</div>
      </div>
    )
  }
}


export default Location
