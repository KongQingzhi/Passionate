<template>
    <div id="AticleMid">
        <div class="text">
            <div class="top">{{ list.ArticleTitle }}</div>
            <div class="bottom">{{ list.ArticleContent }}</div>
        </div>
        <el-col :span="24">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(items, index) in list.ArticleImage" :key="index">
                    <div class="elementItems">
                        <img :src="items" alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </el-col>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch, reactive, onBeforeMount, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ArticleTopVue from './ArticleTop.vue'
export default defineComponent({
    props: {
        articleMid: Object
    },
    setup(props) {
        const propsArticle: any = props.articleMid;
        let list = reactive<any>({
            ArticleTitle: '',
            ArticleContent: '',
            ArticleImage: []
        });
        const router = useRouter();
        const route = useRoute();
        onMounted(() => {
            list.ArticleTitle = propsArticle.ArticleTitle;
            list.ArticleContent = propsArticle.ArticleContent;
            list.ArticleImage = propsArticle.ArticleImage;
        })
        watch(
            props,
            (Prop) => {
                const propsArticle: any = Prop.articleMid;
                list.ArticleTitle = propsArticle.ArticleTitle;
                list.ArticleContent = propsArticle.ArticleContent;
                list.ArticleImage = propsArticle.ArticleImage;
            },
            { deep: true }
        )

        return {
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

#AticleMid {
    padding-bottom: 1rem;

    .text {
        padding: 1rem;
        border: 2px solid #f3f3f3;
        margin-bottom: 2rem;
        border-radius: $borRadiusBig;

        .top {
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 2rem;
            margin-bottom: 1rem;
        }

        .bottom {
            font-size: 1rem;
            line-height: 1.5rem;

        }
    }



    .el-carousel-item {
        height: 20rem;
        margin: 0;
    }

    .elementItems {
        text-align: center;
        width: 56rem;
        height: 20rem;
        padding: 1rem 0;

        img {
            height: 18.75rem;
            object-fit: cover;
        }
    }
}

@media only screen and (max-width: 420px) {
    #AticleMid {
        // height: 45rem;

        .el-col {
            height: 28.75rem;

            .el-carousel {
                height: 30rem;
                padding: 0;

                .el-carousel-item {
                    height: 30rem;
                    margin: 0;
                }
            }
        }

        .elementItems {
            width: 28rem;

            img {
                width: 28rem;
                height: 30rem;
                object-fit: cover;
            }
        }
    }
}
</style>