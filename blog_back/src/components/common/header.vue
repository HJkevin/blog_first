<template>
   <div class="header">
        <h3>个人博客后台管理系统</h3>
        <p>用户姓名：{{username}}</p>
   </div>
</template>

<script>
export default {
  name: 'heads',
  data () {
    return {
        username:""
    }
  },
    mounted(){
      console.log(sessionStorage.getItem("userName"))
      this.username=sessionStorage.getItem("userName")
     
    }
}
</script>

<style scoped>
  .header{
    height: 50px;
    line-height: 50px;
    background: lightblue;
    overflow: hidden;
    padding:0 20px;
  }
  .header h3{
    float: left;
    height: 50px;
    margin:0;
  }
  .header p{
    float: right
  }

</style>
