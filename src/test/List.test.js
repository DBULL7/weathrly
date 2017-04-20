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
expect(wrapper.node.props.children[0].props.type,"hourly")
  })

  it("should render daily cards",()=>{

    let wrapper = shallow(<List   listItems={
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
  expect(wrapper.node.props.children[0].props.type,"daily")
  })
})
