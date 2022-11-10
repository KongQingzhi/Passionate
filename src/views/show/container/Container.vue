<template>
    <div id="Container">
        <BannerVue></BannerVue>
    </div>
</template>

<script lang="ts">
import BannerVue from './Banner/Banner.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {


        return {

        }
    },
    components: {
        BannerVue
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