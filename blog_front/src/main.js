
import Vue from "vue"
import router from "./router"
import store from "./store"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import vueAxios from "vue-axios"
import axios from "axios"

Vue.use(vueAxios,axios)

// router.beforeEach((to,from,next)=>{
//   if(to.path=="/"){
//     next()
//   }else{
//     console.log('数据请求失败')
//   }
// })

new Vue({
  el:"#root",
  router,
  store,
  template:"<app />",
  components: {
      app: resolve => require(['./components/app.vue'], resolve)
  }
})