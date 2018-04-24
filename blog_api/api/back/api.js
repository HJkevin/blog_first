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

// 添加接口
router.post('/insert', function (req, res, next) {

  var sql = `insert into apilist(id,title,url,type,sendparams,getparams,backorfont,time)
  values('${generateUUID()}','${req.body.title}','${req.body.url}','${req.body.type}','${req.body.sendparams}','${req.body.getparams}','${req.body.backorfont}','${creatTime()}')`

  sqlHandle(sql).then((data) => {
    console.log(data)
    res.send({
      code: "4001",
      msg: "数据插入成功"
    })
  }).catch((err) => {
    console.log(err)
    res.send({
      code: "4002",
      msg: "数据插入失败"
    })
  })

});


// 接口列表查询

router.get('/select', function (req, res, next) {
  let { type } = req.query;
  let sql = `select *from apilist where backorfont ='${type}'`
  async function sqlHandle() {
    await query(sql);
    return {
      code: "4011",
      msg: "数据查询成功",
      data
    }
  }
  sqlHandle().then((data) => {
    res.send(data)
  }).catch((err) => {
    res.send({
      code: "4012",
      msg: "数据查询失败"
    })
  })
})

// 接口文档修改

router.post('/update', function (req, res, next) {

  var sql = `update apilist set title='${req.body.title}',url='${req.body.url}',type='${req.body.type}',sendparams='${req.body.sendparams}',getparams='${req.body.getparams}',backorfont='${req.body.backorfont}',time='${creatTime()}' where id='${req.body.id}'`
  sqlHandle(sql).then((data) => {
    res.send({
      code: "4021",
      msg: "数据更改成功",
    })
  }).catch((err) => {
    console.log(err)
    res.send({
      code: "4022",
      msg: "数据更改失败",
      err: err
    })
  })
});

// 删除后台接口文档
router.post('/delete', function (req, res, next) {
  let { id } = req.body
  let sql = `delete from apilist where id='${id}'`
  async function sqlHandle() {
    await query(sql);
    return {
      code: "4031",
      msg: "数据删除成功",
    }
  }
  sqlHandle().then((data) => {
    res.send(data)
  }).catch((err) => {
    res.send({
      code: "4032",
      msg: "数据删除失败",
    })
  })
})

module.exports = router