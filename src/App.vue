<template>
    <div id="app">
        <canvas id="g-canvas"></canvas>
        <section class="hero is-fullheight">         
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    import Granim from 'granim';
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
        }
    }
</script>

<style>
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
