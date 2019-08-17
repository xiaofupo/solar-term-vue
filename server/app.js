/*服务器代码*/
const express = require("express");

const app = express();

app.get('/api/loginTip', (req, res)=>{
    res.json({
        code: 0,
        message: 'ok',
        data: require('./data/changelogintip.json')
    });
});

app.listen(9000,(err)=>{
    if(err){
        console.log("启动失败")
    }else{
        console.log("启动成功")
    }
})
