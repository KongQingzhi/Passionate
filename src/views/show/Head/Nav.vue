<template>
    <div id="Nav">
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

#Nav {
    @include disFlex(space-between, center);
    width: 90rem;
    height: 4rem;
    margin: auto;
    background-color: $primaryGreen;
}

// @media only screen and (max-width: 1200px) {}

// @media only screen and (max-width: 992px) {}

// @media only screen and (max-width: 768px) {
//     #Nav {
//         background-color: #000;
//     }
// }

// @media only screen and (max-width: 520px) {}

// @media only screen and (max-width: 420px) {}
</style>