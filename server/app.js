/*服务器代码*/
const express = require("express");

const app = express();



app.listen(9000,(err)=>{
    if(err){
        console.log("启动失败")
    }else{
        console.log("启动成功")
    }
})
