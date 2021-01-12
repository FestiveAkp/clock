<template>
    <div class="container is-fluid has-text-centered">
        <h1 v-text="time" class="time-display"></h1>
        <h2 v-text="date" class="date-display"></h2>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'Clock',

    data() {
        return {
            time: '',
            date: ''
        };
    },

    methods: {
        getCurrentTime() {
            this.time = moment().format('h:mm:ss a');
            this.date = moment().format('dddd, LL');
        }
    },

    mounted() {
        this.getCurrentTime();
        this.interval = setInterval(this.getCurrentTime, 1000);
    },

    beforeDestroy() {
        clearInterval(this.interval);
    }
}
</script>

<style scoped>
    /* https://google-webfonts-helper.herokuapp.com/fonts */
    @font-face {
        font-family: 'Varela Round';
        font-style: normal;
        font-weight: 400;
        src: local('Varela Round Regular'), local('VarelaRound-Regular'),
            url('~assets/fonts/varela-round-v12-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('~assets/fonts/varela-round-v12-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    .time-display {
        font-size: 12vw;
        font-family: 'Varela Round', sans-serif;
    }

    .date-display {
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
