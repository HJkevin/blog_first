<template>
  <div >
    <headerC></headerC>
    <div class="main">
      <asideC class="left"></asideC>
      <router-view class="right"></router-view>
    </div>
  </div>
</template>

<script>

  
export default {
  name: 'back_main',
  data () {
    return {
		
    }
  },
  methods:{
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  overflow: hidden
}
.main .left{
  float: left
}
.main .right{
  float: left;
  width: 70%;
}
</style>
