'use strict';
const { Controller } = require('egg');
const nodemailer = require('nodemailer');
class UserController extends Controller {
    // 参数处理
    getParams(key) {
        const { ctx } = this;
        if (ctx.request.method == 'GET') {
            return ctx.request.query[key];
        } else if (ctx.request.method == 'POST') {
            return ctx.request.body[key];
        }
    }

    // 登录
    async login() {
        const { ctx } = this;
        const UserAccount = this.getParams('UserAccount');
        const UserPassword = this.getParams('UserPassword');
        try {
            const list = await ctx.service.userService.login(UserAccount, UserPassword);
            if (list.length === 0) {
                ctx.response.body = false;
            } else {
                ctx.response.body = list[0];
            }
        } catch (e) {
            console.log('登录时控制器发生错误' + e);
            ctx.response.body = false;
        }
    }

    // 注册
    async register() {
        const { ctx } = this;
        const UserAccount = this.getParams('UserAccount');
        const UserPassword = this.getParams('UserPassword');
        try {
            const list = await ctx.service.userService.register(UserAccount, UserPassword);
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('注册时控制器发生错误' + e);
        }
    }

    // 验证码
    async verificate() {
        const { ctx } = this;
        const UserAccount = this.getParams('UserAccount')
        const verificateCode = String(Math.random()).substring(2, 8);
        const to = UserAccount;
        const title = ' Passionate验证码';
        const content = `
            <h1 style = "text-align: center;" >Passionate验证码</h1>
            <div style="width:500px;margin:20px auto;">
                <h3>亲爱的${to}您好:</h3>
                <h1 style="text-align: center; color: rgb(52, 208, 178);">${verificateCode}</h1>
                <h3>这是您Passionate平台的验证码，如果不是本人操作，那么意味着您的账号存在风险，请进行安全检查。此验证码的有效时间为5分钟，超时后验证码自动作废。若想进行再次验证，请重新发送！</h3>
                <h5 style="text-align: right;">Passionate团队</h5>
            </div>
        `;

        const transporter = nodemailer.createTransport({
            service: 'QQ', // 发给QQ邮箱
            port: 465, // 发邮箱的端口号
            secureConnection: true, // 使用SSL加密传输
            auth: { // 权限认证
                user: '1428390162@qq.com',
                pass: 'fpwhcqyvedyzichg'//授权码
            }
        })

        const mailOptions = {
            from: '1428390162@qq.com', // 发邮件的账号
            to: to, // 收邮件的账号
            subject: title, // 标题
            html: content // 邮寄的内容
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (!err) {
                // console.log('验证码发送成功');发
            }
            else {
                console.log('发送验证码时控制器发生错误' + err);
            }
        })
        ctx.response.body = verificateCode;
    }

    async findPassword() {
        const { ctx } = this;
        const UserAccount = this.getParams('UserAccount');
        const UserPassword = this.getParams('UserPassword');
        try {
            const list = await ctx.service.userService.findPassword(UserAccount, UserPassword);
            ctx.response.body = list
        } catch (e) {
            ctx.response.body = false;
            console.log('修改密码时控制器发生错误' + e);
        }
    }


}


module.exports = UserController;
