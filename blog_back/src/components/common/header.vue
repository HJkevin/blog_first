<template>
   <div>
        <p>个人博客</p>
        <p>用户姓名：{{username}}</p>
   </div>
</template>

<script>
export default {
  name: 'head',
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
  div{
    height: 50px;
    background: lightblue;
    overflow: hidden;
    line-height:50px;
    padding:0 20px;
  }
  div p:first-child{
    float: left
  }
  div p{
    float: right
  }

</style>
