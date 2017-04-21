import {shallow,mount,render} from 'enzyme'
import React from 'react';
import ReactDOM from 'react-dom';
import locus from "locus"
import List from "../List"
import Card from "../Card"
let info    = require("./fakeApi.json")
let weather = Object.keys(info.hourly_forecast)
let hourly    = weather.filter((val,index)=>{
  return index<7
})
let daily = weather.filter((val,index)=>{
return index%24 ===0

})
describe("List-Test",()=>{

  it("should render hourly cards",()=>{

    let wrapper = shallow(<List   listItems={
    hourly.map(function(value,index,array){

    return (
      <Card
        index={index}
        type="hour"
        key={index}
        info={info} />
    )
  })}/>)
  expect(wrapper.node.props.children.length,7);
  expect(wrapper.find("Card").first().props().info.props.type,"hour")
  expect(wrapper.find("Card").last().props().info.props.type,"hour")
  })

  it("should render daily cards",()=>{

    let wrapper = shallow(<List type={"day"}  listItems={
    daily.map(function(value,index,array){

    return (
      <Card
        index={index}
        type="daily"
        key={index}
        info={info} />
    )
  })}/>)
  expect(wrapper.node.props.children.length,10)
  expect(wrapper.find("Card").first().props().info.props.type,"daily")
  expect(wrapper.find("Card").last().props().info.props.type,"daily")

  })
})

describe("Card-test",()=>{

  it("should have weather information on the rendered cards",()=>{
    let wrapper = shallow(<List type={"day"}  listItems={
    daily.map(function(value,index,array){

    return (
      <Card
        index={index}
        type="daily"
        key={index}
        info={info} />
    )
  })}/>)



    expect(wrapper.find(".card").root.node.props.children[0].props.info.props.info.current_observation.weather).toEqual("Partly Cloudy")

  })


})
