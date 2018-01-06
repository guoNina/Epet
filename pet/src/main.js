import Vue from 'vue'
import VueResource from 'vue-resource'
import {Swipe, SwipeItem} from 'mint-ui';

import router from './router'
import App from './App.vue'

import './mock/mockserver'
Vue.use(VueResource)


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


new Vue({
  el:'#app',
  render:h => h(App),
  router
})
