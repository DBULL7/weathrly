import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import $ from 'jquery'
import {shallow,mount,render} from 'enzyme'
var expect = require("chai").expect

const wrapper = shallow(<App/>)

it('renders without crashing', () => {
});
