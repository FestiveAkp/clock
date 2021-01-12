<template>
    <header class="animated-header">
        <div class="top-left">
            <h1 class="is-size-5 has-text-weight-semibold has-text-dark">Gradient Clock</h1>
        </div>
        <div class="top-right">
            <FullscreenButton />
        </div>
    </header>
</template>

<script>
    import FullscreenButton from '../components/FullscreenButton';

    export default {
        components: { FullscreenButton }
    }
</script>

<style scoped>
    .animated-header {
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    div.top-right>:not(:last-child) {
        margin-right: 1rem;
    }

    button, a {
        background-color: transparent;
        border: 0 !important;
    }
</style>
