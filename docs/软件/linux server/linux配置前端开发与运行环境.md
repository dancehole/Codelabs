# linux配置前端开发与运行环境

## 安装nvm

[如何在Linux中安装NVM（Node Version Manager）_linux安装 node version manager-CSDN博客](https://blog.csdn.net/weixin_39973810/article/details/137468202)

[Linux 下安装 nvm | NVM (p6p.net)](https://nvm.p6p.net/install/linux.html)

https://nvm.p6p.net/use/mirror.html

[解决nvm ls-remote 列表只出现iojs版本 - 牛奔 - 博客园 (cnblogs.com)](https://www.cnblogs.com/niuben/p/18368872)

总结：

```bash
sudo nginx -t  # 检查 Nginx 配置是否正确
sudo systemctl restart nginxcurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
or
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash

source ~/.bashrc

# 验证：
nvm --version
```

使用：

- [Linux 下安装 nvm | NVM (p6p.net)](https://nvm.p6p.net/install/linux.html)

Q&A:

只出现iojs，没有对应版本

- 说明npm源访问失败，使用`export NVM_NODEJS_ORG_MIRROR=【npm源地址】`来切换
- 腾讯云服务器使用`http://mirrors.cloud.tencent.com/nodejs-release/`
- 阿里云服务器使用`https://npmmirror.com/mirrors/npm/`

## 前端部署