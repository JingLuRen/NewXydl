import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {post, get, patch, put} from './components/axios/http.js'

Vue.config.productionTip = false

//axios
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import vueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
Vue.use(vueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
