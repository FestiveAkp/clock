<template>
    <div class="container has-text-centered">
        <h1 class="has-text-weight-medium" v-text="time"></h1>
    </div>    
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'HomeView',

        data() {
            return {
                time: ''
            };
        },

        methods: {
            currentTime() {
                this.time = moment().format('h:mm:ss a');
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        font-size: 6rem;
    }
</style>
