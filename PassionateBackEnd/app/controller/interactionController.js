// 'use strict';
const { Controller } = require('egg');
class InteractionController extends Controller {
    // 参数处理
    getParams(key) {
        const { ctx } = this;
        if (ctx.request.method == 'GET') {
            return ctx.request.query[key];
        } else if (ctx.request.method == 'POST') {
            return ctx.request.body[key];
        }
    }


    // 我的发布
    async myPublished() {
        const { ctx } = this;
        const UserAccount = this.getParams('UserAccount');
        try {
            const list = await ctx.service.interactionService.myPublished(UserAccount);
            list.forEach(items => {
                if (items.ArticleClass == 0) {
                    items.ArticleClass = '搞笑'
                } else if (items.ArticleClass == 1) {
                    items.ArticleClass = '新鲜'
                } else if (items.ArticleClass == 2) {
                    items.ArticleClass = '生活'
                }
                items.ArticleImage = items.ArticleImage.split('*');
            })
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('我的发布时控制器发生错误' + e);
        }
    }

    // 删除发布
    async deletePublished() {
        const { ctx } = this;
        const ArticleId = this.getParams('ArticleId');
        const sql = 'delete article where ArticleId=?';
        try {
            const list = await ctx.service.interactionService.deletePublished(ArticleId);
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('删除发布时控制器发生错误' + e);
        }
    }


    // 查询所有关注
    async selectAllFocus() {
        const { ctx } = this;
        const UserAccount = this.getParams('UserAccount');
        try {
            const list = await ctx.service.interactionService.selectAllFocus(UserAccount);
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('查询所有关注时控制器发生错误' + e);
        }
    }

    // 查询关注
    async selectFocus() {
        const { ctx } = this;
        const UserAccount = this.getParams('UserAccount');
        const UserAccounted = this.getParams('UserAccounted');
        try {
            const list = await ctx.service.interactionService.selectFocus(UserAccount, UserAccounted);
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('查询关注时控制器发生错误' + e);
        }
    }



    // 添加关注
    async addFocus() {
        const { ctx } = this;
        const UserAccount = this.getParams('UserAccount');
        const UserAccounted = this.getParams('UserAccounted');
        try {
            const list = await ctx.service.interactionService.addFocus(UserAccount, UserAccounted);
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('添加关注时控制器发生错误' + e);
        }
    }

    // 删除关注
    async deleteFocus() {
        const { ctx } = this;
        const UserAccount = this.getParams('UserAccount');
        const UserAccounted = this.getParams('UserAccounted');
        try {
            const list = await ctx.service.interactionService.deleteFocus(UserAccount, UserAccounted);
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('删除关注时控制器发生错误' + e);
        }
    }

    //查询粉丝
    async selectFans() {
        const { ctx } = this;
        const UserAccount = this.getParams('UserAccount')
        try {
            const list = await ctx.service.interactionService.selectFans(UserAccount);
            list.forEach(element => {
                if (element.UserAccounted == element.reFocus) {
                    element.reFocus = '相互关注';
                } else {
                    element.reFocus = '回 关';
                }
            });
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('查询粉丝时控制器发生错误' + e);
        }
    }



    // 查询评论
    async selectComments() {
        const { ctx } = this;
        const ArticleId = this.getParams('ArticleId')
        try {
            const list = await ctx.service.interactionService.selectComments(ArticleId);
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('查询评论时控制器发生错误' + e);
        }
    }

    // 添加评论
    async addComments() {
        const { ctx } = this;
        const ArticleId = this.getParams('ArticleId')
        const UserAccount = this.getParams('UserAccount')
        const CommentsContent = this.getParams('CommentsContent')
        try {
            const list = await ctx.service.interactionService.addComments(ArticleId, UserAccount, CommentsContent);
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('添加评论时控制器发生错误' + e);
        }
    }

    // 删除评论
    async deleteComments() {
        const { ctx } = this;
        const CommentsId = this.getParams('CommentsId')
        try {
            const list = await ctx.service.interactionService.deleteComments(CommentsId);
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('删除评论时控制器发生错误' + e);
        }
    }

    // 查询点赞
    async selectLove() {
        const { ctx } = this;
        const UserAccount = this.getParams('UserAccount');
        try {
            const list = await ctx.service.interactionService.selectLove(UserAccount);
            if (list.length != 0) {
                list.forEach((items, index) => {
                    if (items.loveNum == null) {
                        items.loveNum = 0;
                    } else if (items.collectNum == null) {
                        items.collectNum = 0;
                    }
                    items.ArticleImage = items.ArticleImage.split('*');
                })
                ctx.response.body = list
            } else {
                ctx.response.body = false
            }

        } catch (e) {
            ctx.response.body = false;
            console.log('查询点赞时控制器发生错误' + e);
        }
    }

