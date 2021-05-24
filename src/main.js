import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './Router/index';
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
