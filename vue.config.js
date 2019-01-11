module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
    // 构建输出目录
    outputDir: 'dist', 
    // 静态资源目录 (js, css, img, fonts)
    assetsDir: 'assets', 
    // 是否开启生产环境sourceMap
    productionSourceMap: false,
    // 是否开启eslint保存检测
    lintOnSave: true, 
    // webpack配置
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
        // 配置跨域处理,只有一个代理
        // proxy: 'http://localhost:4000' 
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/foo': {
                target: 'http://localhost:5000',
                ws: true,
                changeOrigin: true
            },
            '/github': {
                target: 'https://api.github.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/github': ''
                }
            },
            '/douban': {
                target: "http://api.douban.com/v2",
                changeOrigin: true,
                pathRewrite: {
                    '^/douban': ''
                }
            }
        }
    }
}