    // 点赞/收藏
    async judgeLoveCollect() {
        const { ctx } = this;
        const UserAccount = this.getParams('UserAccount');
        const ArticleId = this.getParams('ArticleId');
        try {
            const list = await ctx.service.interactionService.judgeLoveCollect(UserAccount, ArticleId);
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('判断点赞/收藏时控制器发生错误' + e);
        }
    }



    // 添加点赞
    async addLove() {
        const { ctx } = this;
        const ArticleId = this.getParams('ArticleId')
        const UserAccount = this.getParams('UserAccount');
        try {
            const list = await ctx.service.interactionService.addLove(ArticleId, UserAccount);
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('添加点赞时控制器发生错误' + e);
        }
    }


    // 删除点赞
    async deleteLove() {
        const { ctx } = this;
        const ArticleId = this.getParams('ArticleId')
        const UserAccount = this.getParams('UserAccount');
        try {
            const list = await ctx.service.interactionService.deleteLove(ArticleId, UserAccount);
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('删除点赞时控制器发生错误' + e);
        }
    }

    // 查询收藏
    async selectCollect() {
        const { ctx } = this;
        const UserAccount = this.getParams('UserAccount');
        try {
            const list = await ctx.service.interactionService.selectCollect(UserAccount);
            list.forEach((items, index) => {
                if (items.loveNum == null) {
                    items.loveNum = 0;
                } else if (items.collectNum == null) {
                    items.collectNum = 0;
                }
                items.ArticleImage = items.ArticleImage.split('*');
            })
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('查询收藏时控制器发生错误' + e);
        }
    }


    // 添加收藏
    async addCollect() {
        const { ctx } = this;
        const ArticleId = this.getParams('ArticleId')
        const UserAccount = this.getParams('UserAccount');
        try {
            const list = await ctx.service.interactionService.addCollect(ArticleId, UserAccount);
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('添加收藏时控制器发生错误' + e);
        }
    }


    // 删除收藏
    async deleteCollect() {
        const { ctx } = this;
        const ArticleId = this.getParams('ArticleId')
        const UserAccount = this.getParams('UserAccount');
        try {
            const list = await ctx.service.interactionService.deleteCollect(ArticleId, UserAccount);
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('删除收藏时控制器发生错误' + e);
        }
    }

    // 查询点赞收藏数量
    async selectLoveCollectNum() {
        const { ctx } = this;
        const ArticleId = this.getParams('ArticleId')
        try {
            const list = await ctx.service.interactionService.selectLoveCollectNum(ArticleId);
            ctx.response.body = list;
        } catch (e) {
            ctx.response.body = false;
            console.log('删除收藏时控制器发生错误' + e);
        }
    }


    async updateUser() {
        const UserAccount = this.getParams('UserAccount')
        const UserBirthday = this.getParams("UserBirthday")
        const UserName = this.getParams("UserName")
        const UserGender = this.getParams("UserGender");
        const UserMotto = this.getParams("UserMotto");
        const UserHometown = this.getParams("UserHometown");
        const files = this.ctx.request.files;
        try {
            const list = await this.ctx.service.interactionService.updateUser(UserAccount, UserBirthday, UserName, UserGender, UserHometown, UserMotto, files)
            this.ctx.response.body = `修改成功+${list}`;
        } catch (e) {
            console.log(e);
            this.ctx.response.body = '访问失败';
        }
    }

    async updateFile() {
        try {
            let file = this.ctx.request.files;
            let url = await this.ctx.service.interactionService.updateFile(file);
            this.ctx.response.body = url;
        } catch (error) {
            console.log('发布控制器出错' + error);
        }
    }

    async release() {
        const UserAccount = this.getParams('UserAccount');
        const ArticleTitle = this.getParams('ArticleTitle');
        const ArticleImage = this.getParams('ArticleImage');
        const ArticleContent = this.getParams('ArticleContent');
        const ArticleTime = this.getParams('ArticleTime');
        const ArticleClass = this.getParams('ArticleClass');
        try {
            const res = this.ctx.service.interactionService.release(UserAccount, ArticleTitle, ArticleImage, ArticleContent, ArticleTime, ArticleClass);
            this.ctx.response.body = res;
        } catch (error) {
            console.log('上传控制器出错' + error);
        }
    }



}


module.exports = InteractionController;
