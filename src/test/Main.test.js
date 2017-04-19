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
