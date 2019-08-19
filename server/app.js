/*服务器代码*/
const {mock} = require('mockjs')
const express = require("express");
const {mock} = require("mockjs");

const app = express();

<<<<<<< HEAD
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
=======
//处理图组详情页的数据请求
app.get("/api/detail/picGroup_detail",(req,res)=>{
    let data = mock({
        code: 0,
        msg: 'ok',
        data : {
            title:"这是图组的标题",
            'img|3':[
                    {
                        'id|+1': 1,
                        url: '@image(320x440, @color)'
                    }
                ]
        }
    });
    res.json(data);
})
//处理评论页面的数据请求
app.get("/api/comment",(req,res)=>{
    let data = mock({
        code:0,
        msg:"ok",
        data:{
            pageId:12342,
            'comment|20': [
                {
                    'id|+1': 1000,
                    avater: '@image(150x150, @color)',
                    uname:"@ctitle(4,10)",
                    content:"@cparagraph( 1,3 )",
                    date:"@date(yyyy/mm/dd)",
                    time:"@time(HH:mm:ss)"
                }
            ],
            'hotCom|5': [
                {
                    'id|+1': 10000,
                    avater: '@image(150x150, @color)',
                    uname:"@ctitle(4,10)",
                    content:"@cparagraph( 1,3 )",
                    date:"@date(yyyy/mm/dd)",
                    time:"@time(HH:mm:ss)"
                }
            ]
        }
        
    })
    res.json(data);
})

//处理用户信息的请求 目前只提供用户名和头像
app.get("/api/user/get_user_info",(req,res)=>{
    let data = mock({
        code:0,
        msg:"ok",
        data:{
            avater: '@image(150x150, @color)',
            uname:"@ctitle(4,10)"
        }
        
    })
    res.json(data); 
})

//处理请求页面的点赞数、评论数、收藏数
app.get("/api/page/info",(req,res)=>{
    console.log(req.query);
    let data = mock({
        code:0,
        msg:"ok",
        data:{
            avater: 'http://dummyimage.com/150x150/f2de79',
            comment:"@natural(200,500)",
            dianzan:"@natural(200,500)",
            collect:"@natural(200,500)"
        }
        
    })
    res.json(data); 
>>>>>>> branch/jiangqin
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
