
// import aa from "./js/common.js"
// console.log(aa)
// import app from "./components/app.vue"
// import Vue from " vue/dist/vue.js ";
import Vue from "vue"
<<<<<<< HEAD
=======
import router from "./router"
//import store from "./store"
import "./directives/index"
import "./components/register.js"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import vueAxios from "vue-axios"
import axios from "axios"

Vue.use(vueAxios,axios)





>>>>>>> abf50b7d1292dfeb41f1777aa17deccbb44bd1b2

new Vue({
  el:"#root",
  router,
  //store,
  template:"<app />",
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