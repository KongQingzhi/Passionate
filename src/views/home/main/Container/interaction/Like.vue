<template>
    <div id="Like">
        <ArticleVue v-for="items in likeList" :key="items.ArticleId" :articleInfo="items"></ArticleVue>
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

        const likeList = ref<any>(null)
        function selectLove() {
            api.selectLove({ UserAccount: User.UserAccount }).then(res => {
                const data = res.data;
                likeList.value = data;
            })
        }
        onMounted(() => {
            selectLove()
        })

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

#Like {
    width: 64rem;
}
</style>