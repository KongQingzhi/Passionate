<template>
    <div id="Collect">
        <ArticleVue v-for="items in likeList" :key="items.articleId" :articleInfo="items"></ArticleVue>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArticleVue from "../classShow/Aticle.vue"
export default defineComponent({
    setup() {
        const likeList = [
            {
                articleId: 1,
                articleClass: '搞笑',
                name: 'Trevor1',
                account: '123456789@qq.com',
                headImg: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                src: ['https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'],
                time: '2000-10-22',
                likeNum: 1,
                collectNum: 11,
                likeFlag: 1,
                collectFlag: 0
            },
            {
                articleId: 1,
                articleClass: '生活',
                name: 'Trevor2',
                account: '123456789@qq.com',
                headImg: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                src: ['https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'],
                time: '2000-9-25',
                likeNum: 2,
                collectNum: 22,
                likeFlag: 1,
                collectFlag: 1
            },
            {
                articleId: 1,
                articleClass: '新鲜',
                name: 'Trevor3',
                account: '123456789@qq.com',
                headImg: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                src: ['https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'],
                time: '2000-10-22',
                likeNum: 3,
                collectNum: 33,
                likeFlag: 0,
                collectFlag: 0
            },
        ]
        return {
            likeList
        }
    },
    components: {
        ArticleVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#Collect {
    width: 64rem;
}
</style>