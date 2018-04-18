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
})