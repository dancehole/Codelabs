

# ICP备案

备案模板

```html

<div class="beian-info">
    <!-- 备案信息 -->
    <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2024302719号</a>
    <br>
    dancehole ALL RIGHTS RESERVED
    <!-- 根据需要添加更多的备案信息 -->
  </div>

<style>
/* 可以添加一些样式来美化备案信息 */
.beian-info {
  font-size: small;
  color:dimgrey;
  text-align: center;
  /* 示例：居中显示 */
  padding: 10px 0;
  /* 示例：上下内边距 */
  position:fixed;
  /* 示例：如果需要将备案信息固定在页面底部 */
  bottom: 0;
  width: 100%;
  /* 示例：背景色 */
}
</style>
ssl配置

帮我合并：
/etc/nginx/conf.d$ cat nginx.conf
server {  
    listen 80;  

    server_name dancehole.cn www.dancehole.cn;
    # 定义根目录，即静态文件存放的位置  
    root /usr/share/nginx/html;  

    # 定义默认首页  
    index index.html index.htm;  

    location / {  
        # 尝试首先服务请求作为文件，然后作为目录，最后作为404错误。  
        try_files $uri $uri/ =404;  
    }  

    # 其他配置...  

    # 错误页面配置  
    error_page 404 /404.html;  
        location = /404.html {  
            root /usr/share/nginx/html;  
            internal;  
        }  

    # 日志文件配置  
    access_log /var/log/nginx/example.com-access.log;  
    error_log /var/log/nginx/example.com-error.log;  

    # SSL/TLS 配置（可选）  
    # 如果启用了 HTTPS，请取消注释以下部分并正确配置证书  
    listen 443 ssl;
    # 证书文件路径（可以使用相对）
    ssl_certificate /etc/nginx/dancehole.cn_bundle.crt; 
    # 私钥文件路径 
    ssl_certificate_key /etc/nginx/dancehole.cn.key;
    ssl_session_timeout 5m;  

    ssl_protocols TLSv1.2 TLSv1.3;
    #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;

    # ssl_prefer_server_ciphers on;  
    # ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";  
    # ssl_ecdh_curve secp384r1;  
    # ssl_session_cache shared:SSL:10m;  
    # ssl_session_tickets off;  
    # ssl_stapling on;  
    # ssl_stapling_verify on;  

    # ... 其他 SSL/TLS 配置 ...  
}

ubuntu@ubuntu:/etc/nginx/sites-enabled$ cat default 
##
# You should look at the following URL's in order to grasp a solid understanding
# of Nginx configuration files in order to fully unleash the power of Nginx.
# https://www.nginx.com/resources/wiki/start/
# https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/
# https://wiki.debian.org/Nginx/DirectoryStructure
#
# In most cases, administrators will remove this file from sites-enabled/ and
# leave it as reference inside of sites-available where it will continue to be
# updated by the nginx packaging team.
#
# This file will automatically load configuration files provided by other
# applications, such as Drupal or Wordpress. These applications will be made
# available underneath a path with that package name, such as /drupal8.
#
# Please see /usr/share/doc/nginx-doc/examples/ for more detailed examples.
##

# Default server configuration
#
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        # SSL configuration
        #
        # listen 443 ssl default_server;
        # listen [::]:443 ssl default_server;
        #
        # Note: You should disable gzip for SSL traffic.
        # See: https://bugs.debian.org/773332
        #
        # Read up on ssl_ciphers to ensure a secure configuration.
        # See: https://bugs.debian.org/765782
        #
        # Self signed certs generated by the ssl-cert package
        # Don't use them in a production server!
        #
        # include snippets/snakeoil.conf;

        root /var/www/html/BookManagement;

        # Add index.php to the list if you are using PHP
        index index.html index.htm index.nginx-debian.html;

        server_name dancehole.cn;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }

        # pass PHP scripts to FastCGI server
        #
        #location ~ \.php$ {
        #       include snippets/fastcgi-php.conf;
        #
        #       # With php-fpm (or other unix sockets):
        #       fastcgi_pass unix:/run/php/php7.4-fpm.sock;
        #       # With php-cgi (or other tcp sockets):
        #       fastcgi_pass 127.0.0.1:9000;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #       deny all;
        #}
}


# Virtual Host configuration for example.com
#
# You can move that to a different file under sites-available/ and symlink that
# to sites-enabled/ to enable it.
#
#server {
#       listen 80;
#       listen [::]:80;
#
#       server_name example.com;
#
#       root /var/www/example.com;
#       index index.html;
#
#       location / {
#               try_files $uri $uri/ =404;
#       }
#}

server {  
    listen 8081;  

    # 如果你希望根据域名来区分服务，可以指定server_name  
    # 但如果不这样做，Nginx将接受任何指向该端口的请求  
    # server_name dancehole.cn; # 可以保留或注释掉  

    # 指定你的HTML项目的根目录  
    root /var/www/html/minigame/; # 确保这是正确的路径  
    server_name dancehole.cn;

    # 设置索引文件  
    index index.html index.htm; # 根据你的项目需求进行调整  

    location / {  
        # 尝试按请求的文件名提供服务，如果找不到则尝试目录，最后返回404  
        try_files $uri $uri/ =404;  
    }  

    # 如果有需要，可以添加其他location块来处理特定的请求  

    # ... 其他配置 ...  
}
```

