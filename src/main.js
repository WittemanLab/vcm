import Vue from 'vue'
import App from './App.vue'

// import VueSlider from 'vue-slider-component'
import ProgressBar from 'vuejs-progress-bar'

import vuetify from './plugins/vuetify'
Vue.use(ProgressBar);
//Vue.config.productionTip = false
require("./scss/main.scss");
// Vue.component('VueSlideBar', VueSlider)
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
