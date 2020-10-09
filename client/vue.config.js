const path = require('path')
const pkgName = process.env.npm_package_name
const zipPath = `./${pkgName}.zip`

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  // 相对路径
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 生产环境构建文件的目录
  outputDir: 'dist',
  // 静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'assets',
  // 是否关闭文件名哈希
  filenameHashing: false,
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)
  indexPath: 'index.html',
  // 多页配置
  // pages: pages.getPages(),
  productionSourceMap: false,
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('Api', resolve('src/api'))
      .set('Views', resolve('src/views'))
      .set('Assets', resolve('src/assets'))
      .set('Mixins', resolve('src/mixins'))
      .set('Utils', resolve('src/utils'))
      .set('Store', resolve('src/store'))
      .set('Layout', resolve('src/components/layout'))
      .set('Widgets', resolve('src/components/widgets'))

    // 查看打包组件大小情况
    if (process.env.Bundle_Analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }

    // 生产环境下打包dist为zip
    if (process.env.PKG_ZIP === 'true') {
      config.plugin('zip').use(require('filemanager-webpack-plugin'), [
        {
          onEnd: {
            delete: [zipPath],
            archive: [{ source: './dist', destination: zipPath }]
          }
        }
      ])
    }
  },
  // 构建时开启多进程处理babel编译
  parallel: require('os').cpus().length > 1,
  // 第三方插件配置
  pluginOptions: {
    // 国际化
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  devServer: {
    // 是否在浏览器打开
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // 获取cookie
        changeOrigin: true,
        secure: false
      },
      '/music1': {
        target: 'http://p2.music.126.net/',
        changeOrigin: true,
        pathRewrite: {
          '^/music': ''
        }
      },
      '/github': {
        target: 'https://api.github.com',
        changeOrigin: true,
        pathRewrite: {
          '^/github': ''
        }
      },
      '/douban': {
        target: 'http://api.douban.com/v2',
        changeOrigin: true,
        pathRewrite: {
          '^/douban': ''
        }
      },
      '/ip': {
        target: 'https://extreme-ip-lookup.com/json/',
        changeOrigin: true,
        pathRewrite: {
          '^/ip': ''
        }
      },
      '/weather': {
        target: 'https://bird.ioliu.cn/weather',
        changeOrigin: true,
        pathRewrite: {
          '^/weather': ''
        }
      },
      '/news': {
        target: 'https://iflow-api.uc.cn/feiyan/list',
        changeOrigin: true,
        pathRewrite: {
          '^/news': ''
        }
      },
      '/live': {
        target: 'http://cctvalih5ca.v.myalicdn.com',
        changeOrigin: true
      }
    }
  }
}
