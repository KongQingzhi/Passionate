// 'use strict';
const { Service } = require('egg');
const path = require('path');
const fs = require('fs');
class interactionService extends Service {






    // 我的发布
    async myPublished(UserAccount) {
        const { app } = this;
        const sql = 'select * from article left join user on user.UserAccount = article.UserAccount where article.UserAccount = ? order by article.ArticleId desc';
        try {
            const list = await app.mysql.query(sql, [UserAccount]);
            return list;
        } catch (e) {
            console.log('我的发布时服务器发生错误' + e);
            return false;
        }
    }
    // 删除发布
    async deletePublished(ArticleId) {
        const { app } = this;
        const sql = 'delete from article where ArticleId=?';
        try {
            const list = await app.mysql.query(sql, [ArticleId]);
            return list;
        } catch (e) {
            console.log('删除发布时服务器发生错误' + e);
            return false;
        }
    }


    // 查询关注
    async selectAllFocus(UserAccount) {
        const { app } = this;
        const sql = 'select * from (select * from focus where UserAccount=?)a inner join user on a.UserAccounted = user.UserAccount order by a.FocusId desc';
        try {
            const list = await app.mysql.query(sql, [UserAccount]);
            return list;
        } catch (e) {
            console.log('查询关注时服务器发生错误' + e);
            return false;
        }
    }

    // 查询关注
    async selectFocus(UserAccount, UserAccounted) {
        const { app } = this;
        const sql = 'select * from focus where UserAccount=? and UserAccounted = ? order by FocusId desc';
        try {
            const list = await app.mysql.query(sql, [UserAccount, UserAccounted]);
            if (list.length != 0) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.log('查询关注时服务器发生错误' + e);
            return false;
        }
    }

    //添加关注
    async addFocus(UserAccount, UserAccounted) {
        const { app } = this;
        const sql = 'insert into focus (UserAccount,UserAccounted) value (?,?)';
        try {
            const list = await app.mysql.query(sql, [UserAccount, UserAccounted]);
            return list;
        } catch (e) {
            console.log('添加关注时服务器发生错误' + e);
            return false;
        }
    }

    // 删除关注
    async deleteFocus(UserAccount, UserAccounted) {
        const { app } = this;
        const sql = 'delete from focus where UserAccount=? and UserAccounted=?';
        try {
            const list = await app.mysql.query(sql, [UserAccount, UserAccounted]);
            return list;
        } catch (e) {
            console.log('删除关注时服务器发生错误' + e);
            return false;
        }
    }

    // 粉丝
    async selectFans(UserAccount) {
        const { app } = this;
        const sql = 'select * from (select a.FocusId FocusId,a.UserAccount UserAccount, a.UserAccounted UserAccounted, focus.UserAccount reFocus from (select * from focus where UserAccounted = ?)a left join focus on a.UserAccount = focus.UserAccounted and focus.UserAccount = ?) b left join user on b.UserAccount = user.UserAccount ';
        try {
            const list = await app.mysql.query(sql, [UserAccount, UserAccount]);
            return list;
        } catch (e) {
            console.log('查询粉丝时服务器发生错误' + e);
            return false;
        }
    }

    // 查询评论
    async selectComments(ArticleId) {
        const { app } = this;
        const sql = 'select * from (select CommentsId, ArticleId, UserAccount,CommentsContent from comments where ArticleId=?) a  left join user on a.UserAccount = user.UserAccount;';
        try {
            const list = await app.mysql.query(sql, [ArticleId]);
            return list;
        } catch (e) {
            console.log('查询评论时服务器发生错误' + e);
            return false;
        }
    }

    // 添加评论
    async addComments(ArticleId, UserAccount, CommentsContent) {
        const { app } = this;
        const sql = 'INSERT into comments(ArticleId, UserAccount,CommentsContent) value(?,?,?);';
        try {
            const list = await app.mysql.query(sql, [ArticleId, UserAccount, CommentsContent]);
            return list;
        } catch (e) {
            console.log('添加评论时服务器发生错误' + e);
            return false;
        }
    }

    // 删除评论
    async deleteComments(CommentsId) {
        const { app } = this;
        const sql = 'delete from comments where CommentsId = ?';
        try {
            const list = await app.mysql.query(sql, [CommentsId]);
            return list;
        } catch (e) {
            console.log('删除评论时服务器发生错误' + e);
            return false;
        }
    }


    // 查询点赞
    async selectLove(UserAccount) {
        const { app } = this;
        const sql = 'select love.LoveId, love.ArticleId, article.ArticleTime, article.ArticleTitle, article.ArticleContent, article.ArticleImage, article.ArticleTime, article.UserAccount, user.UserHeadImg, user.UserName, user.UserMotto, loveNum, collectNum from love left join article  on love.ArticleId = article.ArticleId left join user on user.UserAccount = article.UserAccount left join(select ArticleId, count(*) loveNum from love group by ArticleId) a on a.ArticleId = article.ArticleId  left join(select ArticleId, count(*) collectNum from collect group by ArticleId)b on b.ArticleId = article.ArticleId where love.UserAccount = ? order by love.LoveId desc';
        try {
            const list = await app.mysql.query(sql, [UserAccount]);
            return list;
        } catch (e) {
            console.log('查询点赞时服务器发生错误' + e);
            return false;
        }
    }

    // 点赞/收藏
    async judgeLoveCollect(UserAccount, ArticleId) {
        const { app } = this;
        const sql = 'select count(*) num from love  where ArticleId = ? and UserAccount = ? union all select count(*) num from collect  where ArticleId = ? and UserAccount=?'
        try {
            const list = await app.mysql.query(sql, [ArticleId, UserAccount, ArticleId, UserAccount]);
            list.forEach((element, index) => {
                list[index] = element.num;
            });
            return list
        } catch (e) {
            console.log('判断点赞/收藏时服务器发生错误' + e);
            return false;
        }
    }

