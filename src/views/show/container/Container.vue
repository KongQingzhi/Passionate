<template>
    <div id="Container">
        <BannerVue></BannerVue>
        <TitleVue></TitleVue>
        <MidVue></MidVue>
        <SmallCardsVue></SmallCardsVue>
        <MidSecondVue></MidSecondVue>
        <BigCardsVue></BigCardsVue>
        <MidThirdVue></MidThirdVue>
        <FooterVue></FooterVue>
    </div>
</template>

<script lang="ts">
import BannerVue from './Banner/Banner.vue';
import TitleVue from './Title/Title.vue';
import SmallCardsVue from './Cards/SmallCards.vue';
import BigCardsVue from './Cards/BigCards.vue';
import MidVue from './Mid/Mid.vue';
import MidSecondVue from './Mid/MidSecond.vue';
import MidThirdVue from './Mid/MidThird.vue';
import FooterVue from './Footer/Foot.vue';

import { defineComponent } from 'vue'

export default defineComponent({
    setup() {


        return {

        }
    },
    components: {
        BannerVue,
        TitleVue,
        SmallCardsVue,
        MidVue,
        BigCardsVue,
        MidSecondVue,
        MidThirdVue,
        FooterVue
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