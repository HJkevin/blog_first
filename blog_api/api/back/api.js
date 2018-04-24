var express = require('express');
var router = express.Router();
var hasOwnProperty = require('has-own-property-x');  //支持hasOwnProperty
var Unique = require("../common/Unique")
var CreatTime = require("../common/creatTime")
var {
    sqlHandle,  //修改和增加操作
    readHandle,  //读取操作
    searchHandle,  //检测有无某条数据，有为false
    searchHandleNormal,  //检测有无某条数据，有为true
    query             // //基本操作
} = require("../../config/db_connect")

//接口文档添加
router.post('/insert',function(req,res,next){
    let {title,url,type,sendparams,getparams,backorfont}=req.body
    let sql =`insert into apilist(id,title,url,type,sendparams,getparams,backorfont,time) values('${Unique()}','${title},'${url},'${type},'${sendparams}','${getparams}','${backorfont}','${createTime()}')`
    async function sqlHandle() {
        await query(sql);
        return {
          code: "3031",
          msg: "数据插入成功",
        }
      }
      sqlHandle().then((data) => {
        res.send(data)
      }).catch((err) => {
        res.send({
          code: "3032",
          msg: "数据插入失败",
        })
      })
})


// 接口列表查询

router.get('/select',function(req,res,next){
    let {type}=req.query;
    let sql=`select *from apilist where backorfont ='${type}'`
    async function sqlHandle() {
        await query(sql);
        return {
          code: "3041",
          msg: "数据查询成功",
          data
        }
      }
      sqlHandle().then((data) => {
        res.send(data)
      }).catch((err) => {
        res.send({
          code: "3042",
          msg: "数据查询失败"
        })
      })
})

// 修改后台接口文档
router.post('/amend',function(req,res,next){
    let {id,title,url,type,sendparams,getparams,backorfont}=req.body
    let sql =`update apilist set title='${title},url='${url},type='${type},sendparams='${sendparams}',getparams='${getparams}',backorfone='${backorfont}','${createTime()}' where id='${id}'`
    async function sqlHandle() {
        await query(sql);
        return {
          code: "3041",
          msg: "数据修改成功",
        }
      }
      sqlHandle().then((data) => {
        res.send(data)
      }).catch((err) => {
        res.send({
          code: "3042",
          msg: "数据修改失败",
        })
      })
})

// 删除后台接口文档
router.post('/delete',function(req,res,next){
    let {id}=req.body
    let sql =`delete from apilist where id='${id}'`
    async function sqlHandle() {
        await query(sql);
        return {
          code: "3051",
          msg: "数据删除成功",
        }
      }
      sqlHandle().then((data) => {
        res.send(data)
      }).catch((err) => {
        res.send({
          code: "3052",
          msg: "数据删除失败",
        })
      })
})

module.exports = router