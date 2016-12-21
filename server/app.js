var express = require('express')
  , cors = require('cors')
  , app = express();


var api = require('./api')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});

app.get('/latest', cors(corsOptions), api.requestapi)
app.get('/before', cors(corsOptions), api.requestapi)
app.get('/news', cors(corsOptions), api.requestapi)
app.get('/contents', cors(corsOptions), api.requestapi)
app.get('/themes', cors(corsOptions), api.requestapi)
app.get('/theme', cors(corsOptions), api.requestapi)

app.get('/pic', cors(corsOptions), api.requestImg)

// app.get('http://news-at.zhihu.com/api/4/news/latest', function(req, res, next){
//   // console.log(req.json())
//   res.json({msg: 'This is CORS-enabled for only http://news-at.zhihu.com.'});
// });

app.listen(8088, function(){
  console.log('CORS-enabled web server listening on port 8088');
});