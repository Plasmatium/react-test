var express = require('express');
var app = express();

app.get('/:time', function(req, res) {

  res.append("Access-Control-Allow-Origin", "*");
  var time = req.params.time;
  //console.log('fetching url:', req.url, req.method);
  //*
  setTimeout((v)=>{
    //console.log('url responed:', req.url);
    res.json(v);
  }, time*1000, {'time': time});
  //*/
});

app.listen(8888, function () {
  console.log('Example app listening on http://localhost:8888');
});
