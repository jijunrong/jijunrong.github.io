var posts=["2021/02/07/APlayer 美化及魔改思路与方案(仿IOS UI)-aplay美化及魔改思路与方案/","2022/01/02/Alist一点小优化/","2022/02/08/Debian优化(arm64)/","2023/05/23/Debian安装plex的记录/","2023/05/20/Debian开启root登陆桌面一键脚本/","2022/05/01/Let’s Encrypt 主域名及泛域名配置证书思路及步骤-letsencrypt主域名及泛域名配置证书思路及步骤/","2023/06/23/MAC禁用ipv6的代码/","2023/05/18/SCP常用代码/","2023/03/04/hexo一键git部署配置/","2022/04/10/nginx 反代 多服务 共用443端口配置思路及文件-nginx反代多服务共用443端口配置思路及文件/","2023/05/17/qexo后台部署记录/","2023/05/20/一键恢复部署hexo脚本/","2023/01/02/各类常用代码/","2023/04/05/大姐姐/","2023/05/22/我要订婚啦！！！/","2023/05/21/自动筛选CF代理IP surge版本/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };