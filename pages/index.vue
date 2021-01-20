<template>
    <div id="clock-app">
        <Gradient />
        <HeaderAnimationTarget>
            <section class="hero is-fullheight">
                <div class="hero-body">
                    <Header />
                    <Clock />
                </div>
            </section>
        </HeaderAnimationTarget>
    </div>
</template>

<script>
    import Clock from '../components/Clock';
    import Gradient from '../components/Gradient';
    import HeaderAnimationTarget from '../components/HeaderAnimationTarget';
    import Header from '../components/Header';

    export default {
        components: { Clock, Gradient, HeaderAnimationTarget, Header },

        mounted() {
            console.log('Hey there.');
            console.log('https://github.com/FestiveAkp/clock');
        }
    }
</script>

<style>
    html {
        overflow: hidden !important;
    }

    .container.is-fluid {
        padding-left: 16px;
        padding-right: 16px;
    }
</style>
