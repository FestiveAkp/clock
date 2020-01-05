import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import HomeView from './views/HomeView.vue';
import SecondView from './views/SecondView.vue';

Vue.config.productionTip = true;
Vue.use(VueRouter);

const router = new VueRouter({
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
    ]
});

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app');
