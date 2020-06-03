# client

### 2.x 版本生命周期 VS 3.x版组合式 API 

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
1. beforeDestroy、destroyed 被替换为了onBeforeUnmount、onUnmounted
2. 去掉了beforeCreate、created请直接使用setup
3. 新增了onRenderTracked、onRenderTriggered（两个钩子都收到DebuggerEvent类似于onTrack和onTrigger观察者的选项）