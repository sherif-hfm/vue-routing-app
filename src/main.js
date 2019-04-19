import Vue from 'vue'
import vRouter from 'vue-router'
import App from './App.vue'
import {appRoutes} from './routes'

Vue.config.productionTip = false;

Vue.use(vRouter);
const appRouter=new vRouter({
  routes:appRoutes,
  mode:'hash',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    }
  }
});
appRouter.beforeEach((to, from, next) => {
  console.log('beforeEach');
  next();
});
appRouter.afterEach((to, from) => {
  console.log('afterEach');
})

new Vue({
  render: h => h(App),
  router:appRouter
}).$mount('#app')
