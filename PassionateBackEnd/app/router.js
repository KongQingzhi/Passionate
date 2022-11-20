'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 用户登录
  router.post('/api/login', controller.userController.login);

  // 用户注册
  router.post('/api/register', controller.userController.register);

  // 获取验证码
  router.post('/api/verificate', controller.userController.verificate)

  // 忘记密码
  router.post('/api/findPassword', controller.userController.findPassword)

  // 获取推荐
  router.post('/api/recommendArticle', controller.classShowController.recommendArticle)

  // 关注的发布
  router.post('/api/focuserArticle', controller.classShowController.focuserArticle)


  // 按类加载
  router.post('/api/loadByClass', controller.classShowController.loadByClass)



  // 创作中心


  // 我的发布
  router.post('/api/myPublished', controller.interactionController.myPublished)

  // 删除发布
  router.post('/api/deletePublished', controller.interactionController.deletePublished)

  // 查询所有关注
  router.post('/api/selectAllFocus', controller.interactionController.selectAllFocus)

  // 查询关注
  router.post('/api/selectFocus', controller.interactionController.selectFocus)

  // 关注
  router.post('/api/addFocus', controller.interactionController.addFocus)

  // 取消关注
  router.post('/api/deleteFocus', controller.interactionController.deleteFocus)

  // 我的粉丝
  router.post('/api/selectFans', controller.interactionController.selectFans)

  // 查询评论
  router.post('/api/selectComments', controller.interactionController.selectComments)

  // 添加评论
  router.post('/api/addComments', controller.interactionController.addComments)

  // 删除评论
  router.post('/api/deleteComments', controller.interactionController.deleteComments)

  // 查询点赞
  router.post('/api/selectLove', controller.interactionController.selectLove)


  // 判断点赞/收藏
  router.post('/api/judgeLoveCollect', controller.interactionController.judgeLoveCollect)

  // 添加点赞
  router.post('/api/addLove', controller.interactionController.addLove)

  // 删除点赞
  router.post('/api/deleteLove', controller.interactionController.deleteLove)

  // 查询收藏
  router.post('/api/selectCollect', controller.interactionController.selectCollect)

  // 添加收藏
  router.post('/api/addCollect', controller.interactionController.addCollect)

  // 删除收藏
  router.post('/api/deleteCollect', controller.interactionController.deleteCollect)

  // 查询点赞收藏数量
  router.post('/api/selectLoveCollectNum', controller.interactionController.selectLoveCollectNum)

  // 修改信息
  router.post('/api/updateUser', controller.interactionController.updateUser)

  // 缓存照片
  router.post('/api/updateFile', controller.interactionController.updateFile)

  // 发布作品
  router.post('/api/release', controller.interactionController.release)

};
