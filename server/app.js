/*服务器代码*/
const express = require("express");
<<<<<<< HEAD

const app = express();

=======
const {mock} = require("mockjs");

const app = express();

app.get("/api/detail/picGroup_detail",(req,res)=>{
    let data = mock({
        code: 0,
        message: 'ok',
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


>>>>>>> branch/jiangqin


app.listen(9000,(err)=>{
    if(err){
        console.log("启动失败")
    }else{
        console.log("启动成功")
    }
})
