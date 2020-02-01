<template>
    <div class="hero-body">
        <div class="container has-text-centered">
            <h1 v-text="time"></h1>
            <h2 v-text="date"></h2>
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
        font-size: 12vw;
        font-family: 'Varela Round', sans-serif;
    }

    h2 {
        font-size: 3vw;
        font-family: 'Varela Round', sans-serif;
    }

    a {
        margin-top: 3rem;
    }

    div.container {
        margin-bottom: 2em;
    }
</style>
