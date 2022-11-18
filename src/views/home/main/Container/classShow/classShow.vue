<template>
    <div id="ClassShow">
        <AticleVue v-for="items in articleList" :key="items.ArticleId" :articleInfo="items"></AticleVue>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import AticleVue from './Aticle.vue'
import api from '../../../../../axios/api/index'
export default defineComponent({
    setup() {
        const articleList = ref<any>(null);
        onMounted(() => {
            // api.recommendArticle({ maxArticleId: 0 }).then(res => {
            //     console.log(res.data);
            //     articleList.value = res.data;
            // })
        })


        // const articleList = [
        //     {
        //         articleId: 1,
        //         name: 'Trevor1',
        //         account: '123456789@qq.com',
        //         headImg: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        //         src: ['https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'],
        //         time: '2000-10-22',
        //         likeNum: 1,
        //         collectNum: 11,
        //         likeFlag: 1,
        //         collectFlag: 0
        //     },
        //     {
        //         articleId: 1,
        //         name: 'Trevor2',
        //         account: '123456789@qq.com',
        //         headImg: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        //         src: ['https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'],
        //         time: '2000-9-25',
        //         likeNum: 2,
        //         collectNum: 22,
        //         likeFlag: 1,
        //         collectFlag: 1
        //     },
        //     {
        //         articleId: 1,
        //         name: 'Trevor3',
        //         account: '123456789@qq.com',
        //         headImg: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        //         src: ['https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'],
        //         time: '2000-10-22',
        //         likeNum: 3,
        //         collectNum: 33,
        //         likeFlag: 0,
        //         collectFlag: 0
        //     },
        // ]
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

        return {
            articleList,
            toComments
        }
    },
    components: {
        AticleVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#ClassShow {
    width: 64rem;
}
</style>