/*服务器代码*/
const {mock} = require('mockjs')
const express = require("express");

const app = express();

//请求启动页背景图
app.get("/api/start/nav/url",(req,res)=>{
    let data =  mock({
        code: 0,
        message : 'ok',
        'data|1':[
            {
                'id+1':1,
                url:'@image(375x667,@color)'
            }
        ]
    })
    res.json(data)
})

//请求主页背景图
app.get("/api/home/nav/url",(req,res)=>{
    let data =  mock({
        code: 0,
        message : 'ok',
        'data|1':[
            {
                'id+1':1,
                url:'@image(375x667,@color)'
            }
        ]
    })
    res.json(data)
})

app.listen(9000,(err)=>{
    if(err){
        console.log("启动失败")
    }else{
        console.log("启动成功")
    }
})