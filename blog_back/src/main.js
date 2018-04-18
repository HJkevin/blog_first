import Vue from "vue"
<<<<<<< HEAD
import router from "./router"
<<<<<<< HEAD
import store from "./store"
=======
//import store from "./store"
>>>>>>> abf50b7d1292dfeb41f1777aa17deccbb44bd1b2
=======
import router from './router'
import store from './store'
>>>>>>> ee0599be9563a84014d0472a8ad05da536f96e7a
import "./directives/index"
import "./components/register.js"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

<<<<<<< HEAD
import vueAxios from "vue-axios"
import axios from "axios"

Vue.use(vueAxios,axios)


<<<<<<< HEAD
router.beforeEach((to,from,next)=>{
  if(to.path=="/login"){
    next()
  }else{
    if(sessionStorage.getItem("userId")){
      next()
    }else{
=======
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
>>>>>>> ee0599be9563a84014d0472a8ad05da536f96e7a
      next("/login")
    }
  }
})
<<<<<<< HEAD
=======
>>>>>>> abf50b7d1292dfeb41f1777aa17deccbb44bd1b2




new Vue({
  el:"#root",
  router,
<<<<<<< HEAD
  store,
=======
  //store,
>>>>>>> abf50b7d1292dfeb41f1777aa17deccbb44bd1b2
  template:"<app />",
=======

new Vue({
  el: "#root",
  router,
  template: "<app />",
>>>>>>> ee0599be9563a84014d0472a8ad05da536f96e7a
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