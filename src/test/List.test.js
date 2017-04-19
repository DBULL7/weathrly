import {shallow,mount,render} from 'enzyme'
import React from 'react';
import ReactDOM from 'react-dom';
import locus from "locus"
import List from "../List"


describe("List-Test",()=>{

  it("should render cards",()=>{

    const wrapper = shallow(<List/>)
    console.log(wrapper)
  })


})
