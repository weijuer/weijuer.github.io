# 拉取node镜像
FROM node

# 设置镜像作者
LABEL MAINTAINER="weijuer@gmail.com"

# 设置时区
RUN rm -rf /etc/localtime && ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

# 设置环境变量
ENV NODE_ENV production

# 创建项目代码的目录
RUN mkdir -p /workspace

# 指定RUN、CMD与ENTRYPOINT命令的工作目录
WORKDIR /workspace

# 复制宿主机当前路径下所有文件到docker的工作目录[/workspace]
COPY . /workspace

# 安装pm2
RUN yarn global add pm2

# 安装依赖
RUN yarn

# 暴露端口
EXPOSE 3000

# 运行命令
ENTRYPOINT pm2-runtime start docker_pm2.js