// --------------- utils.js -----------------
'use strict';
//get random integer in [0, n-1]
function rand(n) {
  return Math.floor(Math.random()*n);
}

//return a random integer sequence without duplicates in range [0, n-1]
function randSeq(arr) {
  let rslt = [];
  while(arr.length != 0) {
    let len = arr.length;
    let x = rand(len);
    rslt.push(arr.splice(x, 1)[0]);
  }
  return rslt;
}

function range(n) {
  var rslt = new Array(n);
  for(let i=0; i<rslt.length; i++) {
    rslt[i] = i;
  }
  return rslt;
}

function getRandomColor() {
  return '#'+randSeq(['3', '6', '9', 'b', 'd', 'f']).join('');
}

function intParser(start, curr, end, div) {
  let step = (end-start)/div;
  return (curr+step);
}

function vary(start, end, div, time, parser, cbFun) {
  //prev: number
  //target: number
  //change prev to target, step depends on div, do this in time(ms).
  //Vary(1, 10, 100, 100) means change 1 to 100,
  //divided in 100 parts(0.1 for each parts), in 100ms,
  //and use callback function: cbFun each time in step.

  let curr = start;
  let interval_time = time/div;
  let excute_count = 0;
  let timerId = setInterval(() => {
    if(excute_count > div) {
      //target reached, vary operation complete, timer should shut down;
      clearInterval(timerId);
      return;
    }

    //target still overhead
    cbFun(curr);
    curr = parser(start, curr, end, div);
    excute_count++;
    return;
  }, interval_time);
}

//vary(1, 10, 10, 10000, console.log);
//console.log(randSeq(['a', 'a', '6', '6', 'e', 'e']));
//console.log(getRandomColor());
exports.getRandomColor = getRandomColor;
exports.vary = vary;
exports.intParser = intParser;
