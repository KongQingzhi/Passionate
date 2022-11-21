<template>
    <div id="Banner">
        <BannerLeftVue></BannerLeftVue>
        <BannerRightVue></BannerRightVue>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BannerLeftVue from './BannerLeft.vue';
import BannerRightVue from './BannerRight.vue';
export default defineComponent({
    setup() {
        return {}
    },
    components: {
        BannerLeftVue,
        BannerRightVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../assets/style.scss';

#Banner {
    @include disFlex(space-between, center);
    // width: 90rem;
    // height: 40rem;
    padding: 3rem 0;
    margin-bottom: 5rem;
}

@media only screen and (max-width: 420px) {
    #Banner {
        width: 100%;
        padding: 1rem 0;
        // margin-bottom: 2rem;
    }
}
</style>