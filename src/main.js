import Vue from 'vue';
import App from './App.vue';

import 'bulma/css/bulma.min.css';

Vue.config.productionTip = true;

new Vue({
    render: h => h(App),
    mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#clock-app');
