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
        onMounted(() => {

        })

        return {
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

@media only screen and (max-width: 420px) {
    #Aticle {
        width: 30rem;
        padding: 1rem;
    }
}
</style>