const http = require('http');
var opn = require('./openUrl');
var express = require('express'); 
var path = require('path');
var jade = require('jade');
var bodyParser = require('body-parser');
// 加载路由控制
var router = require('./routes/index');

var app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.set('views', path.join(__dirname, 'views'));   
//设定视图引擎模板，还可以设定其他模板，后续介绍
app.engine('.html', jade.__express);
app.set('view engine', 'html');
// 定义静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router)
  
const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    opn.openUrl(hostname,port)
  });

  module.exports = app;