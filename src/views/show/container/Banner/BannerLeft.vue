<template>
    <div id="BannerLeft">
        <img src="../../../../assets/img/飞行.svg" alt="">
        <div class="circle">
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {


        return {}
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../assets/style.scss';

#BannerLeft {
    @include posiAR(relative, 0rem, 0rem);
    width: 42rem;
    height: 30rem;
    background-color: $primaryRed;
    border-radius: $borRadiusBig;
    text-align: center;
    overflow: hidden;
    transition: all 1s;

    img {
        @include posiAR(absolute, 13rem, 18rem);
        width: 22rem;
        transition: all 1s;
    }

    .circle {
        @include posiAR(absolute, 3rem, 5rem);
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        background-color: $primaryDeepYellow;
        transition: all 1s;

        div {
            @include posiAR(absolute, 0rem, 0rem);
            color: $primaryRed;
        }

        &>div:nth-child(1) {
            @include posiAR(absolute, -5rem, 5rem);
        }

        &>div:nth-child(2) {
            @include posiAR(absolute, 12rem, 9rem);
        }

        &>div:nth-child(3) {
            @include posiAR(absolute, 10rem, -2rem);
        }

        &>div:nth-child(4) {
            @include posiAR(absolute, 4rem, -6rem);
        }

        &>div:nth-child(5) {
            @include posiAR(absolute, 2rem, -16rem);
        }

        &>div:nth-child(6) {
            @include posiAR(absolute, -2rem, -17rem);
        }

        &>div:nth-child(7) {
            @include posiAR(absolute, 0rem, 10rem);
        }


        &>div:nth-child(8) {
            @include posiAR(absolute, 3rem, -3rem);
        }

        &>div:nth-child(9) {
            @include posiAR(absolute, -3rem, -4rem);
        }

        &>div:nth-child(10) {
            @include posiAR(absolute, 4rem, 8rem);
        }
    }

    &:hover>img {
        @include posiAR(absolute, 10rem, 2rem);
    }

    &:hover>.circle {
        @include posiAR(absolute, 6rem, 26rem);
        background-color: $primaryYellow;
    }

    &:hover>.circle div {
        color: $primaryYellow;
    }

    &:hover {
        background-color: $primaryDeepBlue;
    }
}
</style>