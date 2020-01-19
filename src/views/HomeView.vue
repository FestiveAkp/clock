<template>
  <div class="hello">
    
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
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

</style>
