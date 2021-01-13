export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Gradient Clock',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },

            { hid: 'description', name: 'description', content: 'A beautifully simple online date and time display in front of a colorful moving gradient.' },

            { name: 'msapplication-TileColor', content: '#da532c' },
            { name: 'msapplication-config', content: '/clock/browserconfig.xml' },
            { name: 'theme-color', content: '#000000' },

            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://akash.dev/clock/' },
            { property: 'og:title', content: 'Gradient Clock' },
            { property: 'og:description', content: 'A beautifully simple online date and time display in front of a colorful moving gradient.' },
            { property: 'og:image', content: 'https://akash.dev/clock/thumbnail.png' },
            { property: 'twitter:card', content: 'summary_large_image' },
            { property: 'twitter:image:alt', content: 'Large clock in front of gradient' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/clock/favicon.ico' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/clock/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/clock/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/clock/favicon-16x16.png' },
            { rel: 'manifest', href: '/clock/site.webmanifest' },
            { rel: 'mask-icon', href: '/clock/safari-pinned-tab.svg', color: '#5bbad5' },
            { rel: 'shortcut icon', href: '/clock/favicon.ico' }
        ],
        script: [
            { 'data-goatcounter': 'https://akashdev.goatcounter.com/count', async: true, src: '//gc.zgo.at/count.js', body: true }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        'nuxt-purgecss'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        '@nuxtjs/bulma'
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
    },

    // Router configuration
    router: {
        base: '/clock/'
    }
}
