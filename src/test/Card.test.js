import {shallow,mount,render} from 'enzyme'
import React from 'react';
import ReactDOM from 'react-dom';
import locus from "locus"
import Card from "../Card"
var jsdom = require('jsdom').jsdom;
let info    = require("./fakeApi.json")
let weather = Object.keys(info.hourly_forecast)
let daily    = weather.filter((val,index)=>{
  return index<1
})

let cardInfo = daily.map(val=>{
  return val
})

describe("Card Test",()=>{

it.skip("it should render a card",()=>{
  var mockFn  = jest.fn()
console.log(cardInfo)
  const wrapper = shallow(<Card type={"daily"} info = {daily} onClick={() => {mockFn} }/>)
  console.log("!!!!")
expect(mockFn.hasBeenClicked,1)
})



})