    // 添加点赞
    async addLove(ArticleId, UserAccount) {
        const { app } = this;
        const sql = 'insert into love (ArticleId,UserAccount) value(?,?)';
        try {
            const list = await app.mysql.query(sql, [ArticleId, UserAccount]);
            return list;
        } catch (e) {
            console.log('添加点赞时服务器发生错误' + e);
            return false;
        }
    }

    // 删除点赞
    async deleteLove(ArticleId, UserAccount) {
        const { app } = this;
        const sql = 'delete from love where ArticleId=? and UserAccount=?';
        try {
            const list = await app.mysql.query(sql, [ArticleId, UserAccount]);
            return list;
        } catch (e) {
            console.log('删除点赞时服务器发生错误' + e);
            return false;
        }
    }

    // 查询收藏
    async selectCollect(UserAccount) {
        const { app } = this;
        const sql = 'select collect.CollectId,collect.ArticleId,article.ArticleTime,article.ArticleTitle,article.ArticleContent,article.ArticleImage,article.ArticleTime,article.UserAccount,user.UserHeadImg,user.UserName,user.UserMotto,loveNum,collectNum from collect left join article  on collect.ArticleId=article.ArticleId left join user on user.UserAccount = article.UserAccount left join (select ArticleId ,count(*) loveNum from love group by ArticleId) a on a.ArticleId = article.ArticleId  left join (select ArticleId,count(*) collectNum from collect group by ArticleId)b on b.ArticleId = article.ArticleId where collect.UserAccount = ? order by collect.CollectId desc';
        try {
            const list = await app.mysql.query(sql, [UserAccount]);
            return list;
        } catch (e) {
            console.log('查询收藏时服务器发生错误' + e);
            return false;
        }
    }

    // 添加收藏
    async addCollect(ArticleId, UserAccount) {
        const { app } = this;
        const sql = 'insert into collect(ArticleId,UserAccount) value(?,?)';
        try {
            const list = await app.mysql.query(sql, [ArticleId, UserAccount]);
            return list;
        } catch (e) {
            console.log('添加收藏时服务器发生错误' + e);
            return false;
        }
    }

    // 删除收藏
    async deleteCollect(ArticleId, UserAccount) {
        const { app } = this;
        const sql = 'delete from collect where ArticleId=? and UserAccount=?';
        try {
            const list = await app.mysql.query(sql, [ArticleId, UserAccount]);
            return list;
        } catch (e) {
            console.log('删除收藏时服务器发生错误' + e);
            return false;
        }
    }

    // 查询点赞收藏数量
    async selectLoveCollectNum(ArticleId) {
        const { app } = this;
        const sql = 'select count(*) num from love  where ArticleId = ? union all select count(*) num from collect  where ArticleId = ?';
        try {
            const list = await app.mysql.query(sql, [ArticleId, ArticleId]);
            return list;
        } catch (e) {
            console.log('查询点赞收藏数量时服务器发生错误' + e);
            return false;
        }
    }

    async updateUser(UserAccount, UserBirthday, UserName, UserGender, UserHometown, UserMotto, files) {
        let url = null;
        if (files.length != 0) {//有文件上传
            const file = files[0];
            const toFileName = '/public/upload/' + Date.now() + file.filename;
            const to = path.dirname(__dirname) + toFileName;
            await fs.copyFileSync(file.filepath, to);
            await fs.unlinkSync(file.filepath);//文件上传结束
            url = "http://localhost:7001" + toFileName;
        }
        if (url == null) {//没有文件上传,不需要修改头像的地址 headimg
            const sql = 'update user set UserName =?, UserGender =?, UserHometown =?,UserMotto=?, UserBirthday = ? where UserAccount=?'
            const list = await this.ctx.app.mysql.query(sql, [UserName, UserGender, UserHometown, UserMotto, UserBirthday, UserAccount])
            return list.affectedRows;
        } else {
            const sql = 'update user set UserName =?, UserGender =?, UserHometown =?, UserMotto=?, UserBirthday=?,UserHeadImg = ? where UserAccount=?'
            const list = await this.ctx.app.mysql.query(sql, [UserName, UserGender, UserHometown, UserMotto, UserBirthday, url, UserAccount])
            return list.affectedRows;
        }
    }

    async updateFile(file) {
        try {
            const files = file[0].filename;
            const filename = path.dirname(__dirname) + '/public/upload/' + Date.now() + files;
            const url = 'http://localhost:7001' + '/public/upload/' + Date.now() + files;
            //把文件保存
            await fs.copyFileSync(file[0].filepath, filename);
            //关闭
            await fs.unlinkSync(file[0].filepath);//文件上传结束
            return url;
        } catch (error) {
            console.log('发布服务器出错' + error);
        }
    }

    async release(UserAccount, ArticleTitle, ArticleImage, ArticleContent, ArticleTime, ArticleClass) {
        try {
            const sql = 'insert into article (UserAccount,ArticleTitle,ArticleImage,ArticleContent, ArticleTime,ArticleClass) value(?,?,?,?,?,?)';
            const list = await this.ctx.app.mysql.query(sql, [UserAccount, ArticleTitle, ArticleImage, ArticleContent, ArticleTime, ArticleClass]);
            return list;
        } catch (error) {
            console.log('上传服务器出错' + error);
        }
    }

}

module.exports = interactionService;