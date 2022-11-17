<template>
    <div id="AticleMid">
        <div class="text">
            <div class="top">{{ list.ArticleTitle }}</div>
            <div class="bottom">{{ list.ArticleContent }}</div>
        </div>
        <el-col :span="24">
            <el-carousel indicator-position="outside" height="25rem">
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
import { defineComponent, onMounted, onBeforeMount, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ArticleTopVue from './ArticleTop.vue'
export default defineComponent({
    props: {
        articleMid: Object
    },
    setup(props) {
        let list: any = props.articleMid;
        const router = useRouter();
        const route = useRoute();
        onMounted(() => {
        })

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

    .elementItems {
        text-align: center;
        width: 56rem;
        height: 27rem;
        padding: 1rem 0;

        img {
            height: 25rem;
            object-fit: cover;
        }
    }
}
</style>