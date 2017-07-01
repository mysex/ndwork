/*
二、用express框架写一个后台服务器
要求：
1. 使用静态资源托管中间件托管静态资源
2. 有表单的get方法的提交，
3. 可以把提get交到的数据放置work2.json文件中，返回写入成功
     (ps:文件的写入 注意 写入的是字符串）
     */
     var express=require('express');
     var  fs=require('fs');
     var  app=express();
     app.use(express.static("public"))
     app.get("/login",function(req,res) {
     	var json=JSON.stringify(req.query);
     	fs.writeFile("public/work2.json",json,"utf-8",function(err){
     		if (err) {
     			res.send(err)
     		}else{
     			res.send({"success":"写入成功",data:json})
     		}
     	})
     })
     app.listen(3000)
