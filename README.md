# weijuer.github.io (v3.0) GitHub个人博客

> 我只是比你来坑的早，相信我你也可以！

## 项目预览
[在线地址](https://weijuer.github.io)

## 开发环境 (node + koa + vue全家桶 + axios)

```
node: v8.10.0
npm: 6.1.0
webpack: "^4.12.1",
webpack-cli: "^3.0.8",

+

"dependencies": {
  "axios": "^0.18.0",
  "koa": "^2.5.2",
  "vue": "^2.5.16",
  "vue-cli": "^2.9.6",
  "vue-i18n": "^8.0.0",
  "vue-router": "^3.0.1",
  "vuex": "^3.0.1"
}
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

├── public              // 静态资源文件夹
│   ├── favicon.ico     // .icon文件
│   └── index.html      // 前端主页
├── src                 // 前端页面相关
│   ├── api             // 前端调用接口
│   ├── assets          // 静态资源
│   ├── components      // 单文件组件
│   ├── router          // 前端router路由配置
│   ├── store           // vuex相关模块配置
│   │   ├── modules     // 接口模块
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── index.js
│   │   ├── mutations.js
│   │   ├── mutations-types.js
│   │   └── states.js
│   ├── views           // 页面模板
│   │   ├── layout      // 框架模板
│   │   └── pages       // 其他页面
│   ├── App.vue         // 入口vue文件
│   └── main.js         // 前端主函数
├── .gitignore          // .gitignore配置文件
├── babel.config.js     // babel配置文件
├── package.json        // 项目依赖配置文件
├── README.md           // 项目说明文件
└── yarn.lock           // 项目依赖yarn.lock配置文件
 
```


```
============================================我是签名==========================================  
                      
 ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀  ▀▀▀▀▀█░█▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌
▐░▌       ▐░▌▐░▌               ▐░▌           ▐░▌    ▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌
▐░▌   ▄   ▐░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░▌           ▐░▌    ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌
▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌     ▐░▌           ▐░▌    ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░▌ ▐░▌░▌ ▐░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌           ▐░▌    ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀█░█▀▀ 
▐░▌▐░▌ ▐░▌▐░▌▐░▌               ▐░▌           ▐░▌    ▐░▌       ▐░▌▐░▌          ▐░▌     ▐░▌  
▐░▌░▌   ▐░▐░▌▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄█░█▄▄▄▄  ▄▄▄▄▄█░▌    ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌ 
▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░▌    ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌
 ▀▀       ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀      ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀ 
                              不在代码中爆发，就在代码灭亡！                                            
==============================================================================================  
```
