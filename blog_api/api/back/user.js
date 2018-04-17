var express = require('express');
var router = express.Router();
var {
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