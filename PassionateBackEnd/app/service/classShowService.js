// 'use strict';
const { Service } = require('egg');
class ClassShowController extends Service {
    // 获取推荐
    async recommendArticle(maxNum) {
        const { app } = this;
        let sql = '';
        try {
            if (maxNum == 0) {
                sql = 'select * from article inner join user on article.UserAccount=user.UserAccount where ArticleId < (select max(ArticleId) from article) order by ArticleId desc';
                const list = await app.mysql.query(sql);
                return list;
            } else {
                sql = 'select * from article inner join user on article.UserAccount=user.UserAccount where ArticleId < ?  order by ArticleId desc';
                const list = await app.mysql.query(sql, [maxNum]);
                return list;
            }
        } catch (e) {
            console.log('获取推荐时服务器发生错误' + e);
            return false;
        }
    }

    // 按类加载
    async loadByClass(ArticleClass, maxNum) {
        const { app } = this;
        let sql = '';
        try {
            if (maxNum == 0) {
                sql = 'select * from article inner join user on article.UserAccount=user.UserAccount where ArticleId < (select max(ArticleId) from article) and ArticleClass = ? order by ArticleId desc ';
                const list = await app.mysql.query(sql, [ArticleClass]);
                return list;
            } else {
                sql = 'select * from article inner join user on article.UserAccount=user.UserAccount where ArticleId < ? and ArticleClass = ? order by ArticleId desc ';
                const list = await app.mysql.query(sql, [maxNum, ArticleClass]);
                return list;
            }
        } catch (e) {
            console.log('按类加载时服务器发生错误' + e);
            return false;
        }
    }

    // 关注的人发布的
    async focuserArticle(UserAccount) {
        const { app } = this;
        const sql = 'select * from article inner join (select UserAccounted from focus where UserAccount = ? )a on a.UserAccounted = article.UserAccount order by article.ArticleId desc';
        try {
            const list = await app.mysql.query(sql, [UserAccount]);
            return list;
        } catch (e) {
            console.log('关注的人发布时服务器发生错误' + e);
            return false;
        }
    }


}

module.exports = ClassShowController;