const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  // 相对路径
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // 生产环境构建文件的目录
  outputDir: "dist",
  // 静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: "assets/global",
  // 是否关闭文件名哈希
  filenameHashing: false,
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)
  indexPath: "index.html",
  productionSourceMap: false,
  css: {
    // css拆分ExtractTextPlugin插件，默认true
    extract: true
  },
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@views", resolve("src/views"))
      .set("@components", resolve("src/components"))
      .set("@assets", resolve("src/assets"))
      .set("@widgets", resolve("src/components/widgets"))
      .set("@layout", resolve("src/components/layout"));

    // vue骨架屏插件配置
    /* config.plugin("skeleton").use(require("vue-skeleton-webpack-plugin"), [
      {
        webpackConfig: {
          entry: {
            index: resolve("src/utils/skeleton.ts")
          }
        },
        insertAfter: '<div id="index">',
        minimize: true,
        quiet: false
      }
    ]); */

    // 查看打包组件大小情况
    /* if (process.env.Bundle_Analyzer) {
      // 在运行命令中添加 --report参数运行， 如：npm run build --report
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    } */

    // snapsvg
    config.module
      .rule("snapsvg")
      .test(require.resolve("snapsvg"))
      .use("imports-loader?this=>window,fix=>module.exports=0")
      .loader("imports-loader")
      .end();

    // 生产环境下打包dist为zip
    if (process.env.NODE_ENV === "production") {
      config
        .plugin("zip")
        .use(require("zip-webpack-plugin"), [
          { path: resolve("dist"), filename: "dist.zip" }
        ]);
    }
  },
  // 构建时开启多进程处理babel编译
  parallel: require("os").cpus().length > 1,
  // 第三方插件配置
  pluginOptions: {
    // 国际化
    i18n: {
      locale: "zh",
      fallbackLocale: "zh",
      localeDir: "locales",
      enableInSFC: true
    }
  },
  devServer: {
    // 是否在浏览器打开
    open: false,
    host: "localhost",
    // 端口号
    port: 8081,
    proxy: {
      "/api": {
        target: "https://api.apiopen.top",
        // 获取cookie
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
        secure: false
      },
      "/github": {
        target: "https://api.github.com",
        changeOrigin: true,
        pathRewrite: {
          "^/github": ""
        }
      },
      "/douban": {
        target: "http://api.douban.com/v2",
        changeOrigin: true,
        pathRewrite: {
          "^/douban": ""
        }
      },
      "/ip": {
        target: "https://extreme-ip-lookup.com/json/",
        changeOrigin: true,
        pathRewrite: {
          "^/ip": ""
        }
      },
      "/weather": {
        target: "https://bird.ioliu.cn/weather",
        changeOrigin: true,
        pathRewrite: {
          "^/weather": ""
        }
      }
    }
  }
};
