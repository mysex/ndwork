/*
四、写一个注册和登录的页面（ps：有难度）
要求：
1.注册和登录时，用get提交
2.注册成功后，显示注册成功的页面（页面内有样式和图片）
3.登录成功后，显示登录成功的页面(页面内有样式和图片)
4.可以扩展其他内容
*/
var express=require('express');
var  fs=require('fs');
var  app=express();
app.use(express.static("public"));
app.get("/login",function(req,res) {
    fs.readFile("data.json","utf-8",function(err,data){
        if(err){
            res.send(err);
       }else{
            var json=JSON.parse(data);
            if(req.query.userName==json.userName&&req.query.password==json.password){
               res.redirect("/index.html");
          }
     }
})
})
app.get("/reg",function(req,res) {
   fs.writeFile("data.json",JSON.stringify(req.query),"utf-8",function (err) {
        if (err) {
          res.send(err);
     }else{
      res.redirect("/login.html");
 }
})

})

app.listen(3000)
