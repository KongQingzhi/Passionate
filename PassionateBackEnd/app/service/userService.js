// 'use strict';
const { Service } = require('egg');
class UserService extends Service {
    async login(UserAccount, UserPassword) {
        const { app } = this;
        const sql = 'select * from user where UserAccount=? and UserPassword=?';
        try {
            const list = await app.mysql.query(sql, [UserAccount, UserPassword]);
            return list;
        } catch (e) {
            console.log('登录时服务器发生错误' + e);
        }
    }

    async register(UserAccount, UserPassword) {
        const { app } = this;
        const sql = 'insert into user(UserAccount,UserPassword,UserName,UserGender,UserHeadImg,UserMotto,UserBirthday,UserHometown) value(?,?,?,?,?,?,?,?)';
        try {
            const list = await app.mysql.query(sql, [UserAccount, UserPassword, '王磊', '小哥哥', 'https://pic.3gbizhi.com/2022/0914/20220914010326732.png.557.332.jpg', '我很有个性，这是我的签名', 'Thu Nov 24 2022 00:00:00 GMT+0800 (中国标准时间)', '中国']);
            return list;
        } catch (e) {
            console.log('注册时服务器发生错误' + e);
            return false;
        }
    }

    async findPassword(UserAccount, UserPassword) {
        const { app } = this;
        const sql = 'update user set UserPassword = ? where UserAccount = ?';
        try {
            const list = await app.mysql.query(sql, [UserPassword, UserAccount]);
            return list;
        } catch (e) {
            console.log('修改密码时服务器发生错误' + e);
            return false;
        }
    }
}

module.exports = UserService;