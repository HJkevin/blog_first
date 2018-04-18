<template>
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
