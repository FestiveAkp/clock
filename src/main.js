import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import HomeView from './views/HomeView.vue';
import SecondView from './views/SecondView.vue';

import 'bulma/css/bulma.css';

Vue.config.productionTip = true;
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/second',
            name: 'second',
            component: SecondView
        }
        // TODO: fallback route for 404
    ]
});

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app');
