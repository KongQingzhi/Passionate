<template>
    <div id="nav">
        <LogoVue></LogoVue>
        <NavListVue></NavListVue>
        <ButtonVue></ButtonVue>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoVue from './Logo.vue';
import NavListVue from './NavList.vue'
import ButtonVue from './Button.vue';
export default defineComponent({
    setup() {


        return {}
    },
    components: {
        LogoVue,
        NavListVue,
        ButtonVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';

#nav {
    @include disFlex(space-between, center);
    width: 90rem;
    height: 4rem;
    margin: auto;
    background-color: $primaryGreen;
}
</style>