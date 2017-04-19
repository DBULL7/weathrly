import {shallow,mount,render} from 'enzyme'
import React from 'react';
import ReactDOM from 'react-dom';
import locus from "locus"
import Card from "../Card"
var jsdom = require('jsdom').jsdom;

describe("Card Test",()=>{

it("it should render a card",()=>{
  var mockFn  = jest.fn()

  const wrapper = shallow(<Card info={location:"Denver"}/>)

})



})
