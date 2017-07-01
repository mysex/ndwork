/**
 一、用express框架写一个后台服务器
要求：
1. 使用静态资源托管中间件托管静态资源
2. 页面面上有 图片 css样式  js代码
3. 有表单的get方法的提交，之后返回数据
 */
var logger = require('morgan');
var express=require("express");
var app=express();
app.use(logger('dev'));

var filename=__filename
var baseUrl=filename.substr(0,filename.lastIndexOf("\\"))

console.log(baseUrl)
// console.log(filename.lastIndexOf("\"))
app.use(express.static(baseUrl+"/public"));
app.use(function (req,res,next) {
	// console.log(req.url)
	console.log(__filename)
	next()
})
app.get("/index",function (req,res) {
	res.send(req.query)
})
app.listen(8080)
