<template>
    <div id="Aticle">
            <ArticleTopVue :articleTop="list"></ArticleTopVue>
            <AticleMidVue :articleMid="list"></AticleMidVue>
            <AticleBottomVue :articleBottom="list"></AticleBottomVue>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeMount, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ArticleTopVue from './ArticleTop.vue'
import AticleMidVue from './AticleMid.vue'
import AticleBottomVue from './AticleBottom.vue'
export default defineComponent({
    props: {
        articleInfo: Object
    },
    setup(props) {
        let list: any = props.articleInfo;
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
        onMounted(() => {
            // console.log(list);
        })

        return {
            toComments,
            list
        }
    },
    components: {
        ArticleTopVue,
        AticleMidVue,
        AticleBottomVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#Aticle {
    width: 64rem;
    margin-bottom: 1rem;
    padding: 2rem 4rem;
    background-color: #fff;
    border-radius: $borRadiusBig;
    box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.07);
}
</style>