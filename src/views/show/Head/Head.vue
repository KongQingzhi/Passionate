<template>
    <div id="header">
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

#header {
    height: 4rem;
    background-color: $primaryGreen;
}
</style>