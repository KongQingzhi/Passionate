<template>
    <div id="Nav">
        <LogoVue class="Logo"></LogoVue>
        <ClassListVue></ClassListVue>
        <router-link :to="{ name: 'Information' }">
            <UserVue></UserVue>
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoVue from '../../show/head/Logo.vue';
import Information from '../main/Container/interaction/Information.vue';
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

@media only screen and (max-width: 420px) {
    #Nav {
        width: 30rem;
    }
    .Logo{
        display: none;
    }
}
</style>