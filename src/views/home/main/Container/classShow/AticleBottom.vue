<template>
    <div id="AticleBottom">
        <div class="elementBottomLeft">
            <span>发布时间</span>
            <span>{{ list.ArticleTime }}</span>
        </div>
        <div class="elementBottomRight">
            <div class="elementBottomRightLike">
                <div class="left">
                    <i v-if="flag.LoveId != 0" class="bi bi-heart-fill" @click="loveOption"></i>
                    <i v-else class="bi bi-heart" @click="loveOption"></i>
                </div>
                <div class="right">
                    {{ num.LoveNum }}
                </div>
            </div>
            <div class="elementBottomRightCollect">
                <div class="left">
                    <i v-if="flag.CollectId != 0" class="bi bi-star-fill" @click="collectOption"></i>
                    <i v-else class="bi bi-star" @click="collectOption"></i>
                </div>
                <div class="right">
                    {{ num.CollectNum }}
                </div>
            </div>
            <button class="elementBottomComments" @click="toComments(list)">
                <div class="commentsContent">
                    <i class="bi bi-chat-square-text-fill"></i>
                    <span>进入评论</span>
                </div>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeMount, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import api from '../../../../../axios/api';
import ArticleTopVue from './ArticleTop.vue'
export default defineComponent({
    props: {
        articleBottom: Object
    },
    setup(props) {
        let list: any = props.articleBottom;
        const router = useRouter();
        const route = useRoute();
        const User: any = sessionStorage;
        const num = ref<any>({
            "ArticleId": 0,
            "LoveNum": 0,
            "CollectNum": 0
        })
        const flag = ref<any>({
            LoveId: 0,
            CollectId: 0,
            loveNum: 0,
            collectNum: 0
        });
        function toComments(items: any) {
            router.push({
                name: 'ClassShowComments',
                query: {
                    ...items
                }
            })
        }

        function judgeLoveCollect() {
            api.judgeLoveCollect({ UserAccount: User.UserAccount, ArticleId: list.ArticleId }).then(res => {
                const data = res.data;
                flag.value = data
            })
        }

        function selectLoveCollectNum() {
            api.selectLoveCollectNum({ ArticleId: list.ArticleId }).then(res => {
                const data = res.data;
                num.value = data;
            })
        }

        function loveOption() {
            if (flag.value.LoveId != 0) {
                api.deleteLove({ ArticleId: list.ArticleId, UserAccount: User.UserAccount }).then(res => {
                    judgeLoveCollect()
                })
            } else {
                api.addLove({ ArticleId: list.ArticleId, UserAccount: User.UserAccount }).then(res => {
                    judgeLoveCollect()
                })
            }
        }

        function collectOption() {
            if (flag.value.CollectId != 0) {
                api.deleteCollect({ ArticleId: list.ArticleId, UserAccount: User.UserAccount }).then(res => {
                    judgeLoveCollect()
                })
            } else {
                api.addCollect({ ArticleId: list.ArticleId, UserAccount: User.UserAccount }).then(res => {
                    judgeLoveCollect()
                })
            }
        }

        onMounted(() => {
            judgeLoveCollect()
            selectLoveCollectNum()
        })

        return {
            toComments,
            loveOption,
            collectOption,
            flag,
            list,
            num
        }
    },
    components: {
        ArticleTopVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#AticleBottom {
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
            }

            .left {
                width: 3rem;
                color: $primaryRed;
                line-height: 3rem;
                text-align: center;
                cursor: pointer;
                font-size: 1.5rem;
            }

            .right {
                width: 6rem;
                font-size: 1.1rem;
            }
        }

        .elementBottomComments {
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
</style>