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

// 获取一级二级分类
router.get("/class", (req, res, next) => {
    const sqlOneClass = `select * from one_class`
    const sqlTwoClass = `select * from two_class`
    const asyncGetClass = async function () {
        const oneData = await readHandle(sqlOneClass)
        const twoData = await readHandle(sqlTwoClass)
        return { oneData, twoData }
    }
    asyncGetClass().then((data) => {
        res.send({
            code: "2081",
            msg: "获取类名成功",
            data
        })
    }).catch((err) => {
        res.send({
            code: "2082",
            msg: "获取类名失败"
        })
    })

})
// 插入文章
router.post("/insert", (req, res, next) => {
    let { enname_one, oneId, twoId, article_name, editer, content, time, daodu, imgsrc, recommend, art_show } = req.body;
    var sql = `insert into ${enname_one}(id,oneId,twoId,article_name,editer,content,time,visitors,daodu,imgsrc,recommend,art_show) values('${Unique()}','${oneId}','${twoId}','${article_name}','${editer}','${content}','${time}',0,'${daodu}','${imgsrc}','${recommend}','${art_show}')`
    var updateArticalNum = `update two_class set article_num=article_num+1 where id='${twoId}'`

    const addArticle = async function () {
        await sqlHandle(sql)
        await sqlHandle(updateArticalNum)
        return
    }
    addArticle().then((data) => {
        res.send({
            code: "2091",
            msg: "插入文章成功"
        })
    }).catch((err) => {
        res.send({
            code: "2092",
            msg: "插入文章失败"
        })
    })

})
