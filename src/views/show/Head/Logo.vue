<template>
    <div id="Logo">
        <img src="../../../assets/img/logo.png" alt="">
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

#Logo {
    @include posiAR(relative, 0, 0);
    width: 12.5rem;
    height: 3rem;
    border-radius: $borRadiusSmall;
    overflow: hidden;

    img {
        width: 3rem;
    }

    h1 {
        @include posiAR(absolute, 1rem, 1.85rem);
        font-size: 1.75rem;
        color: $primaryWhite;

        i:first-child {
            color: $primaryBlue;
        }
    }
}

@media only screen and (max-width: 1200px) {}

@media only screen and (max-width: 992px) {}

@media only screen and (max-width: 768px) {}

@media only screen and (max-width: 520px) {}

@media only screen and (max-width: 420px) {}
</style>