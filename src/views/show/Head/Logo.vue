<template>
    <div id="logo">
        <img src="../../../assets/img/logo.png" width="48" alt="">
        <h1><i>a</i><i>ssionate</i></h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    }
})
</script >

<style lang="scss" scoped>
@import '../../../assets/style.scss';

#logo {
    @include posiAR(relative, 0, 0);
    // @include disFlex(space-between,center);
    width: 20rem;
    height: 3rem;
    // background-color: blue;
    border-radius: $borRadiusSmall;
    overflow: hidden;

    img {
        width: 3rem;
    }

    h1 {
        @include posiAR(absolute, 1rem, 1.85rem);
        font-size: 28px;
        color: $primaryWhite;

        i:first-child {
            color: $primaryBlue;
        }
    }
}
</style>