import React from 'react';
import ReactDOM from 'react-dom';
import locus from "locus"
import App from './App';
import Main from './Main'
import Header from './Header'
import List from "./List.js"
import CurrentTemp from "./CurrentTemp.js"
import Location from "./Location.js"
import {shallow,mount,render} from 'enzyme'
// var expect = require("chai").expect

var jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};




describe("App test",() => {


it('should have a length of 1', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.length,1)
})

it('should render a main element via a method', () => {
  const wrapper = shallow(<App/>)
  console.log(wrapper)
  expect(wrapper.find(Main).node.type,"header")
})


it('should render a header element', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.find(Header).node.type,"header")
})


it("should render a div element as a container" , () =>{
  const wrapper = shallow(<App/>)
  expect(wrapper.node.type , "div")
})

})

// describe("Test App state",() =>{
//
//   it.only("should change state on enter",()=>{
//     var mockFn  = jest.fn()
//
//     const wrapper = mount(<App getCurrentPosition={mockFn}/>)
//     wrapper.state={
//           currentCity: 'Denver',
//           currentState: 'Colorado',
//           currentTemp: '23',
//           city: "Denver",
//           State:"Colorado",
//           currentWeather:{},
//           hourlyList:[],
//           dailyList:[],
//           icon: "",
//           feelslike: '',
//           condition: '',
//           high: '',
//           low: '',
//           summary: ''
//         }
//   })
//
//
// })


describe('Header test', () => {

it("should contain children elements", () => {

  const wrapper = shallow(<Header/>)
  expect(wrapper.length,1)

})

it("should make a header element", () => {
  const wrapper = shallow(<Header/>)
  expect(wrapper.node.type,"header")

  })
})

describe("Button test" , () => {

  it("should render a button element", () => {

    const wrapper = shallow(<Header/>).find("button")
    expect(wrapper.node.type,"button" )
  })

  it("should have a length of one", () => {
    const wrapper = shallow(<Header/>).find("button")

  expect(wrapper.node.length,1 )

  })
})

  it("should have a property that is a method of the app",() => {

    const wrapper = shallow(<Header/>).find("button")
    expect(typeof
      wrapper.node.props.onClick,typeof function(){})
  })

  it("should have innerHTML of enter", () => {

    const wrapper = shallow(<Header/>).find("button")
    expect(wrapper.node.children, "Enter")

  })

  it("should have a enter button that can be clicked", () => {
    var mockFn  = jest.fn()

    const wrapper = shallow(<Header sendLocation={mockFn}/> )
var button =  wrapper.find(".enterBtn")
  button.props.onClick ={mockFn}
    button.simulate('click');
      expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it("should have a find location button that can be clicked", () => {
    var mockFn  = jest.fn()

    const wrapper = shallow(<Header findLocation={mockFn}/> )
    var button =  wrapper.find(".locationBtn")
    button.props.onClick ={mockFn}
    button.simulate('click');
      expect(mockFn).toHaveBeenCalledTimes(1)
  })


describe("Input test", () => {

  it("should have a length of one ", () => {
    const wrapper = shallow(<Header/>).find("input")
    expect(wrapper.node.length,1)
  })

  it("should render a input field", () => {
  const wrapper = shallow(<Header/>).find("input");    expect(wrapper.node.type,"input")
})


  it("should have 2 props that are methods", () => {
  const wrapper = shallow(<Header/>).find("input") ; expect(typeof wrapper.node.props.onKeyPress, typeof Function)
  expect(typeof wrapper.node.props.onChange, typeof Function)
  })

  it("should be able to take user input",()=>{

    var mockFn = jest.fn()

  const wrapper = shallow(<Header updateLocation={mockFn}/>).find("input")

  wrapper.simulate("change",{target:{value:"CHEWIE"}})
  expect(wrapper.props.value,"CHEWIE")
  })

})

describe("Location Test", () => {

  it("should have a length of one",() => {

    const wrapper = shallow(<Location/>)
    expect(wrapper.node.length,1)
  })


  it("should render a div",() => {

    const wrapper = shallow(<Location/>)
    expect(wrapper.node.type,"div")
  })

  it("should have props passed into it", () =>{

    const wrapper = shallow(<Location/>)
    expect(wrapper.node.props.className,'current-location-container')

  })

})


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

describe("currentTemp Test", () => {

  it("should have a length of one",() => {

    const wrapper = shallow(<CurrentTemp/>)
    expect(wrapper.node.length,1)
  })


  it("should render a div",() => {

    const wrapper = shallow(<CurrentTemp/>)
    expect(wrapper.node.type,"div")
  })

  it("should have props passed into it", () =>{

    const wrapper = shallow(<CurrentTemp/>)
    expect(wrapper.node.props.className,'current-location-container')

  })

})







//
// it.only('controls state input field should match user input', () => {
//   const wrapper = mount(<Header/>)
//   expect(wrapper.equals(
//       <div className="header-container">
//         <img className="header-logo" src={Icon} alt="logo of a weather "/>
//         <div className="header-input-button-container">
//           <Input handleKeyPress={this.props.handleKeyPress} updateLocation={this.props.updateLocation}/>
//           <Button endLocation={this.props.sendLocation}/>
//         </div>
//       </div>)).to.equal(true)
// })
