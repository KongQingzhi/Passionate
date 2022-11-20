<template>
    <div id="ClassShow">
        <AticleVue v-for="items in articleList" :key="items.ArticleId" :articleInfo="items"></AticleVue>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import AticleVue from './Aticle.vue'
import api from '../../../../../axios/api/index'
import { onBeforeRouteUpdate } from "vue-router";
import Login from '../../../../user/Login.vue';
export default defineComponent({
    setup() {
        const articleList = ref<any>(null);
        const router = useRouter();
        const route = useRoute();
        const User: any = sessionStorage;
        let ArticleClass: any = route.query.index;
        let maxNum = Number(sessionStorage.getItem(`maxNum${ArticleClass}`))
        function loadByClass() {
            api.loadByClass({ ArticleClass: ArticleClass - 2, maxNum }).then(res => {
                const data = res.data;
                articleList.value = data;
                // if (data.length != 0) {
                //     sessionStorage.setItem(`maxNum${ArticleClass}`, data[data.length - 1].ArticleId);
                // }
            })
        }

        function recommendArticle() {
            api.recommendArticle({ maxNum }).then(res => {
                const data = res.data;
                articleList.value = data;
                // if (data.length != 0) {
                //     sessionStorage.setItem(`maxNum${ArticleClass}`, data[data.length - 1].ArticleId);
                // }
            }).catch(e => {
                console.log(e);
            })
        }

        function focuserArticle() {
            console.log(123);

            api.focuserArticle({ UserAccount: User.UserAccount }).then(res => {
                const data = res.data;
                articleList.value = data;
            })
        }

        onBeforeRouteUpdate(to => {
            ArticleClass = Number(to.query.index);
            switch (ArticleClass) {
                case 0: recommendArticle(); break;
                case 1: focuserArticle(); break;
            }
            if (ArticleClass > 1) {
                loadByClass();
            }
        });

        onMounted(() => {
            if (sessionStorage.getItem('UserAccount') == undefined) {
                router.push({
                    name: 'Login'
                })
            }
            recommendArticle();
        })

        return {
            articleList
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

@media only screen and (max-width: 420px) {
    #ClassShow {
        width: 28rem;
    }
}
</style>