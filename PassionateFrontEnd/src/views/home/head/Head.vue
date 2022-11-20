<template>
    <div id="Head">
        <NavVue></NavVue>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavVue from './Nav.vue';
export default defineComponent({
    setup() {


        return {}
    },
    components: {
        NavVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';

#Head {
    width: 100vw;
    height: 4rem;
    background-color: $primaryGreen;
}

@media only screen and (max-width: 420px) {
    #Head {
        width: 100%;
    }
}
</style>