# Npm切换源

跑vue2组件库的时候遇到了问题：(npm i不下来)

怀疑是换源的问题：

查看源 npm config get registry

临时换源 npm install --registry [https://registry.npm.taobao.org](https://registry.npm.taobao.org/)

永久换源（淘宝源） npm config set registry [https://registry.npm.taobao.org](https://registry.npm.taobao.org/)

cw源添加： 1. 下载nrm(npm源管理工具) npm i -g nrm 2. nrm ls 查看可用源 3. nrm add cw http://npm.cwbk.com:7001/