<template>
    <CThemeProvider>
        <Nuxt />
    </CThemeProvider>
</template>

<script>
    import { CThemeProvider } from '@chakra-ui/vue';

    export default {
        components: { CThemeProvider }
    }
</script>
