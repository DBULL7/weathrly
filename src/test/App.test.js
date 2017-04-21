import React from 'react';
import ReactDOM from 'react-dom';
import locus from "locus"
import App from '../App';
import Main from "../Main"
import Header from "../Header"
import {shallow,mount,render} from 'enzyme'

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
    const wrapper = shallow(<App />)
    expect(wrapper.find(Main).length,1)
  })


  it('should render a header element', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find(Header).node.type,"header")
  })


  it("should render a div element as a container" , () =>{
    const wrapper = shallow(<App/>)
    expect(wrapper.node.type , "div")
  })


  it("should have a default state when starting",()=>{

    const wrapper = shallow(<App/>)
    wrapper.setState({
      currentCity: '',
      currentState: '',
      currentTemp: '',
      city: "",
      State:"",
      currentWeather:{},
      hourlyList:[],
      dailyList:[],
      icon: "",
      feelslike: '',
      condition: '',
      high: '',
      low: '',
      summary: '',
      apiSource:"http://api.wunderground.com/api",
      loading: false
    })
    expect(wrapper.state,{
      currentCity: '',
      currentState: '',
      currentTemp: '',
      city: "",
      State:"",
      currentWeather:{},
      hourlyList:[],
      dailyList:[],
      icon: "",
      feelslike: '',
      condition: '',
      high: '',
      low: '',
      summary: '',
      apiSource:"http://api.wunderground.com/api",
      loading: false
    })
  })

it("should change state",()=>{
  const wrapper = shallow(<App/>)
  wrapper.setState({
    currentCity: '',
    currentState: '',
    currentTemp: '',
    city: "",
    State:"",
    currentWeather:{},
    hourlyList:[],
    dailyList:[],
    icon: "",
    feelslike: '',
    condition: '',
    high: '',
    low: '',
    summary: '',
    apiSource:"http://api.wunderground.com/api",
    loading: false
  })
  expect(wrapper.state,{
    currentCity: '',
    currentState: '',
    currentTemp: '',
    city: "",
    State:"",
    currentWeather:{},
    hourlyList:[],
    dailyList:[],
    icon: "",
    feelslike: '',
    condition: '',
    high: '',
    low: '',
    summary: '',
    apiSource:"http://api.wunderground.com/api",
    loading: false
  })
  wrapper.setState({
    currentCity: 'Denver',
    currentState: 'Colorado',
    currentTemp: '69',
    city: "Denver",
    State:"Colorado",
    currentWeather:{},
    hourlyList:[],
    dailyList:[],
    icon: "",
    feelslike: '',
    condition: '',
    high: '',
    low: '',
    summary: '',
    apiSource:"http://api.wunderground.com/api",
    loading: false
  })
  expect(wrapper.state,{
    currentCity: 'Denver',
    currentState: 'Colorado',
    currentTemp: '69',
    city: "Denver",
    State:"Colorado",
    currentWeather:{},
    hourlyList:[],
    dailyList:[],
    icon: "",
    feelslike: '',
    condition: '',
    high: '',
    low: '',
    summary: '',
    apiSource:"http://api.wunderground.com/api",
    loading: false
  })
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



// describe("Location Test", () => {
//
//   it("should have a length of one",() => {
//     const wrapper = shallow(<Location/>)
//     expect(wrapper.node.length,1)
//   })
//
//   it("should render a div",() => {
//     const wrapper = shallow(<Location/>)
//     expect(wrapper.node.type, "div")
//   })
//
//   it("should have props passed into it", () =>{
//     const wrapper = shallow(<Location/>)
//     expect(wrapper.node.props.className,'current-location-container')
//   })
//
// })









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
