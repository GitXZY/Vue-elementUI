import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Animation',
      name:'Animation',
      component:Animation,
    }
  ],
  mode:"history",
  
})
