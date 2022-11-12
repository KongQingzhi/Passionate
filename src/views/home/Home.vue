<template>
    <div id="Home">
        <HeadVue class="HeadVue"></HeadVue>
        <MainVue></MainVue>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeadVue from './head/Head.vue';
import MainVue from './main/Main.vue';
export default defineComponent({
    setup() {


        return {}
    },
    components: {
        HeadVue,
        MainVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';

#Home {
    width: 100vw;

    .HeadVue {
        position: fixed;
        top: 0;

    }
}
</style>