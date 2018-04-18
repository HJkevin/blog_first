var express = require('express');
var router = express.Router();
var hasOwnProperty=require('has-own-property-x');  //支持hasOwnProperty
var Unique=require("../common/Unique")
var CreatTime=require("../common/creatTime")
var {
  sqlHandle,  //除查询外的其他操作
  readHandle,  //读取操作
  searchHandle,  //检测有无某条数据，有为false
  searchHandleNormal,  //检测有无某条数据，有为true
  query             // //基本操作
}=require("../../config/db_connect")


router.post("/addOneClass",(req,res,next)=>{
  let {enname_one,cnname_one,enname_two,cnname_two}=req.body
    if(enname_one&&cnname_one&&enname_two&&cnname_two){
      let oneId=Unique()
      var insertOne=`insert into one_class(id,enname,cnname,time) values('${oneId}','${enname_one}','${cnname_one}','${CreatTime()}')`
      var insertTwo=`insert into two_class(id,parent_id,enname,cnname,article_num,time) values('${Unique()}','${oneId}','${enname_one}','${cnname_one}','0','${CreatTime()}')`
      async function sqlAllHandle() { 
          await sqlHandle(insertOne);
          await sqlHandle(insertTwo);
          return {
            code:"2001",
            msg:"插入成功"
          }
       }
       sqlAllHandle().then((data)=>{
          res.send(data)
       }).catch((err)=>{
          res.send({
            code:"2002",
            msg:"插入失败"
          })
       })   
    }
})

module.exports=router