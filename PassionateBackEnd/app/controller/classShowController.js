'use strict';
const { Controller } = require('egg');
class ClassShowController extends Controller {
    // 参数处理
    getParams(key) {
        const { ctx } = this;
        if (ctx.request.method == 'GET') {
            return ctx.request.query[key];
        } else if (ctx.request.method == 'POST') {
            return ctx.request.body[key];
        }
    }

    // 获取推荐
    async recommendArticle() {
        const { ctx } = this;
        const maxNum = this.getParams('maxNum')
        try {
            const list = await ctx.service.classShowService.recommendArticle(maxNum);
            if (list.length === 0) {
                ctx.response.body = false;
            } else {
                list.forEach(items => {
                    items.ArticleImage = items.ArticleImage.split('*');
                })
                ctx.response.body = list;
            }
        } catch (e) {
            console.log('获取推荐时控制器发生错误' + e);
            ctx.response.body = false;
        }
    }
    // 按类加载
    async loadByClass() {
        const { ctx } = this;
        const ArticleClass = this.getParams('ArticleClass');
        const maxNum = this.getParams('maxNum')
        try {
            const list = await ctx.service.classShowService.loadByClass(ArticleClass, maxNum);
            if (list.length === 0) {
                ctx.response.body = false;
            } else {
                list.forEach(items => {
                    items.ArticleImage = items.ArticleImage.split('*');
                })
                ctx.response.body = list;
            }
        } catch (e) {
            ctx.response.body = false;
            console.log('按类加载时控制器发生错误' + e);
        }
    }

    //关注的人发布的
    async focuserArticle() {
        const { ctx } = this;
        const UserAccount = this.getParams('UserAccount');
        try {
            const list = await ctx.service.classShowService.focuserArticle(UserAccount);
            if (list.length === 0) {
                ctx.response.body = false;
            } else {
                list.forEach(items => {
                    items.ArticleImage = items.ArticleImage.split('*');
                })
                ctx.response.body = list;
            }
        } catch (e) {
            ctx.response.body = false;
            console.log('关注的人发布的时控制器发生错误' + e);
        }
    }


}


module.exports = ClassShowController;
