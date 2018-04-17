var express = require('express');
var router = express.Router();
var {
    sqlHandle,
    readHandle,
    searchHandle,
    searchHandleNormal,
    query
}=require('../../config/db_connect')

router.get('/',function(req,res,next){
    var sql=`select *from blogtest`
    readHandle(sql).then((data)=>{
        res.send(data)
    })
})

router.post('/test', function(req, res, next) {
    let sql=req.body.id
    if(sql!=undefined){
      var sql=`select * from blogtest where id='${sql}'`
      readHandle(sql).then((data)=>{
        res.send(data)
      })
    }else{
      res.send("没有参数")
    }
   
    
  });

module.exports=router;