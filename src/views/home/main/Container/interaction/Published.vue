<template>
    <div id="Published">
        <div class="publishedElement" v-for="items in publishedList">
            <div class="publishedTop">{{ items.ArticleClass }}</div>
            <AticleMidVue :articleMid="items"></AticleMidVue>
            <AticleBottomVue :articleBottom="items"></AticleBottomVue>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import AticleMidVue from '../classShow/AticleMid.vue'
import AticleBottomVue from '../classShow/AticleBottom.vue'
import api from '../../../../../axios/api';
export default defineComponent({
    setup() {
        const publishedList = ref<any>([]);
        const User: any = sessionStorage;
        onMounted(() => {
            api.myPublished({ UserAccount: User.UserAccount }).then(res => {
                const data = res.data;
                publishedList.value = data;
            })
        })

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