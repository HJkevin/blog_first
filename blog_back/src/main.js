
// import aa from "./js/common.js"
// console.log(aa)
// import app from "./components/app.vue"
// import Vue from " vue/dist/vue.js ";
import Vue from "vue"
<<<<<<< HEAD
Vue.config.productionTip = false

import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Axios from "axios"
import VueAxios from "vue-axios"
 Vue.use(VueAxios,Axios)
=======
import router from "./router"
//import store from "./store"

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

import vueAxios from "vue-axios"
import axios from "axios"

Vue.use(vueAxios,axios)
>>>>>>> 7e4a77f26d22353f88cca666722579ce66ac32c6

new Vue({
  el:"#root",
  router,
  template:"<app />",
  components: {
      app: resolve => require(['./components/app.vue'], resolve)
  }
})