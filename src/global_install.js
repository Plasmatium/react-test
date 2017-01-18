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

//
/*  How to use Promise
  p = new Promise((res, rej) => {
  let data = null;
  let time = Math.random();
    if(time > 0.5) {
    data = {data: 35, time: time};
        setTimeout(res, 1000, data);
    return data;
    }
    else {
    data = {data: 'error', time: time};
        setTimeout(rej, 1500, data);
    return data;
    }
  });
  p.then(console.log).catch(console.log)
//*/

//--------------------------------
global.Right = Either.Right;
global.Left = Either.Left;

global.r = Right;
global.PRM = (func) => {
  //func = (res, rej) => { code }

}

/*
global.f = (res, rej, d) => {
	let data = null;
	let time = Math.random();
  if(time > 0.5) {
    data = {data: d++, time: time};
    setTimeout(res, 1000, data);
  }
  else {
    data = {data: 'error', time: time};
    setTimeout(rej, 1500, data);
  }
  return data;
}
*/
global.g_d = null;
global.dealasync = (n, res, rej) => {
  let time = Math.random()*2000;
  if(time>1500) {
    setTimeout(rej, time, `timeout: ${time}`);
  }
  else {
    setTimeout(res, time, n+1);
  }
}

global.f_res = (value) => {
  console.log('successful, data:', value);
  g_d = value;
  return promiseDA(g_d);
}

global.f_rej = (value) => {
  console.log('error, g_d is:', g_d, 'timeout:', value);
}

global.promiseDA = (n) => {
  return new Promise((res, rej)=>{
    dealasync(n, res, rej);
  });
}

global.test_for_promise = (n) => {
  let p = promiseDA(0)
  for(let i = 0; i < n; i++) {
    p = p.then(f_res);
  }
  p.catch(f_rej);
  return p;
}

//================================
