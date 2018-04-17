<template>
  <div>
      <router-view></router-view>
  </div>
      
</template>
<script>
  export default{
      data(){
        return {name:"zhangsan"}
      }
  }
</script>
<style scoped>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  list-style: none;
  margin:0;
  padding:0;
  text-decoration: none;
}
a{
  color:#2c3e50;
}
</style>