//================================
let R = require('ramda');
let RF = require('ramda-fantasy');
let http = require('http');

let globalize = (M) => {
  for(let p in M) {
    global[p] = M[p];
  }
};

globalize(R);
globalize(RF);

//---------------------------------
function _sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

global.sleep = async (ms, f, args) => {
  await _sleep(ms);
  f(...args);
}

//--------------------------------

//----------------------------------
global.url = 'http://localhost:8888/';

global.getData = (time) => {
  let p = fetch(url+time).then((res)=>res.json());
  return p;
}

global.getJson = (time) => {
  let p = getData(time);
  let rslt = null;
  p.then((data) => rslt = data);
  return rslt;
}

global.multiGet = (num) => {
  let results = []
  for(let i=0; i<num; i++) {
    let time = Math.random()*3+1;
    results.push(getData(time).then(console.log));
  }
  return results;
}
//--------------------------------
global.Right = Either.Right;
global.Left = Either.Left;

global.r = Right;

global.f = curry((res, rej) => {
    console.log('instantly exec f');
    setTimeout(res, 1000, {data: 35});
})

global.then = curry((res, f) => f(res, null));

//================================
