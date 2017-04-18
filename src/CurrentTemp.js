import React, {Component} from 'react'
// import Location from "./Location.js"

function CurrentTemp(city,state){
  return (
    <div className="current-temp">
    <div className="current-location-container">
      <div className="city">{city},</div>
      <div className="State">{state}</div>
    </div>
    </div>
  )
}

export default CurrentTemp
