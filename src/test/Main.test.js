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

  it("should have a length of one",() => {
    const wrapper = shallow(
          <Main
            hourly={hourly}
            daily={daily}
            temp={69}
            city={'Denver'}
            state={'Colorado'}
            weather={info}
            icon={icon}
            feelslike={54}
            condition={'Terrible'}
            high={70}
            low={60}
            summary={'All tests and no play makes Dev an angry boy'}
          />)
      expect(wrapper.find('.main-content'), '.main-content')
  })


  it("should have props passed into it", () =>{
    const wrapper = shallow(
          <Main
            hourly={hourly}
            daily={daily}
            temp={69}
            city={'Denver'}
            state={'Colorado'}
            weather={info}
            icon={icon}
            feelslike={54}
            condition={'Terrible'}
            high={70}
            low={60}
            summary={'All tests and no play makes Dev an angry boy'}
          />)

        expect(wrapper.find('.city').node.props.children[0],'Denver')

  })

})

describe("current-temp Test", () => {

  it("should have a length of one",() => {
    const wrapper = shallow(
          <Main
            hourly={hourly}
            daily={daily}
            temp={69}
            city={'Denver'}
            state={'Colorado'}
            weather={info}
            icon={icon}
            feelslike={54}
            condition={'Terrible'}
            high={70}
            low={60}
            summary={'All tests and no play makes Dev an angry boy'}
          />)

        expect(wrapper.find('.State').node.props.children,'Colorado')
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

    expect(city.nodes[0].props.children[0]).toEqual("Denver")
    expect(state.nodes[0].props.children).toEqual("Colorado")

  })

})
