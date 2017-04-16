import React from 'react';
import ReactDOM from 'react-dom';
import locus from "locus"
import App from './App';
import Main from './Main'
import Input from "./Input.js"
import Header from './Header'
import {shallow,mount,render} from 'enzyme'
var expect = require("chai").expect


describe("App test",()=>{


it('should render an article', () => {
  const wrapper = shallow(<App/>)

expect(wrapper.find('.forTest')).to.have.length(1)
});


it('should render a main', () => {
  const wrapper = shallow(<App/>)
expect(wrapper.find(Main)).to.have.length(1)
})

it('should render a Header', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.find(Header)).to.have.length(1)
})

})

describe('Header test', () => {

it("should contain children elements",()=>{

  const wrapper = shallow(<Header/>)
  expect(wrapper.find('.header-container').children()).to.have.length(2)
})

it("should render a div with a class name of header-container ",()=>{
  const wrapper = shallow(<Header/>)

  expect(wrapper.equals(<div className="header-container"></div>)).to.equal(true)


})

it.only('should not be bullshit and ', () => {
  const wrapper = mount(<Header/>)
  console.log(wrapper.debug());
  expect(wrapper.equals(
      <div className="header-container">
        <img className="header-logo" src={Icon} alt="logo of a weather "/>
        <div className="header-input-button-container">
          <Input handleKeyPress={this.props.handleKeyPress} updateLocation={this.props.updateLocation}/>
          <Button endLocation={this.props.sendLocation}/>
        </div>
      </div>)).to.equal(true)
})


it.only('controls state input field should match user input', () => {
  const wrapper = mount(<Header/>)
  console.log(wrapper.debug());
  expect(wrapper.equals(
      <div className="header-container">
        <img className="header-logo" src={Icon} alt="logo of a weather "/>
        <div className="header-input-button-container">
          <Input handleKeyPress={this.props.handleKeyPress} updateLocation={this.props.updateLocation}/>
          <Button endLocation={this.props.sendLocation}/>
        </div>
      </div>)).to.equal(true)
})
})





it.skip('simulates click events', () => {
  const onButtonClick = spy();
  const wrapper = mount(<Foo onButtonClick={onButtonClick} />);

  wrapper.find('button').simulate('click');
  expect(onButtonClick.calledOnce).to.equal(true);
});
