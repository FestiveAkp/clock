<template>
    <div id="app">
        <canvas id="g-canvas"></canvas>
        <router-link to="/">Home</router-link>
        <router-link to="/second">Second</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import Granim from 'granim';

export default {
    name: 'app',
    
    components: {
        // HomeView
    },

    methods: {
        startGranim() {
            new Granim({
                element: '#g-canvas',
                states: {
                    "default-state": {
                        gradients: [
                            ['#1CD8D2', '#93EDC7'],
                            ['#A1FFCE', '#FAFFD1'],
                            ['#834D9B', '#D04ED6']
                        ]
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
