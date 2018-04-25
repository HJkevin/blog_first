import vueRouter from "vue-router"

import Vue from "vue"
Vue.use(vueRouter)

let Loding = resolve => require(['@/components/Loding.vue'], resolve)
let index = resolve => require(['@/components/index.vue'], resolve)

export default new vueRouter({
  routes: [
    {
      path: "/",
      redirect: "/loding"
    },
    {
        path: "/loding",
        component: Loding
    },
    {
      path: "/index",
      component: index
    }
  ]
})