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

// 前台获取所有可显示的文章接口
router.get('/getArticleAll', (req, res, next)=>{
    var sqlone = `select * from one_class`
    var sqltwo = `select * from two_class`
  
    // 拼接查询文章的sql
    const connectSql = (oneClass) =>{
  
      // 根据一级类名拼接sql
      var selectArtSql = `select * from (`
        oneClass.forEach(function(i, index){
          if(index < (oneClass.length - 1)){// 不是最后一个
            selectArtSql += `select * from ${i.enname} UNION ALL`
          }else{
            selectArtSql += `select * from ${i.enname}) as table_all order by time desc`
          }
        }, this);
        return selectArtSql
    }
  
    // 将一二级类名的中英文标识添加入文章列表
    const connectArticle = (data)=>{
      const {articleData, oneClass, twoClass} = data
      return articleData.map(function(i){
        oneClass.forEach(function(j){
          if(j.id == i.oneId) {
            i.enname_one = j.enname
            i.cnname_one = j.cnname
          }
        })
        twoClass.forEach(function(j){
          if(j.id == i.twoId) {
            i.enname_two = j.enname
            i.cnname_two = j.cnname
          }
        })
        return i
      });
    }
  
    const asyncGetArticle = async function(){
      let oneClass = await readHandle(sqlone)
      let twoClass = await readHandle(sqltwo)
  
      let articleData = await readHandle(connectSql(oneClass))
      return connectArticle({articleData, oneClass, twoClass})
    }
  
    asyncGetArticle().then((data) =>{
      res.send({
        code:'2011',
        msg:'查询文章成功',
        data
      })
    }).catch((err)=>{
      res.send({
        code:'2012',
        msg:'查询文章失败'
      })
    })
  })

  // 根据一级分类查询二级分类列表
  router.get('/getClassTwo', function(req, res, next){
    var sqlone = `select * from one_class`
  
    // 拼接查询文章的sql
    const connectSql = (oneClass) =>{
      // 根据一级类名拼接sql
  
      var selectArtSql = `select * from (`
        oneClass.forEach(function(i, index){
          if(index < (oneClass.length - 1)){// 不是最后一个
            selectArtSql += `select * from ${i.enname} UNION ALL`
          }else{
            selectArtSql += `select * from ${i.enname}) as table_all where id = '${req.query.id}' order by time desc`
          }
        }, this);
        return selectArtSql
    }
      // 经一级类名的中英文标识添加入文章列表
      const connectArticle = (data) =>{
        const {articleData, oneClass} = data
        return articleData.map(function(i){
          oneClass.forEach(function(j){
            if(j.id == i.oneId) {
              i.enname_one = j.enname
              i.cnname_one = j.cnname
            }
          })
          return i
        });
      }
      const asyncGetArticle=async function(){
        let oneClass=await  readHandle(sqlone)
        let articleData=await  readHandle(connectSql(oneClass))
        return connectArticle({articleData,oneClass})
      }
      asyncGetArticle().then((data)=>{
          res.send({
              code: "2021",
              data,
              msg: "查询成功"
          })
      }).catch((err)=>{
          res.send({
              code: "2022",
              data: null,
              msg: "查询失败"
          })
      })
  })