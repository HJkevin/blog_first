<template>
  <div class="load">
    <ul id="from">
      <li><h4 id="pleaselogin">请登陆</h4></li>
      <li v-aa>
          <input type="text" id="user"  placeholder="请输入用户名" >
      </li>
      <li v-aa>
          <input type="password" id="psw" placeholder="请输入密码">
      </li>
      <el-button type="success" id="log" @click="submit">登陆</el-button>
    </ul>
  
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        
    }
  },
  methods:{
    
    submit(){
      
    }
  },
  directives: {
    focus:{
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
	p {
		width: 70%;
		margin: 3px auto;
		height: 20px;
		line-height: 20px;
		color: #f00;
	}

	#log {
		width: 80%;
		display: block;
		margin: 20px auto;
		background:orange;
		border:0;
		outline: none;
	}

	#pleaselogin {
		padding: 20px 0;
	}

</style>
