import Vue from 'vue';
import App from './App.vue';
import router from './router';
import eventBus from './plugins/event-bus'
Vue.use(eventBus)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
