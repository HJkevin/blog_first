<<<<<<< HEAD
import vueRouter from "vue-router"

import Vue from "vue"
Vue.use(vueRouter)


let Login=resolve => require(['@/components/login.vue'], resolve)
let backMain=resolve => require(['@/components/main/main.vue'], resolve)
let back=resolve => require(['@/components/main/index.vue'], resolve)
<<<<<<< HEAD
=======
let add_article=resolve => require(['@/components/main/add_article.vue'], resolve)
>>>>>>> abf50b7d1292dfeb41f1777aa17deccbb44bd1b2
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
<<<<<<< HEAD
=======
        },{
          path:"add_article",
          component:add_article
>>>>>>> abf50b7d1292dfeb41f1777aa17deccbb44bd1b2
        }
      ]
     }
   ]
=======
import vueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(vueRouter);

let Login = resolve => require(['@/components/login.vue'], resolve);
let backMain = resolve => require(['@/components/main/main.vue'], resolve);
let back = resolve => require(['@/components/main/index.vue'], resolve)

let addOneClass = resolve => require(['@/components/main/classify/addOneClass.vue'], resolve)
let addTwoClass = resolve => require(['@/components/main/classify/addTwoClass.vue'], resolve)
let classList = resolve => require(['@/components/main/classify/classList.vue'], resolve)

export default new vueRouter({
    routes: [
        {
            path: '/',
            component: Login,
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/back',
            component: back,
            children: [
                {
                    path: 'main',
                    component: backMain
                },
                {
                    path: 'add_article',
                    component: backMain
                },
                {
                    path: 'article_list',
                    component: backMain
                },
                {
                    path: 'add_one_class',
                    component: addOneClass
                },
                {
                    path: 'add_two_class',
                    component: addTwoClass
                },
                {
                    path: 'class_list',
                    component: classList
                },
            ]
        }
    ]
>>>>>>> ee0599be9563a84014d0472a8ad05da536f96e7a
})