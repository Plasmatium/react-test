import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';


require('./style.css');
require('./global_install');
let _ = require('lodash')


/*
let utils = require('./utils');
let Toggle = require('./toggle_button').Toggle;
let Clock = require('./Clock').Clock;
let LoginControl = require('./loginControl').LoginControl;
let ListCtrl = require('./listComponents').ListCtrl;
let BoilingCalc = require('./boilingCalc').BoilingCalc;
let Mock = require('./mock.js').Mock;

import {CompRef} from './children_test.js';
import {CustomTextInput} from './ref_test.js'


let data = ['asd', 'fds', 'afaf', 'ebef', '3fre', 'bnij'];
*/

import {CounterButton, WordAdder} from './performance.js';
ReactDOM.render(
  <WordAdder />,
  document.getElementById('root')
);
