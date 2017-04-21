import {shallow,mount,render} from 'enzyme'
import React from 'react';
import ReactDOM from 'react-dom';
import locus from "locus"
import Main from '../Main'
import App from '../App'
let info    = require("./fakeApi.json")
let weather = Object.keys(info.hourly_forecast)
let hourly    = weather.filter((val,index)=>{
  return index<7
})
let daily = weather.filter((val,index)=>{
return index%24 ===0
})

let icon = 'none'



describe("Main Test", () => {

  it.only("should have a length of one",() => {
    const wrapper = <Main
            hourly={this.props.hourly},
            daily={this.props.daily},
            temp={69},
            city={'Denver'},
            'Colorado',
            info,
            icon,
            50,
            'bullshit',
            70,
            60,
            'more bullshit'
          />
          console.log(wrapper)
      expect(wrapper.props, '.main-content')


  })


  it("should have props passed into it", () =>{
    const wrapper = App(
            hourly,
            daily,
            69,
            'Denver',
            'Colorado',
            info,
            icon,
            50,
            'bullshit',
            70,
            60,
            'more bullshit'
          )

    console.log(wrapper.props.children[1].props.children[0].props.children[3]);
    expect(wrapper.props.children[1].props.children[0].props.children[3].props.children[2], 100)

  })

})

describe("current-temp Test", () => {

  it("should have a length of one",() => {
    const wrapper = Main(
            hourly,
            daily,
            69,
            'Denver',
            'Colorado',
            info,
            icon,
            50,
            'bullshit',
            70,
            60,
            'more bullshit'
              )
    // const currentTemp = wrapper.find(".current-temp");
    console.log(wrapper)
    // expect(currentTemp.node.length,1)
  })


  it("should render a div",() => {

    const wrapper = shallow(<Main/>)
    const currentTemp = wrapper.find(".current-temp") ;   expect(currentTemp.node.type,"div")
  })

  it("should have props passed into it", () =>{

    const wrapper = shallow(<Main/>)
    const currentTemp = wrapper.find(".current-temp");    expect(currentTemp.node.props.className,'current-location-container')

  })

  it("should pass in props to location and make sure they render",()=>{
    const wrapper = shallow(<Main  city={"Denver"} state={"Colorado"}/>)
    const city = wrapper.find(".city")
    const state = wrapper.find(".State");

    expect(city.nodes[0].props.children[0],"Denver")
    expect(state.nodes[0].props.children,"Colorado")

  })

})
