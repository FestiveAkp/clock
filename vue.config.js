module.exports = {
    pluginOptions: {
        prerenderSpa: {
            registry: undefined,
            renderRoutes: [
                '/'
            ],
            useRenderEvent: true,
            headless: true,
            onlyProduction: true
        }
    },

    assetsDir: 'assets/',

    publicPath: '/clock/'
}
