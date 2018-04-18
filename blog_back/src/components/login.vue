<template>
<<<<<<< HEAD
  <div class="login">
        <div class="content">
            <h2>
                个人博客:
            </h2>
            <ul>
                <li v-focus:test="loginname">
                <p>
                    <label>账号：</label>
                <input type="text" placeholder="请输入账号" v-model.lazy="loginname.val" @blur="fn(loginname)">
                </p>
                 <i style="color:red;display:block" v-if="loginname.state">{{loginname.msg}}</i>
            </li>
            <li v-focus:required="loginpw">
                <p>
                    <label>密码:</label>
                <input type="password" placeholder="请输入密码" v-model.lazy="loginpw.val" @blur="fn(loginpw)">
                </p>
                <i style="color:red;display:block" v-if="loginpw.state">{{loginpw.msg}}</i>
            </li>
            </ul>
            
            <div>
                <button @click="login">
                    登录
                </button>
            </div>
        </div>
  </div>
</template>

<script>
    export default {
        // name: 'login',
        data() {
            return {
                loginname: {
                    val: "",
                    msgread: "您输入的姓名不符合中文格式",
                    msg: "您输入的姓名不符合中文格式",
                    test: /^[a-zA-z]+$/,
                    state: false
                },
                // phonedata: {
                //     val: "",
                //     msgread: "您输入的手机号格式不对",
                //     msg: "您输入的手机号格式不对",
                //     blur: false,
                //     test: /^1[3|4|5|8][0-9]\d{4,8}$/
                // },
                loginpw: {
                    val: "",
                    msgread: "您输入的密码格式不对",
                    blur: false,
                    msg: "您输入的密码格式不对",
                    test: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
                    state: false
                }
            }
        },
        methods: {
            login() {
                // 判断是否值是否正确
                var _this = this
                if (!this.loginpw.state && !this.loginname.state && this.loginpw.val != "" && this.loginname.val != "") {
                    this.axios.post("/api/back_class", {
                        loginname: this.loginname.val,
                        loginpw: this.loginpw.val
                    }).then(function(data) {
                        console.log(data)
                        _this.$message(data.data.msg);
                        if (data.data.code == "1001") {
                            sessionStorage.setItem("userId", data.data.userid);
                            sessionStorage.setItem("username", _this.loginname.val);
                            _this.$router.push("/main")
                        }
                    })
                } else {
                    alert("请正确填写用户名密码")
                }

            },
            // 必填项的验证
            fn(val) {
                val.blur = true
            }
        },
        directives: {
            focus: {
                componentUpdated(el, option, vnode, oldVnode) {
                    var $testState = option.value.test.test(option.value.val)
                    if (option.value.val != "") {
                        if ($testState) {
                            option.value.state = false
                        } else {
                            option.value.state = true
                        }
                        option.value.msg = option.oldValue.msgread
                    } else {
                        if (option.arg == "required" && option.value.blur) {
                            option.value.state = true
                            option.value.msg = "不能为空"
                        } else {
                            option.value.state = false
                        }

                    }
                }

            }

        }
    }
</script>

<style scoped>
    .login {
        width: 100%;
        height: 600px;
    }
    
    .content {
        width: 400px;
        height: 400px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -200px;
        margin-left: -200px;
        border: 1px #ef5b00 solid;
    }
    
    .content h2 {
        color: #ef5b00;
        line-height: 85px;
        padding-left: 30px;
    }
    
    .content li i {
        font-style: normal;
        font-size: 14px;
        padding: 0 50px;
    }
    
    .content p {
        border: 1px solid #ccc;
        width: 300px;
        margin-left: 50px;
        height: 45px;
        margin-top: 25px;
        padding: 0 10px;
        box-sizing: border-box;
        line-height: 45px;
    }
    
    .content p input {
        border: none;
        outline: none;
    }
    
    .content div {
        width: 300px;
        margin-left: 50px;
        height: 45px;
        margin-top: 35px;
        box-sizing: border-box;
        line-height: 45px;
    }
    
    .content div button {
        width: 300px;
        height: 45px;
        background: #ef5b00;
        border: none;
        color: #fff;
        outline: none;
    }
</style>
=======
  <div>
      <ul id='from'>
      <li><h4 id="pleaselogin">请登陆</h4></li>
      <li>
          <input type="text" id="user"  placeholder="请输入用户名" >
      </li>
      <li>
          <input type="password" id="psw" placeholder="请输入密码">
      </li>
      <li><button type="success" id="log" >登陆</button></li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
      return{
         
      }
  }
}
</script>
<style>
#from {
		width: 400px;
		height: 300px;
		border: 1px solid #ccc;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		background: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        list-style:none;
	}

	h4 {
		font-weight: normal;
		text-align: center;
		font-size: 24px;
		padding: 10px 0;
		margin:0;
	}

	input {
		width: 80%;
		height: 40px;
		display: block;
		margin: 0 auto;
		border-radius: 15px;
		border: none;
		box-sizing: border-box;
		padding: 0 10px;
		outline: none;
		border:1px solid #ccc;
	}
li{
	margin:15px;
}
button{
    text-align:center;
    margin:0 auto;
}
</style>


>>>>>>> 7e4a77f26d22353f88cca666722579ce66ac32c6
