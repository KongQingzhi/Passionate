<template>
    <div id="Aticle">
        <div class="element">
            <ArticleTopVue :articleTop="list"></ArticleTopVue>
            <div class="elementMid">
                <el-col :span="24">
                    <el-carousel indicator-position="outside" height="25rem">
                        <el-carousel-item v-for="(items, index) in list.src" :key="index">
                            <div class="elementItems">
                                <img :src="items" alt="">
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </div>
            <div class="elementBottom">
                <div class="elementBottomLeft">
                    <span>发布时间</span>
                    <span>{{ list.time }}</span>
                </div>
                <div class="elementBottomRight">
                    <div class="elementBottomRightLike">
                        <div class="left">
                            <i v-if="list.likeFlag == 1" class="bi bi-heart-fill"></i>
                            <i v-else class="bi bi-heart"></i>
                        </div>
                        <div class="right">
                            {{ list.likeNum }}
                        </div>
                    </div>
                    <div class="elementBottomRightCollect">
                        <div class="left">
                            <i v-if="list.collectFlag == 1" class="bi bi-star-fill"></i>
                            <i v-else class="bi bi-star"></i>
                        </div>
                        <div class="right">
                            {{ list.collectNum }}
                        </div>
                    </div>
                    <button class="elementBottomcomments" @click="toComments(list)">
                        <div class="commentsContent">
                            <i class="bi bi-chat-square-text-fill"></i>
                            <span>进入评论</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeMount, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ArticleTopVue from './ArticleTop.vue'
export default defineComponent({
    props: {
        articleInfo: Object
    },
    setup(props) {
        let list: any = props.articleInfo;
        const router = useRouter();
        const route = useRoute();
        const User = {
            Account: '00000001@qq.com',
            Name: 'Admin',
            HeadImg: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        }

        function toComments(items: object) {
            router.push({
                name: 'ClassShowComments',
                query: {
                    ...items, ...User
                }
            })
        }
        onMounted(() => {
            console.log(list);
        })

        return {
            toComments,
            list
        }
    },
    components: {
        ArticleTopVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#Aticle {
    width: 64rem;
    .element {
        width: 100%;
        margin-bottom: 1rem;
        padding: 2rem 4rem;
        background-color: #fff;
        border-radius: $borRadiusBig;
        box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.07);

        .elementTop {
            height: 5rem;
            margin-bottom: 2rem;
            @include disFlex(space-between, center);

            .elementTopUser {
                width: 20rem;
                @include disFlex(flex-start, center);

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
            height: 28rem;
            padding-bottom: 3rem;

            .elementItems {
                text-align: center;
                width: 56rem;
                height: 25rem;


                img {
                    height: 25rem;
                    object-fit: cover;
                }
            }


        }

        .elementBottom {
            @include disFlex(space-between, center);
            height: 5rem;
            color: #333;

            .elementBottomLeft {
                @include disFlex(space-between, center);
                width: 11rem;
            }

            .elementBottomRight {
                @include disFlex(space-between, center);
                width: 25rem;

                .elementBottomRightLike,
                .elementBottomRightCollect {
                    @include disFlex(space-between, center);
                    width: 9rem;

                    .left,
                    .right {
                        height: 3rem;
                        line-height: 3rem;
                        font-size: 1.5rem;
                    }

                    .left {
                        width: 3rem;
                        color: $primaryRed;
                        line-height: 3rem;
                        text-align: center;
                        cursor: pointer;
                    }

                    .right {
                        width: 6rem;
                    }

                }

                .elementBottomcomments {
                    overflow: hidden;
                    cursor: pointer;

                    .commentsContent {
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
        }

    }
}
</style>