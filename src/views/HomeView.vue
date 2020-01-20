<template>
    <div class="hero-body">
        <div class="container has-text-centered">
            <h1 class="has-text-weight-medium" v-text="time"></h1>
            <h2 v-text="date"></h2>
            <router-link class="button is-dark is-outlined" to="/second">Exam Mode</router-link>
        </div>     
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'HomeView',

        data() {
            return {
                time: '',
                date: ''
            };
        },

        methods: {
            currentTime() {
                this.time = moment().format('h:mm:ss a');
                this.date = moment().format('dddd, LL');
            }
        },

        mounted() {
            this.interval = setInterval(this.currentTime, 1000);
        },

        beforeDestroy() {
            clearInterval(this.interval);
        }
    }
</script>

<style scoped>
    h1 {
        font-size: 12em;
    }

    h2 {
        font-size: 3em;
    }

    a {
        margin-top: 3rem;
    }
</style>
