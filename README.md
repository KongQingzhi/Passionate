
# Passionate

## 项目简介

Passionate是一个面向大众以照片分享为基础的社交网站，在这里你可以分享开心、记录你的生活。在这里你可以结识有趣的朋友，与兴趣相投的人聊得火热。在这里你可以关注有趣的灵魂，看到他们的日常搞笑。

## 技术栈

`Vue.js` + `Vue-router.js` + `Vite` + `TypeScript` + `Node.js` + `Egg.js` + `MySQL` + `SaSS`


## 作者

- [@KongQingzhi](https://github.com/KongQingzhi)


## API 参考

项目所有API都放在`passionateFrontEnd/src/asios/api`下

| 接口名 | 描述 |
|:-------- |:------------------------- |
| login | 登录 |
| register | 注册 |
| verificate | 获取验证码 |
| findPassword | 找回密码 |
| recommendArticle | 获取推荐文章 |
| focuserArticle | 获取我关注的人发布的文章 |
| loadByClass | 按类型加载文章 |
| myPublished|  获取我发布的文章   | 
| deletePublished|删除我发布的文章|
| selectAllFocus|查找我关注的人|
| selectFocus|查找互相关注|
| addFocus|添加我的关注|
| deleteFocus|删除我的关注|
| selectFans|查找我的粉丝|
| selectComments|查找文章评论|
| addComments|添加文章评论|
| deleteComments|删除我的评论|
| selectLove|查找我的喜欢|
| judgeLoveCollect|判断是否喜欢/收藏|
| addLove|添加我的喜欢|
| deleteLove|删除我的喜欢|
| selectCollect|查找我的收藏|
| addCollect|添加我的收藏|
| deleteCollect|删除我的收藏|
| selectLoveCollectNum|查找喜欢和点赞的数量|
| updateUser|更新个人信息|
| updateFile|缓存照片|
| release|发布文章|



## 在本地运行

Clone 这个 project

```bash
  git clone https://github.com/KongQingzhi/Passionate
```

前往项目目录

```bash
  cd passionate
```

首先进入后端目录

```bash
  cd passionateBackEnd
```

安装依赖（前提是您已经安装了Node.js）

```bash
  npm install
```

启动服务器

```bash
  npm run dev
```

然后返回上一级，再进入前端目录

```bash
  cd ../passionateFrontEnd
```

安装依赖

```bash
  npm install
```

启动服务器

```bash
  npm run dev
```

正常情况下，将前后端开启后，通过访问 `http://localhost:8080/` 就可以访问啦


## 页面截图

![image-20221120013227219](E:\FrontEnd\MyGithubRepository\Passionate\ProjectScreen\image-20221120013227219.png)

![image-20221120013304518](E:\FrontEnd\MyGithubRepository\Passionate\ProjectScreen\image-20221120013304518.png)

![image-20221120013351938](E:\FrontEnd\MyGithubRepository\Passionate\ProjectScreen\image-20221120013351938.png)

![image-20221120013358836](E:\FrontEnd\MyGithubRepository\Passionate\ProjectScreen\image-20221120013358836.png)

![image-20221120013501482](E:\FrontEnd\MyGithubRepository\Passionate\ProjectScreen\image-20221120013501482.png)

![image-20221120013522156](E:\FrontEnd\MyGithubRepository\Passionate\ProjectScreen\image-20221120013522156.png)

![image-20221120013654025](E:\FrontEnd\MyGithubRepository\Passionate\ProjectScreen\image-20221120013654025.png)

![image-20221120013834390](E:\FrontEnd\MyGithubRepository\Passionate\ProjectScreen\image-20221120013834390.png)

![image-20221120013814777](E:\FrontEnd\MyGithubRepository\Passionate\ProjectScreen\image-20221120013814777.png)

![image-20221120013849065](E:\FrontEnd\MyGithubRepository\Passionate\ProjectScreen\image-20221120013849065.png) 

![image-20221120014029283](E:\FrontEnd\MyGithubRepository\Passionate\ProjectScreen\image-20221120014029283.png)

![image-20221120014044944](E:\FrontEnd\MyGithubRepository\Passionate\ProjectScreen\image-20221120014044944.png)

![image-20221120014058614](E:\FrontEnd\MyGithubRepository\Passionate\ProjectScreen\image-20221120014058614.png)

![image-20221120014123985](C:\Users\KongQingzhi\AppData\Roaming\Typora\typora-user-images\image-20221120014123985.png)

![image-20221120014242028](E:\FrontEnd\MyGithubRepository\Passionate\ProjectScreen\image-20221120014242028.png)
