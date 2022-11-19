<template>
    <div id="Register">
        <div class="container">
            <div class="circle">
                <img src="../../assets/img/register.svg" alt="">
            </div>
            <div class="form">
                <h3>
                    <span>注 册</span>
                </h3>
                <form>
                    <div class="account">
                        <i class="bi bi-envelope-fill"></i>
                        <input type="email" v-model="UserAccount" ref="input" placeholder="邮箱" required>
                    </div>
                    <div class="passwordFirst">
                        <i class="bi bi-shield-lock-fill"></i>
                        <input type="password" v-model="UserPassword" ref="input" placeholder="密码" required>
                    </div>
                    <div class="passwordSecond">
                        <i class="bi bi-shield-lock-fill"></i>
                        <input type="password" ref="input" v-model="UserPasswordSecond" placeholder="确认密码" required>
                    </div>
                    <div class="verificate">
                        <i class="bi bi-person-check-fill"></i>
                        <input type="text" ref="input" v-model="VerificateCode" placeholder="验证码">
                        <button :disabled="isDisabled" class="obtain" @click="toVerificate">
                            <div v-if="!isDisabled" class="content">
                                <i class="bi bi-arrow-right"></i>
                                <span>获 取</span>
                            </div>
                            <span v-else>{{ countdown }}s后重新获取</span>
                        </button>
                    </div>
                    <div class="tip">
                        <span v-show="tipFlag">{{ tipText }}</span>
                    </div>
                    <div class="operation">
                        <button @click="toUser">
                            <div class="content">
                                <i class="bi bi-arrow-left-circle-fill"></i>
                                <span>去登陆</span>
                            </div>
                        </button>
                        <button @click="toRigster">
                            <div class="content">
                                <i class="bi bi-arrow-right-circle-fill"></i>
                                <span>注册</span>
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
import api from '../../axios/api/index'
export default defineComponent({
    setup() {
        const router = useRouter()
        const route = useRoute()
        const UserAccount = ref<string>('');
        const UserPassword = ref<string>('');
        const UserPasswordSecond = ref<string>('');
        const VerificateCode = ref<string>('');
        const VerificateCodeRes = ref<string>('');
        const tipFlag = ref<boolean>(false);
        const tipText = ref<string>('');
        const isDisabled = ref<boolean>(false);
        const countdown = ref<number>(60);
        function toUser() {
            router.push({
                name: 'User',
                query: {
                    ...route.query,
                },
            })
        }

        function test() {
            if (UserAccount.value == '' || UserPassword.value == '' || UserPasswordSecond.value == '') {
                tipText.value = '信息不能为空';
                tipFlag.value = true;
                setTimeout(() => {
                    tipFlag.value = false;
                }, 2000)
            } else {
                if (UserPassword.value != UserPasswordSecond.value) {
                    tipText.value = '两次密码不一致';
                    tipFlag.value = true;
                    setTimeout(() => {
                        tipFlag.value = false;
                    }, 2000)
                } else {
                    return true;
                }
            }
        }

        function toVerificate() {
            if (test() && !isDisabled.value) {
                isDisabled.value = true;
                const timer = setInterval(() => {
                    countdown.value = countdown.value - 1;
                    if (countdown.value == 0) {
                        clearInterval(timer);
                        isDisabled.value = false;
                        countdown.value = 60;
                    }
                }, 1000)
                api.verificate({ UserAccount: UserAccount.value }).then(res => {
                    VerificateCodeRes.value = res.data;
                })
            }
        }

        function toRigster() {
            if (VerificateCode.value == '' || VerificateCodeRes.value == '') {
                tipText.value = '验证码不能为空，请输入验证码';
                tipFlag.value = true;
                setTimeout(() => {
                    tipFlag.value = false;
                }, 2000)
            } else {
                if (VerificateCode.value != VerificateCodeRes.value) {
                    tipText.value = '验证码输入有误，请重新输入/获取';
                    tipFlag.value = true;
                    setTimeout(() => {
                        tipFlag.value = false;
                    }, 2000)
                } else {
                    api.register({ UserAccount: UserAccount.value, UserPassword: UserPassword.value }).then(res => {
                        if (res.data == false) {
                            tipText.value = '账号已存在，请找回密码';
                            tipFlag.value = true;
                            setTimeout(() => {
                                tipFlag.value = false;
                            }, 2000)
                        } else {
                            api.login({ UserAccount: UserAccount.value, UserPassword: UserPassword.value }).then(res => {
                                const data = res.data;
                                router.push({
                                    name: 'Home',
                                    query: {
                                        ...data,
                                    },
                                })
                            })
                        }
                    })
                }
            }
        }

        return {
            UserAccount,
            UserPassword,
            UserPasswordSecond,
            VerificateCode,
            tipFlag,
            tipText,
            isDisabled,
            countdown,
            toUser,
            toRigster,
            toVerificate
        }
    },


})
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

