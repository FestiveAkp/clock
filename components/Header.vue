<template>
    <header class="animated-header">
        <div class="top-left">
            <h1 class="is-size-5 has-text-weight-semibold has-text-dark">Gradient Clock</h1>
        </div>
        <c-stack :spacing="4" direction="row" class="top-right">
            <div>
                <FullscreenButton />
            </div>
            <div>
                <Menu />
            </div>
        </c-stack>
    </header>
</template>

<script>
    import { CStack } from '@chakra-ui/vue';
    import Menu from '../components/Menu';
    import FullscreenButton from '../components/FullscreenButton';

    export default {
        components: { CStack, FullscreenButton, Menu }
    }
</script>

<style>
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

    .top-right>:not(:last-child) {
        margin-right: 1rem;
    }

    button, a {
        background-color: transparent !important;
        border: 0 !important;
    }
</style>
