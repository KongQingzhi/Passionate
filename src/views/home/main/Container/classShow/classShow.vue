<template>
    <div id="ClassShow">
        <div class="element" v-for="(items, index) in list">
            <div class="elementTop">
                <div class="elementTopUser">
                    <div class="elementTopUserHeadImg">
                        <img :src="items.headImg" alt="">
                    </div>
                    <div class="elementTopUserInfo">
                        <div class="elementTopUserName">{{ items.name }}</div>
                        <div class="elementTopUserAccount">{{ items.account }}</div>
                    </div>
                </div>
                <button class="elementTopFocus">
                    <div class="FocusContent">
                        <i class="bi bi-plus-lg"></i>
                        <span>关 注</span>
                    </div>
                </button>
            </div>
            <div class="elementMid">
                <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="item in items.src" :key="item">
                        <img :src="item" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="elementBottom">
                <div class="elementBottomLeft"></div>
                <div class="elementBottomRight"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const list = [
            {
                name: 'Trevor',
                account: '123456789@qq.com',
                headImg: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                src: ['https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'],
                time: '2000-10-22',
            },
            {
                name: 'Trevor',
                account: '123456789@qq.com',
                headImg: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                src: ['https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'],
                time: '2000-10-22',
            },
            {
                name: 'Trevor',
                account: '123456789@qq.com',
                headImg: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                src: ['https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'],
                time: '2000-10-22',
            }
        ]

        return {
            list
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#ClassShow {
    width: 64rem;

    .element {
        width: 100%;
        margin-bottom: 1rem;
        padding: 2rem 4rem;
        background-color: #fff;
        border-radius: $borRadiusBig;

        .elementTop {
            height: 5rem;
            margin-bottom: 2rem;
            @include disFlex(space-between, center);

            .elementTopUser {
                width: 20rem;
                @include disFlex(flex-start, center);
                // margin: 1rem 0;

                .elementTopUserHeadImg {
                    width: 4rem;
                    height: 4rem;
                    border-radius: 2rem;
                    margin-right: 1rem;
                    overflow: hidden;

                    img {
                        width: 4rem;
                        height: 4rem;
                        object-fit: cover;
                    }
                }

                .elementTopUserInfo {
                    max-width: 15rem;
                    overflow: hidden;

                    .elementTopUserName {
                        font-size: 2rem;
                        font-weight: 700;
                    }

                    .elementTopUserAccount {
                        font-size: 1rem;
                    }
                }
            }

            .elementTopFocus {
                overflow: hidden;
                cursor: pointer;

                .FocusContent {
                    width: 11.25rem;
                    height: 2.5rem;
                    transform: translateX(-5.625rem);
                    transition: all 0.3s;

                    i,
                    span {
                        display: inline-block;
                        width: 5.625rem;
                        height: 2.5rem;
                    }

                    i {
                        font-size: 1.5rem;
                        vertical-align: middle;
                    }

                    &:hover {
                        transform: translateX(0);
                    }
                }

            }
        }

        .elementMid {
            display: flex;
            height: 25rem;

            .image {
                // display: inline-block;
                height: 20rem;
                img{
                    height: 20rem;
                }
            }

        }

    }
}
</style>