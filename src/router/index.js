import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Animation from '@/components/Animation'
import Layout from "@/components/Layout"
import Container from "@/components/Container"

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
};
Vue.use(Router)
export default new Router({
 
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {//过度动画
      path:'/Animation',
      name:'Animation',
      component:Animation,
    },
    {//布局
      path:'/Layout',
      name:"Layout",
      component:Layout,
    },
    {//布局容器
      path:'/Container',
      name:'Container',
      component:Container,
    }
  ],
  mode:"history",
  
})
