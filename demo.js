var express = require('express')
var router = require("./router")
var app = express()

app.use('/home',router) //router路由对象中的路由都会匹配到"/home"路由后面
app.get('/about', function (req, res) {
  console.log(req.query)
  res.send('你好，我是 Express!')
})

// 4 .启动服务
app.listen(3000, function () {
  console.log('app is running at port 3000.')
})