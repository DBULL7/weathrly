import {shallow,mount,render} from 'enzyme'
import React from 'react';
import ReactDOM from 'react-dom';
import locus from "locus"
import Main from '../Main'




describe("Main Test", () => {

  it("should have a length of one",() => {
    const wrapper = shallow(<Main/>)
    expect(wrapper.node.length,1)
  })


  it("should render a main",() => {
    const wrapper = shallow(<Main/>)
    expect(wrapper.node.type,"main")
  })

  it("should have props passed into it", () =>{
    const wrapper = shallow(<Main/>)
    expect(wrapper.node.props.className,'current-location-container')

  })

})

describe("current-temp Test", () => {

  it("should have a length of one",() => {
    const wrapper = shallow(<Main/>)
    const currentTemp = wrapper.find(".current-temp");
    expect(currentTemp.node.length,1)
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
