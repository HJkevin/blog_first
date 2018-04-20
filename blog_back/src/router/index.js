import vueRouter from "vue-router"

import Vue from "vue"
Vue.use(vueRouter)


let Login=resolve => require(['@/components/login.vue'], resolve)
let backMain=resolve => require(['@/components/main/main.vue'], resolve)
let back=resolve => require(['@/components/main/index.vue'], resolve)
var add_one_class= resolve => require(['@/components/class/add_one_class'], resolve)
var add_two_class= resolve => require(['@/components/class/add_two_class'], resolve)
var classList= resolve => require(['@/components/class/classList'], resolve)
export default new vueRouter({
   routes:[
     {
       path:"/",
       component:Login,
       redirect: "/login"
     },
     {
      path:"/login",
      component:Login
     },
     {
      path:"/back",
      component:back,
      children:[
        {
          path:"main",
          component:backMain
        },
        {
          path: 'add_one_class',
          name: 'add_one_class',
          component: add_one_class,
        },
        {
          path: 'add_two_class',
          name: 'add_two_class',
          component: add_two_class,
        },
        {
          path: 'class_list',
          name: 'classList',
          component: classList,
        }
      ]
     }
   ]
})