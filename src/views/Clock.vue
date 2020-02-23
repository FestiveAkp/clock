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
