# weijuer.github.io (normal) GitHub个人博客

> 我只是比你来坑的早，相信我你也可以！

## 项目预览
[在线地址](https://weijuer.github.io)

## 开发环境 (node + koa + vue全家桶 + axios)

```
node: v8.10.0
npm: 6.1.0
axios: "^0.18.0",
vue: "^2.5.16",
vue-router: "^3.0.1",
vuex: "^3.0.1",
webpack: "^4.12.1",
webpack-cli: "^3.0.8",
.
.
.

```

## 二次开发

``` bash
# clone project
>git clone https://github.com/weijuer/weijuer.github.io.git

# install dependencies
>npm install

# serve with hot reload at localhost:8080
>npm run dev

# build for production with minification
>npm run build

# build for production and view the bundle analyzer report
>npm run build --report
```

## 目录结构

```
➜  root                 // 项目根目录

├── build               // vue-cli脚手架生成编译脚本
├── config              // vue-cli脚手架生成不同环境配置文件
├── dist                // 执行npm run build生成静态文件
│   ├── static          // 静态资源文件
│   └── index.html      // 前端主页
├── server              // 后台服务相关
│   ├── models          // 数据库表结构
│   ├── modules         // 接口模块
│   ├── router          // 后端接口路由
│   ├── util            // 工具方法
│   └── app.js          // 后端入口页面
├── src                 // 前端页面相关
│   ├── api             // 前端调用接口
│   ├── assets          // 静态资源
│   ├── components      // 单文件组件
│   ├── router          // 前端router路由配置
│   └── store           // vuex相关模块配置
│       ├── actions.js
│       ├── getters.js
│       ├── mutations.js
│       ├── index.js
│       └── states.js
│   ├── App.vue         // 入口vue文件
│   └── main.js         // 前端主函数
├── static
│   └── favicon.ico     // ico页签图标文件
├── .babelrc            // .babel配置文件
├── .editorconfig       // editor配置文件
├── .gitignore          // gitignore配置文件
├── .postcssrc.js       // postcss配置文件
├── index.html          // 主页入口文件
├── package.json        // 项目依赖配置文件
├── package-lock.json   // 项目依赖-lock配置文件
└── README.md           // 项目说明文件

```


```
=================================我是签名================================ 
                      不在代码中爆发，就在代码灭亡！ 
========================================================================
```
