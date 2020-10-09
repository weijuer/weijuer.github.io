# client

![](https://img.shields.io/github/forks/weijuer/weijuer.github.io) ![](https://img.shields.io/badge/Blog-@Weijuer-blue)

# 背景

> 一直在揣摩整个博客，这个项目很早就诞生了，经历了很多次修改，再推翻，修改（N 次），竟然是这个样？？？

- 技术栈：vue 全家桶 + axios + dexie + typescript
- 功能列表：

* [x] 华丽首页展示
* [x] 博客列表
* [x] 博客详情
* [ ] 音乐
* [ ] 示例
* [ ] 关于我

### 2.x 版本生命周期 VS 3.x 版组合式 API

| 2.x           | 3.x               | 说明 |
| ------------- | ----------------- | ---- |
| beforeCreate  | setup()           | ---- |
| created       | setup()           | ---- |
| beforeMount   | onBeforeMount     | ---- |
| mounted       | onMounted         | ---- |
| beforeUpdate  | onBeforeUpdate    | ---- |
| updated       | onUpdated         | ---- |
| beforeDestroy | onBeforeUnmount   | ---- |
| destroyed     | onUnmounted       | ---- |
| errorCaptured | onErrorCaptured   | ---- |
| activated     | onActivated       | ---- |
| deactivated   | onDeactivated     | ---- |
| ---           | onRenderTracked   | ---- |
| ---           | onRenderTriggered | ---- |

**备注：**

1. beforeDestroy、destroyed 被替换为了 onBeforeUnmount、onUnmounted
2. 去掉了 beforeCreate、created 请直接使用 setup
3. 新增了 onRenderTracked、onRenderTriggered（两个钩子都收到 DebuggerEvent 类似于 onTrack 和 onTrigger 观察者的选项）
