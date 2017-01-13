let req = require('request');
let url = 'http://localhost:8888/';

let f = () => {
  let time = Math.random()*5;
  req.get(url+time, (e,r,b) => console.log(b));
}

let run = (num) => {
  for(let i = 0; i < num; i++) {
    f();
  }
}

module.exports = run;
