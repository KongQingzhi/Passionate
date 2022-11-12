<template>
    <div id="Main">
        <AsideVue></AsideVue>
        <ContainerVue></ContainerVue>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AsideVue from './aside/Aside.vue';
import ContainerVue from './container/Container.vue';
export default defineComponent({
    setup() {


        return {}
    },
    components: {
        AsideVue,
        ContainerVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';

#Main {
    display: flex;
    justify-content: space-between;
    width: 90rem;
    margin: 4rem auto 0;
    padding: 2rem;
    // background-color: blueviolet;
    border: 1px solid #000;
}
</style>