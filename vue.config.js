module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
    // 构建输出目录
    outputDir: 'dist', 
    // 静态资源目录 (js, css, img, fonts)
    assetsDir: 'assets', 
    productionSourceMap: false,
    // 是否开启eslint保存检测
    lintOnSave: true, 
    configureWebpack: {
        // 从bundle文件中排除的依赖 (资源名：全局方法名)
        externals: {
            vue: "Vue",
            vuex: "Vuex",
            "vue-router": "VueRouter",
            "vue-i18n": "VueI18n",
            "axios": "axios",
            "jquery": "$",
        }
    },
    devServer: {
        // 端口号
        port: 8081, 
        host: 'localhost',
        // https:{type:Boolean}
        https: false, 
        // 配置自动启动浏览器
        open: true, 
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}