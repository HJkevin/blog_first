var express = require('express');
var router = express.Router();
var hasOwnProperty=require('has-own-property-x');  //支持hasOwnProperty
var {
<<<<<<< HEAD
    sqlHandle,
    readHandle,
    searchHandle,
    searchHandleNormal,
    query
} = require('../../config/db_connect')
router.post("/", function (req, res, next) {
    var sql = "select * from user"
    query(sql, function (err, rows, fields) {
        let state = false;
        let user = false;
        let userI = null
        rows.forEach(function (i) {
            if (req.body.loginname === i.name) {
                user = true
                state = req.body.loginpw === i.password
                userI = i
            }
        });
        // 判断用户是否存在
        if (user) {
            // 判断用户名密码是否正确
            if (state) {
                res.send({
                    code: "1001",
                    userid: userI.id,
                    msg: "登录成功"
                })
            } else {
                res.send({
                    code: "1002",
                    userid: null,
                    msg: "登录失败"
                })
            }
        } else {
            res.send({
                code: "1003",
                userid: null,
                msg: "用户名不存在"
            })
        }


    })
})
module.exports = router;
=======
  sqlHandle,  //除查询外的其他操作
  readHandle,  //读取操作
  searchHandle,  //检测有无某条数据，有为false
  searchHandleNormal,  //检测有无某条数据，有为true
  query             // //基本操作
}=require("../../config/db_connect")


/* GET home page. */
router.post('/login', function(req, res, next) {
  let arg=req.body
  console.log(arg)
  if(hasOwnProperty(arg,"username")&&hasOwnProperty(arg,"password")){
    let {username,password}=arg
    var testUser=`select * from user where name='${username}'`
    console.log(testUser)
    readHandle(testUser).then((data)=>{
        console.log(data)
        if(data.length>0){
          if(data[0].password==password){
                  res.send({
                    code:"1001",
                    msg:"登录成功"
                  })
          }else{
            res.send({
              code:"1002",
              msg:"密码错误"
            })
          }
        }else{
          res.send({
            code:"1003",
            msg:"用户名不存在"
          })
        }
    })
  }else{
    res.send({
      code:"1000",
      msg:"未输入用户名或密码"
    })
  }
});
module.exports = router;
>>>>>>> 7e4a77f26d22353f88cca666722579ce66ac32c6
