/*
三、用express框架写一个后台服务器
要求：
1. 使用静态资源托管中间件托管静态资源
2. 可以把提get交到的数据放置work3.json文件中,返回写入成功
3. 可以在页面上获取work3.json中的数据
(ps:读取文件  把数据读出来  发送回去)
*/

var express =require('express');
var fs=require('fs');
var app=express();
app.use(express.static('public'));
app.get("/add",function (req,res) {
	fs.writeFile("public/work3.json",JSON.stringify(req.query),"utf-8",function (err) {
		if (err) {
			res.send(err)
		}else{
			res.send("写入成功")
		}
	})
})
app.get("/read",function (req,res) {
	fs.readFile("public/work3.json","utf-8",function (err,data) {
		if (err) {
			res.send(err)
		}else{
			res.send(data)
		}
	})

})
app.listen(3000)
