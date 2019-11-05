const path = require("path");
const pages = require("./src/config/pages");

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
  // 多页配置
  // pages: pages.getPages(),
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
      .set("@assets", resolve("src/assets"))
      .set("@mixins", resolve("src/mixins"))
      .set("@utils", resolve("src/utils"))
      .set("@pages", resolve("src/views/pages"))
      .set("@comps", resolve("src/components"))
      .set("@layout", resolve("src/components/layout"))
      .set("@widgets", resolve("src/components/widgets"));

    // 查看打包组件大小情况
    if (process.env.Bundle_Analyzer) {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }

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
    // 生成local和network网络环境
    host: "0.0.0.0",
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
      "/music1": {
        target: "http://p2.music.126.net/",
        changeOrigin: true,
        pathRewrite: {
          "^/music": ""
        }
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
