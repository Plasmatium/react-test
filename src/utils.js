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
  return '#'+randSeq(['a', 'a', '6', '6', 'e', 'e']).join('');
}

//console.log(randSeq(['a', 'a', '6', '6', 'e', 'e']));
//console.log(getRandomColor());
exports.getRandomColor = getRandomColor;
