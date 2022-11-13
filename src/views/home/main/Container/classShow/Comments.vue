<template>
    <div id="Comments">
        <ArticleTopVue :articleTop="toArticleTop"></ArticleTopVue>
        <div class="content">{{ list.commentsContent }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeMount, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ArticleTopVue from './ArticleTop.vue'
export default defineComponent({
    props: {
        commentsInfo: Object
    },
    setup(props) {
        let list: any = props.commentsInfo;
        let toArticleTop = {
            headImg: list.commentsHeadImg,
            name: list.commentsUserName,
            account: list.commentsUserAccount
        }
        const router = useRouter();
        const route = useRoute();

        return {
            list,
            toArticleTop
        }
    },
    components: {
        ArticleTopVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#Comments {
    width: 64rem;
    padding: 1rem 4rem;
    background-color: #fff;
    border-radius: $borRadiusBig;
    margin-bottom: 1rem;
    box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.07);

    .content {
        width: 100%;
        height: 100%;
        padding: 1rem 1.5rem;
        border-radius: $borRadiusBig;
        border: 2px solid #f3f3f3;
        font-size: 1rem;
        margin-bottom: 1rem;
    }
}
</style>