<template>
    <div id="Container">
        <BannerVue></BannerVue>
        <TitleVue></TitleVue>
        <SmallCardsVue></SmallCardsVue>
    </div>
</template>

<script lang="ts">
import BannerVue from './Banner/Banner.vue';
import TitleVue from './Title/Title.vue';
import SmallCardsVue from './Cards/SmallCards.vue';

import { defineComponent } from 'vue'

export default defineComponent({
    setup() {


        return {

        }
    },
    components: {
        BannerVue,
        TitleVue,
        SmallCardsVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';

#Container {
    width: 90rem;
    margin: 0 auto;
}
</style>