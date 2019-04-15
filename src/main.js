import Vue from 'vue'
import vRouter from 'vue-router'
import App from './App.vue'
import {appRoutes} from './routes'

Vue.config.productionTip = false;

Vue.use(vRouter);
const appRouter=new vRouter({routes:appRoutes,mode:'history'});

new Vue({
  render: h => h(App),
  router:appRouter
}).$mount('#app')
