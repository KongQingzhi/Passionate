<template>

    <div id="show">
        <HeadVue></HeadVue>
        <ContainerVue></ContainerVue>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeadVue from './Head/Head.vue';
import ContainerVue from './container/Container.vue';
export default defineComponent({
    setup() {


        return {}
    },
    components: {
        HeadVue,
        ContainerVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';

#show {
    width: 100vw;
    height: 100vh;
}
</style>