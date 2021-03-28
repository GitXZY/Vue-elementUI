import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Animation from '@/components/Animation'

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
    {
      path:'/Animation',
      name:'Animation',
      component:Animation,
    }
  ],
  mode:"history",
  
})
