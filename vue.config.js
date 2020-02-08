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

    publicPath: process.env.NODE_ENV === 'production'
        ? '/clock/'
        : '/'
}
