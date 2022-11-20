<template>
    <div id="AticleBottom">
        <div class="elementBottomLeft">
            <span>发布时间</span>
            <span>{{ list.ArticleTime }}</span>
        </div>
        <div class="elementBottomRight">
            <div class="elementBottomRightLike">
                <div class="left">
                    <i v-show="LoveFlag != 0" class="bi bi-heart-fill" @click="loveOption"></i>
                    <i v-show="LoveFlag == 0" class="bi bi-heart" @click="loveOption"></i>
                </div>
                <div class="right">
                    {{ LoveNum }}
                </div>
            </div>
            <div class="elementBottomRightCollect">
                <div class="left">
                    <i v-show="CollectFlag != 0" class="bi bi-star-fill" @click="collectOption"></i>
                    <i v-show="CollectFlag == 0" class="bi bi-star" @click="collectOption"></i>
                </div>
                <div class="right">
                    {{ CollectNum }}
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
import { defineComponent, onMounted, onBeforeMount, reactive, ref } from 'vue'
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
        const LoveNum = ref(0);
        const CollectNum = ref(0);
        const LoveFlag = ref(0);
        const CollectFlag = ref(0);
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
                LoveFlag.value = data[0];
                CollectFlag.value = data[1];
            })
        }

        function selectLoveCollectNum() {
            api.selectLoveCollectNum({ ArticleId: list.ArticleId }).then(res => {
                const data = res.data;
                LoveNum.value = data.LoveNum;
                CollectNum.value = data.CollectNum;
            })
        }

        async function loveOption() {
            if (LoveFlag.value == 0) {
                api.addLove({ ArticleId: list.ArticleId, UserAccount: User.UserAccount }).then(res => {
                    judgeLoveCollect()
                    selectLoveCollectNum()
                })
            } else {
                api.deleteLove({ ArticleId: list.ArticleId, UserAccount: User.UserAccount }).then(res => {
                    judgeLoveCollect()
                    selectLoveCollectNum()
                })
            }

        }

        function collectOption() {
            if (CollectFlag.value == 0) {
                api.addCollect({ ArticleId: list.ArticleId, UserAccount: User.UserAccount }).then(res => {
                    judgeLoveCollect()
                    selectLoveCollectNum()
                })
            } else {
                api.deleteCollect({ ArticleId: list.ArticleId, UserAccount: User.UserAccount }).then(res => {
                    judgeLoveCollect()
                    selectLoveCollectNum()
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
            LoveNum,
            CollectNum,
            LoveFlag,
            CollectFlag,
            list,
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

@media only screen and (max-width: 420px) {
    #AticleBottom {
        // height: 45rem;
        padding: 0;

        .elementBottomLeft {
            @include disFlex(space-between, center);
            width: 11rem;
        }

        .elementBottomRight {
            @include disFlex(space-between, center);
            width: 28rem;
        }
    }

}
</style>