<template>
    <div id="Register">
        <div class="container">
            <div class="circle">
                <img src="../../assets/img/register.svg" alt="">
            </div>

            <div class="form">
                <h3><span>找回密码</span></h3>
                <div class="account">
                    <i class="bi bi-envelope-fill"></i>
                    <input type="emmail" ref="input" placeholder="邮箱">
                </div>
                <div class="verificate">
                    <i class="bi bi-person-check-fill"></i>
                    <input type="text" ref="input" placeholder="验证码">
                    <button class="obtain">
                        <div class="content">
                            <i class="bi bi-arrow-right"></i>
                            <span>获取</span>
                        </div>
                    </button>
                </div>
                <div class="passwordFirst">
                    <i class="bi bi-shield-lock-fill"></i>
                    <input type="password" ref="input" placeholder="新密码">
                </div>
                <div class="passwordSecond">
                    <i class="bi bi-shield-lock-fill"></i>
                    <input type="text" ref="input" placeholder="确认密码">
                </div>
                
                <div class="operation">
                    <button @click="toUser">
                        <div class="content">
                            <i class="bi bi-arrow-left-circle-fill"></i>
                            <span>去登陆</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
    setup() {
        const router = useRouter()
        const route = useRoute()
        function toUser() {
            router.push({
                name: 'User',
                query: {
                    ...route.query,
                },
            })
        }
        return {
            toUser
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

#Register {
    width: 100vw;
    height: 100vh;
    background-color: $primaryWhite;

    .container {
        position: relative;
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
                font-size: 2rem;
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

        .operation {
            @include disFlex(center, center);
            margin-top: 2.5rem;
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
                        font-size: 2.5rem;
                        line-height: 2.9rem;
                        vertical-align: middle;
                        transition: all 0.3s;

                    }

                    span {
                        display: inline-block;
                        width: 5rem;
                        height: 3rem;
                        font-size: 1.1rem;
                        line-height: 3rem;
                        // vertical-align: middle;
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
</style>