#Register {
    width: 100%;
    height: 100vh;
    background-color: $primaryWhite;
    overflow: hidden;

    .container {
        position: relative;
        @include disFlex(space-between, center);
        width: 90rem;
        height: 100vh;
        margin: 0 auto;

        .circle {
            @include posiAR(absolute, -50rem, 30rem);
            width: 100rem;
            height: 100rem;
            background-color: $primaryGreen;
            border-radius: 50%;

            img {
                @include posiAR(absolute, 62rem, 20rem);
                width: 45rem;
                height: 45rem;
            }
        }

        .form {
            @include posiAR(absolute, 10rem, 15rem);
            width: 25rem;
            height: 35rem;
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
            .passwordFirst,
            .passwordSecond,
            .verificate {
                height: 3rem;
                margin: 1rem 0 0rem;
                border-radius: 3rem;
                border: 0.2rem solid $primaryWhite;
                overflow: hidden;

                i {
                    display: inline-block;
                    width: 2.6rem;
                    height: 2.6rem;
                    border-radius: 2.8rem;
                    background-color: $primaryGreen;
                    color: $primaryWhite;
                    font-size: 1.5rem;
                    line-height: 2.6rem;
                    text-align: center;
                    vertical-align: middle;
                }

                input {
                    width: 14rem;
                    height: 2.6rem;
                    font-size: 1rem;
                }
            }

            .verificate {
                input {
                    width: 12.4rem;
                }

                .obtain {
                    vertical-align: middle;
                    height: 2.6rem;
                    cursor: pointer;
                    overflow: hidden;
                    border-radius: 5rem;
                    transition: all 0.3s;

                    .content {
                        width: 11.2rem;
                        height: 2.6rem;
                        transform: translateX(-5.6rem);
                        transition: all 0.5s;

                        i {
                            display: inline-block;
                            width: 5.6rem;
                            height: 2.6rem;
                            font-size: 1.8rem;
                            font-weight: 700;
                            vertical-align: middle;
                        }

                        span {
                            display: inline-block;
                            width: 5.6rem;
                            height: 2.6rem;
                            line-height: 2.6rem;
                            font-size: 1rem;
                            text-align: center;
                        }
                    }

                    &:hover .content {
                        transform: translateX(0);
                    }

                }
            }

            .tip {
                margin-top: 1rem;
                height: 1rem;
                font-size: 0.75rem;
                line-height: 1rem;
                text-align: center;
                color: $primaryRed;
            }

            .operation {
                @include disFlex(center, center);
                margin-top: 1.5rem;
                height: 3rem;

                button {
                    width: 3rem;
                    height: 3rem;
                    margin: 0 1rem;
                    border-radius: 1.5rem;
                    transition: width 0.3s;
                    overflow: hidden;
                    cursor: pointer;

                    .content {
                        width: 8rem;

                        i {
                            display: inline-block;
                            width: 3rem;
                            height: 3rem;
                            font-size: 1.5rem;
                            line-height: 2.9rem;
                            vertical-align: middle;
                            transition: all 0.3s;
                        }

                        span {
                            display: inline-block;
                            width: 4rem;
                            height: 3rem;
                            font-size: 1.1rem;
                            line-height: 3rem;
                            margin-right: 1rem;
                        }
                    }

                    &:hover {
                        width: 8rem;
                    }

                    &:hover i {
                        color: #fff;
                    }
                }
            }
        }
    }
}


@media only screen and (max-width: 1200px) {}

@media only screen and (max-width: 992px) {}

@media only screen and (max-width: 768px) {}

@media only screen and (max-width: 520px) {}

@media only screen and (max-width: 420px) {
    

}
</style>