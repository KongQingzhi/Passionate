<template>
    <div id="Collect">
        <ArticleVue v-for="items in collectList" :key="items.ArticleId" :articleInfo="items"></ArticleVue>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import api from '../../../../../axios/api'
import ArticleVue from "../classShow/Aticle.vue"
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
    setup() {
        const router = useRouter()
        const route = useRoute()
        const User: any = sessionStorage;
        const collectList = ref<any>(null);
        function selectLove() {
            api.selectCollect({ UserAccount: User.UserAccount }).then(res => {
                const data = res.data;
                collectList.value = data;
            })
        }
        onMounted(() => {
            selectLove()
        })

        return {
            collectList
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