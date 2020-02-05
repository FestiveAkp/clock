import Vue from 'vue';
import VueRouter from 'vue-router';
// import Buefy from 'buefy';

import App from './App.vue';
import HomeView from './views/HomeView.vue';

import 'buefy/dist/buefy.css';

Vue.config.productionTip = true;
Vue.use(VueRouter);
// Vue.use(Buefy);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        }
        // TODO: fallback route for 404
    ]
});

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app');
