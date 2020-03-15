import Vue from 'vue';
import VueRouter from 'vue-router';
import { Snackbar } from 'buefy';

import App from './App.vue';
import Clock from './views/Clock.vue';

import 'buefy/dist/buefy.css';

Vue.config.productionTip = true;
Vue.use(VueRouter);
Vue.use(Snackbar);

const router = new VueRouter({
    mode: 'history',
    base: '/clock',
    routes: [
        {
            path: '/',
            name: 'clock',
            component: Clock
        }
        // TODO: fallback route for 404
    ]
});

new Vue({
    render: h => h(App),
    mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
    router: router
}).$mount('#clock-app');
