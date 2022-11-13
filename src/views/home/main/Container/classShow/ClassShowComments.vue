<template>
    <div id="ClassShowcomments">
        <AticleVue :articleInfo="articleInfo"></AticleVue>
        <div class="myComments">
            <div class="myCommentsTop">
                <div class="elementTopUser">
                    <div class="elementTopUserHeadImg">
                        <img :src="articleInfo.HeadImg" alt="">
                    </div>
                    <div class="elementTopUserInfo">
                        <div class="elementTopUserName">{{ articleInfo.Name }}</div>
                        <div class="elementTopUserAccount">{{ articleInfo.Account }}</div>
                    </div>
                </div>
                <button class="elementTopFocus">
                    <div class="FocusContent">
                        <i class="bi bi-plus-lg"></i>
                        <span>发 布</span>
                    </div>
                </button>
            </div>
            <textarea rows="10" cols="50" class="myCommentsBottom" placeholder="请输入评论"></textarea>
        </div>
        <CommentsVue v-for="(items, index) in comments" :articleInfo="articleInfo" :commentsInfo="items"></CommentsVue>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import AticleVue from './Aticle.vue';
import CommentsVue from './Comments.vue';
export default defineComponent({
    props: {
        articleInfo: Object
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const articleInfo = route.query;
        const comments: object[] = [
            {
                commentsUserName: '张三',
                commentsUserAccount: '123456',
                commentsHeadImg: 'https://crystal.cafe/img/src/1622257461746.png',
                commentsContent: '真牛逼！'
            },
            {
                commentsUserName: '李悦',
                commentsUserAccount: '0000000',
                commentsHeadImg: 'https://crystal.cafe/img/src/1622257461746.png',
                commentsContent: '吃屁'
            },
            {
                commentsUserName: '徐远娇',
                commentsUserAccount: '2222222',
                commentsHeadImg: 'https://crystal.cafe/img/src/1622257461746.png',
                commentsContent: '666666'
            },
        ]
        onMounted(() => {
            // console.log(articleInfo);
        })

        return {
            articleInfo,
            comments
        }
    },
    components: {
        AticleVue,
        CommentsVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#ClassShowcomments {
    width: 64rem;

    .myComments {
        padding: 1rem 4rem;
        margin-bottom: 2rem;
        background-color: #fff;
        border-radius: $borRadiusBig;
        box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.07);

        .myCommentsTop {
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
                    height: 4rem;
                    margin-left: 0.5rem;
                    max-width: 15rem;
                    overflow: hidden;

                    .elementTopUserName {
                        font-size: 1.3rem;
                        font-weight: 700;
                        line-height: 2.5rem;
                    }

                    .elementTopUserAccount {
                        font-size: 1rem;
                        line-height: 1.5rem;
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

        .myCommentsBottom {
            width: 100%;
            height: 10rem;
            padding: 1rem 1.5rem;
            margin-bottom: 1rem;
            border-radius: $borRadiusBig;
            border: 2px solid #f3f3f3;
            outline: none;
            font-size: 1rem;
            font-family: 'Microsoft YaHei';
            resize: none;
        }
    }
}
</style>