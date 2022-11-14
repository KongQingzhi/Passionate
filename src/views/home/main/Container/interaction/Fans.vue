<template>
    <div id="Fans">
        <div class="focusElement" v-for="(items, index) in focusList">
            <ArticleTopVue :articleTop="items"></ArticleTopVue>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArticleTopVue from '../classShow/ArticleTop.vue';
export default defineComponent({
    setup() {
        const focusList = [
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
            focusList
        }
    },
    components: {

        ArticleTopVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#Fans {
    width: 64rem;
    display: flex;
    flex-wrap: wrap;


    .focusElement {
        width: 30rem;
        margin: 0 0 1rem 2rem;
        padding: 2rem 2rem 1rem;
        background-color: #fff;
        border-radius: $borRadiusBig;
        box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.07);
    }
}
</style>