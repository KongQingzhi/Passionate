<template>
    <div id="Main">
        <AsideVue class="asideVue"></AsideVue>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import AsideVue from './aside/Aside.vue';
export default defineComponent({
    setup() {
        // let top = ref(0);
        // function orderScroll() {
        //     top.value = window.pageYOffset + 150;
        // }
        // onMounted(() => {
        //     window.addEventListener('scroll', orderScroll)
        // })

        return {
            // top
        }
    },
    components: {
        AsideVue,
    },

})
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';

#Main {
    position: relative;
    width: 90rem;
    margin: 4rem auto 0;
    padding: 2rem 0;


    .asideVue {
        position: fixed;
        top: 8rem;
    }

    .container {
        width: 70rem;
        padding: 0 3rem;
        margin-left: 12rem;
    }
}

@media only screen and (max-width: 420px) {
    #Main {
        width:30rem;
        margin:3rem auto 0;

        .container {
            width: 28rem;
            padding: 0 0rem;
            margin-left: 0rem;
        }
    }
}
</style>