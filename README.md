![](https://img.shields.io/github/forks/weijuer/weijuer.github.io) ![](https://img.shields.io/badge/Blog-@Weijuer-blue)

# 背景

> 一直在揣摩整个博客，这个项目很早就诞生了，经历了很多次修改，再推翻，修改（N 次），竟然是这个样？？？

# 一、项目概述

## 1.client

前台blog页面

## 2.server

类似后台服务（数据来源：爬虫、自编辑）

# 二、项目结构

## 1.client

- 技术栈：vue3.0 全家桶 + axios + dexie
- 功能列表：

* [x] 华丽首页展示
* [x] 博客列表
* [x] 博客详情
* [x] 音乐搜索
* [ ] 组件库展示
* [ ] 关于

## 2.server

- 技术栈：koa2 全家桶 + puppeteer-core + node + typescript + mongoose
- 功能列表：

* [x] 根据 IP 定位当前城市
* [x] 当前天气及未来一周天气详情
* [x] 通过 puppeteer 爬取最新业界动态文章
* [ ] 爬取的信息存储到本地文件，并存储在 IndexedDB 中

## 3.admin
