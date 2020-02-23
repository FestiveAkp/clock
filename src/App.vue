<template>
    <div id="clock-app">
        <canvas id="g-canvas"></canvas>
        <section class="hero is-fullheight">
            <div class="hero-body">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
    import Granim from 'granim';
    import screenfull from 'screenfull';
    import { gradients } from './gradients';

    export default {
        name: 'app',

        methods: {
            startGranim() {
                new Granim({
                    element: '#g-canvas',
                    direction: 'diagonal',
                    states: {
                        "default-state": {
                            gradients
                        }
                    }
                });
            }
        },

        mounted() {
            this.startGranim();
            this.$buefy.snackbar.open({
                type: 'is-white',
                duration: 5000,
                position: 'is-top',
                message: 'Make me fullscreen!',
                actionText: 'Go',
                onAction: () => screenfull.request()
            });
        }
    }
</script>

<style>
    /* https://google-webfonts-helper.herokuapp.com/fonts */
    @font-face {
        font-family: 'Varela Round';
        font-style: normal;
        font-weight: 400;
        src: local('Varela Round Regular'), local('VarelaRound-Regular'),
            url('../fonts/varela-round-v12-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../fonts/varela-round-v12-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    html {
        overflow: hidden !important;
    }

    canvas {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
</style>
