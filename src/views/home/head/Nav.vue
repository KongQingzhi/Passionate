<template>
    <div id="Nav">
        <LogoVue></LogoVue>
        <ClassListVue></ClassListVue>
        <UserVue></UserVue>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoVue from '../../show/head/Logo.vue';
import ClassListVue from './ClassList.vue';
import UserVue from './User.vue';
export default defineComponent({
    setup() {
        return {}
    },
    components: {
        LogoVue,
        ClassListVue,
        UserVue
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
</style>