import Vue from 'vue'
import router from './router'
import {Swipe, SwipeItem} from 'mint-ui';
import App from './App.vue'


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


new Vue({
  el:'#app',
  render:h => h(App),
  router
})
