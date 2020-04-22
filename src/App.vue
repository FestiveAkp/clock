<template>
    <div id="clock-app">
        <canvas id="g-canvas"></canvas>
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="header-absolute">
                    <a href="https://github.com/FestiveAkp/clock" target="_blank" rel="noopener noreferrer" class="button is-dark is-outlined no-border">
                        <span class="icon is-large">
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
                        </span>
                    </a>
                    <button @click="toggleFullscreen" v-if="!isFullscreen" class="button is-dark is-outlined no-border">Go fullscreen</button>
                </div>
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

        data() {
            return {
                isFullscreen: false
            };
        },

        methods: {
            startGranim() {
                new Granim({
                    element: '#g-canvas',
                    direction: 'diagonal',
                    stateTransitionSpeed: 2000,
                    states: {
                        "default-state": {
                            gradients
                        }
                    }
                });
            },

            toggleFullscreen() {
                if (screenfull.isEnabled) {
                    screenfull.request();
                    screenfull.on('change', () => {
                        this.isFullscreen = screenfull.isFullscreen ? true : false;
                    })
                }
            }
        },

        mounted() {
            this.startGranim();
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
            url('../public/fonts/varela-round-v12-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../public/fonts/varela-round-v12-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
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

    div.header-absolute {
        position: absolute;
        top: 0;
        left: 0;
        padding: 1rem;
    }

    div.header-absolute>:not(:last-child) {
        margin-right: 1rem;
    }

    .no-border {
        border: 0 !important;
    }
</style>
