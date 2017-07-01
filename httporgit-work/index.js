var http =require("http");
var fs=require("fs");
http.createServer(function(req,res){
	var url=req.url;
	console.log(url)
	switch(url)
	{
		case "/login.html":
		fs.readFile("public/login.html","utf-8",function (err,data) {
			if (err) {
				throw err;
			}else{
				res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
				res.end(data)
			}
		})
		break;
		case "/index.html":
		fs.readFile("public/index.html","utf-8",function (err,data) {
			if (err) {
				throw err;
			}else{
				res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
				res.end(data)
			}
		})
		break;
		case "/home.html":
		fs.readFile("public/home.html","utf-8",function (err,data) {
			if (err) {
				throw err;
			}else{
				res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
				res.end(data)
			}
		})

		break;
		case "/style.css":
		fs.readFile("public/style.css","utf-8",function (err,data) {
			if (err) {
				throw err;
			}else{
				res.writeHead(200,{"content-type":"text/css;charset=utf-8"})
				res.end(data)
			}
		})

		break;
		case "/javascript.js":
		fs.readFile("public/style.css","utf-8",function (err,data) {
			if (err) {
				throw err;
			}else{
				res.writeHead(200,{"content-type":"text/javascript;charset=utf-8"})
				res.end(data)
			}
		})
		break;
		case "/bg.jpg":
		fs.readFile("public/bg.jpg",function (err,data) {
			if (err) {
				throw err;
			}else{
				res.writeHead(200,{"content-type":"images/jpeg;charset=utf-8"})
				res.end(data)
			}
		})
		break;
		default:
		fs.readFile("public/err.html","utf-8",function (err,data) {
			if (err) {
				throw err;
			}else{
				res.writeHead(404,{"content-type":"text/html;charset=utf-8"})
				res.end(data)
			}
		})
	}
}).listen(3000)
