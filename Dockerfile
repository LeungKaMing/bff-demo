# 使用官方的 Node.js 镜像作为基础
FROM node

# 设置工作目录
WORKDIR /bff

# 更新ubuntu相关工具
RUN apt-get update && apt-get install net-tools

# 将应用程序代码复制到容器中
COPY ./bff /bff

RUN npm i -g pnpm && pnpm i

# 暴露应用程序端口
EXPOSE 3001

# 运行应用程序
CMD [ "pnpm", "start" ]