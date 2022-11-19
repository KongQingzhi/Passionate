<template>
    <div id="Like">
        <div v-if="likeList.length == 0" class="tipTitle">还没有喜欢的作品吗？快去浏览吧！</div>
        <div class="container" v-else>
            <ArticleVue v-for="items in likeList" :key="items.ArticleId" :articleInfo="items"></ArticleVue>
        </div>
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

        const likeList = ref<any>([])
        function selectLove() {
            api.selectLove({ UserAccount: User.UserAccount }).then(res => {
                const data = res.data;
                likeList.value = data;
            })
        }
        onMounted(() => {
            if (sessionStorage.getItem('UserAccount') == undefined) {
                router.push({
                    name: 'Login'
                })
            }
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

    .tipTitle {
        line-height: 10rem;
        font-size: 1.2rem;
        font-weight: 700;
        color: $primaryGreen;
    }
}
</style>