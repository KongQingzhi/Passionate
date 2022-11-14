<template>
    <div id="Published">
        <div class="publishedElement" v-for="items in publishedList">
            <div class="publishedTop">{{ items.articleClass }}</div>
            <AticleMidVue :articleMid="items"></AticleMidVue>
            <AticleBottomVue :articleBottom="items"></AticleBottomVue>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AticleMidVue from '../classShow/AticleMid.vue'
import AticleBottomVue from '../classShow/AticleBottom.vue'
export default defineComponent({
    setup() {
        const publishedList = [
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
            publishedList
        }
    },
    components: {
        AticleMidVue,
        AticleBottomVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#Published {
    width: 64rem;

    .publishedElement {
        position: relative;
        width: 100%;
        margin-bottom: 1rem;
        padding: 4rem 4rem 2rem;
        background-color: #fff;
        border-radius: $borRadiusBig;
        box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.07);

        .publishedTop {
            @include posiAR(absolute, 0, 0);
            width: 6rem;
            height: 2.5rem;
            padding: 0.5rem 1rem;
            text-align: center;
            line-height: 1.5rem;
            color: $primaryWhite;
            letter-spacing: 0.2rem;
            background-color: $primaryGreen;
            border-radius: $borRadiusBig 0 0 0;
            clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
        }
    }


}
</style>