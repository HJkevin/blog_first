<template>
    <div @click="clicks">
      loding
    </div>
</template>
<script>
import {mapState} from 'vueX'
export default {
  data(){
      return{
        indexDatas:null
      }
  },
  methods: {
    clicks() {
      this.$store.dispatch('get_data')
      let data = this.$store.state.indexData
      if(data){//有数据跳转index
        this.$router.push('/index')
      } 
    }
  }
}
</script>

