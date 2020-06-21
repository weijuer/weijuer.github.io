# Server

# Preparation

## global intall nodemon

```
yarn global add nodemon || npm install nodemon -G
```

## update packages

```
[1] （推荐）
// 需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择
yarn upgrade-interactive --latest
```

```
[2] 
// yarn.lock和package.json都会更新，但是会进行版本锁定 譬如："echarts": "4.2.0-rc.2"
yarn upgrade package@version
```

```
[3]
// 先下载
yarn global add npm-check-updates
// 更新包（yarn.lock和package.json同步更新）
ncu --upgrade --upgradeAll && yarn upgrade
```

## Features

[] 用户管理：增删改查
