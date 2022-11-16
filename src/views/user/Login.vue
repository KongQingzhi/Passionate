<template>
    <div id="Login">
        <div class="container">
            <div class="circle">
                <img src="../../assets/img/login.svg" alt="">
            </div>
            <div class="form">
                <h3><span>登 录</span></h3>
                <form @click.prevent="">
                    <div class="account">
                        <i class="bi bi-person-circle"></i>
                        <input type="email" ref="input" v-model="UserAccount" placeholder="邮箱">
                    </div>
                    <div class="password">
                        <i class="bi bi-shield-lock-fill"></i>
                        <input type="password" ref="input" v-model="UserPassword" placeholder="密码">
                    </div>
                    <div class="operation">
                        <span @click="toRegister">去注册</span>
                        <span @click="toFindPassword">忘记密码？</span>
                    </div>
                    <div class="tip">
                        <span v-show="tipFlag">账号与密码不匹配，请检查后重试！</span>
                    </div>
                    <div class="btn">
                        <button class="button" @click="toLogin">
                            <div class="content">
                                <i class="bi bi-arrow-right"></i>
                                <span>出 发</span>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import api from '../../axios/api/index';
export default defineComponent({
    setup() {
        const router = useRouter()
        const route = useRoute()

        // 用户账号和密码
        const UserAccount = ref('');
        const UserPassword = ref('');

        const tipFlag = ref(false);

        // 登录验证
        function toLogin() {
            api.login({ UserAccount: UserAccount.value, UserPassword: UserPassword.value }).then(res => {
                // 登录成功、跳转主页
                const data = res.data; 
                if (data === false) {
                    tipFlag.value = true;
                    setTimeout(() => {
                        tipFlag.value = false;
                    }, 2000)
                } else {
                    router.push({
                        name: 'Home',
                        query: {
                            ...data,
                        },
                    })
                }

            }).catch(e => {
                console.log(e);
                tipFlag.value = true;
            })
        }


        function toRegister() {
            router.push({
                name: 'Register',
                query: {
                    ...route.query,
                },
            })
        }



        function toFindPassword() {
            router.push({
                name: 'FindPwd',
                query: {
                    ...route.query,
                },
            })
        }
        return {
            UserAccount,
            UserPassword,
            tipFlag,
            toLogin,
            toRegister,
            toFindPassword
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

#Login {
    width: 100%;
    height: 100vh;
    background-color: $primaryWhite;
    overflow: hidden;

    .container {
        position: relative;
        width: 90rem;
        height: 100vh;
        margin: 0 auto;

        .circle {
            @include posiAR(absolute, -50rem, -30rem);
            width: 100rem;
            height: 100rem;
            background-color: $primaryGreen;
            border-radius: 50%;

            img {
                @include posiAR(absolute, 62rem, 35rem);
                width: 45rem;
                height: 45rem;
            }
        }

        .form {
            @include posiAR(absolute, 10rem, 60rem);
            width: 25rem;
            height: 30rem;
            padding: 3rem 2rem;
            background-color: #fff;
            border-radius: $borRadiusBig;
            box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.07);

            h3 {

                line-height: 3rem;
                text-align: center;
                margin-bottom: 3rem;

                span {
                    font-size: 2rem;
                    letter-spacing: 0.3rem;

                }
            }

            .account,
            .password {
                height: 3rem;
                margin: 1rem 0 1rem;
                border-radius: 3rem;
                border: 0.2rem solid $primaryWhite;
                overflow: hidden;

                i {
                    display: inline-block;
                    width: 6rem;
                    height: 2.8rem;
                    border-radius: 1.4rem;
                    background-color: $primaryGreen;
                    color: $primaryWhite;
                    font-size: 1.5rem;
                    line-height: 2.8rem;
                    text-align: center;
                    vertical-align: middle;
                }

                input {
                    width: 14rem;
                    height: 2.6rem;
                    font-size: 1rem;
                }
            }

            .operation {
                @include disFlex(space-around, center);
                height: 3rem;
                // margin-bottom: 1rem;
                cursor: pointer;

                span {
                    color: $primaryGreen;
                    transition: all 0.3s;
                }

                span:hover {
                    color: $primaryBlue;
                }
            }

            .tip {
                height: 1rem;
                font-size: 0.75rem;
                text-align: center;
                margin-bottom: 2rem;
                color: $primaryRed;
            }

            .btn {
                display: flex;
                justify-content: center;

                .button {
                    width: 7rem;
                    cursor: pointer;
                    overflow: hidden;
                    transition: all 0.3s;

                    .content {
                        width: 14rem;
                        height: 2.5rem;
                        transform: translateX(-7rem);
                        transition: all 0.5s;

                        i {
                            display: inline-block;
                            width: 7rem;
                            height: 2.5rem;
                            font-size: 1.5rem;
                            font-weight: 700;
                            vertical-align: middle;
                        }

                        span {
                            display: inline-block;
                            width: 7rem;
                            height: 2.5rem;
                            line-height: 2.5rem;
                            font-size: 1rem;
                        }
                    }

                    &:hover .content {
                        transform: translateX(0);
                    }

                    &:hover {
                        transform: translateY(-0.025rem);
                        box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.1);
                    }

                    &:active {
                        transform: translateY(0rem);
                        box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.2);
                    }
                }
            }
        }
    }
}
</style>