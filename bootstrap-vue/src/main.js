import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import bootstrap from './bootstrap';

Vue.config.productionTip = false
Vue.use(bootstrap);

new Vue({
    render: h => h(app),})

createApp(App).mount('#app')

