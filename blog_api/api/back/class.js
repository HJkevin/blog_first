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
            msg:"一级数据插入成功"
          }
       }
       sqlAllHandle().then((data)=>{
          res.send(data)
       }).catch((err)=>{
          res.send({
            code:"2002",
            msg:"一级数据插入失败"
          })
       })   
    }
})

// 一级分类编辑
router.post('/amendClassOne',(req,res,next)=>{
    const {enname_one,cnname_one,enname_two,cnname_two}=req.body

    var updatesql = `update one_class set enname='${enname_one}',cnname='${cnname_one}',time='${creatTime()}' where enname='${oldenname_one}'`

    async function amendOne() {
        await sqlHandle(amendOne)
        return {
            code:'1001',
            msg:'一级类名修改成功'
        }
    }
    amendOne().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            code:'1002',
            msg:'一级类名修改失败'
        })
    })
})

// 删除一级类名
router,post('/deleteClassOne',(req,res,next)=>{
    const {enname_one,id}=req.body

    const sqlone = `delete from one_class where id='${id}'`
    
    const sqltwo = `delete from two_class where parent_id='${id}'`

    async function deleteOne() {
        await sqlHandle(sqlone)
        await sqlHandle(sqltwo)
        return {
            code:'1014',
            msg:'一级类名删除成功'
        }
    }
    deleteOne().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            code:'1015',
            msg:'一级类名删除失败'
        })
    })
})

// 插入二级类名
router.post("/addTowClass",(req,res,next)=>{
    var sqlinsertOne=`insert into two_class(id,paerent_id,enname,cnname,article_num,time) values('${Unique()}','${req.body.oneId}','${req.body.enname_two}',0,'${creatTime()}')`
    async function addTwo() {
        await sqlHandle(sqlinsertOne);
        return {
            code:'1123',
            msg:'二级数据插入成功'
        }
    }
    addTwo().then((data)=>{
        res.send(data)
     }).catch((err)=>{
        res.send({
          code:"1124",
          msg:"二级数据插入失败"
        })
     })
})

// 编辑二级分类
router.post('amendClassTwo',(req,res,next)=>{
    var updatesql = `update two_class set enname='${req.body.enname}',cnname='${req.body.cnname}',time='${creatTime()}' where id='${req.body.id}'`

    sqlHandle(updatesql).then((data)=>{
        res.send({
          code:"1139",
          msg:"二级分类修改成功"
        })
    }).catch((err)=>{
      res.send({
            code:"1140",
            msg:"二级分类修改失败",
        })
    })
})

// 获取一级分类列表
router.get("/getOneClass",(req,res,next)=>{
    const sql=`select * from one_class`
    readHandle(sql).then((data)=>{
      res.send({
        code:"1121",
        msg:"获取一级类名成功",
        data
      })
    }).catch((err)=>{
      res.send({
        code:"1122",
        msg:"获取一级类名失败"
      })
    })
})
