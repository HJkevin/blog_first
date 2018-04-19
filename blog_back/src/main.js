import Vue from "vue"
import router from "./router"
//import store from "./store"
import store from './store'
import "./directives/index"
import "./components/register.js"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import vueAxios from "vue-axios"
import axios from "axios"

Vue.use(vueAxios,axios)


import vueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(vueAxios, axios)

 // 路由拦截
router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    next()
  } else {
    if (sessionStorage.getItem("userId")) {
      next()
    } else {
      next("/login")
    }
  }
})

new Vue({
  el: "#root",
  router,
  template: "<app />",
  components: {
    app: resolve => require(['./components/app.vue'], resolve)
  }
})


// router.beforeEach((to,from,next)=>{
//   if(to.path=="/login"){
//     next()
//   }else{
//     if(sessionStorage.getItem("userId")){
//       next()
//     }else{
//       next("/login")
//     }
//   }
// })