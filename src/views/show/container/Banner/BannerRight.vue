<template>
    <div id="BannerRight">
        <h1 class="title">{{ title }}</h1>
        <h1 class="aside">{{ aside }}</h1>
        <button class="btn">
            <div class="maskpad"></div>
            <span>Get it!</span>
        </button>
        <div class="mask"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

        const title = 'And line and see and calm, and listen and forget and with the wind.'
        const aside = 'Life is hot because of you.'
        return {
            title,
            aside
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../assets/style.scss';

#BannerRight {
    width: 42rem;
    height: 30rem;
    padding: 1.5rem 0;

    .title {
        line-height: 5.5rem;
        font-weight: 900;
        font-size: 3.5rem;
        color: $primaryRed;
        font-family: 'Anton', sans-serif;
    }

    .aside {
        margin-top: 1rem;
        line-height: 4.5rem;
        font-weight: 700;
        font-size: 2.5rem;
        letter-spacing: 0.5rem;
        color: $primaryDeepBlue;
        font-family: 'Lobster', cursive;
    }

    .btn {
        @include posiAR(relative, 0, 0);
        width: 11.3rem;
        height: 3.7rem;
        margin-top: 2rem;
        background-color: #fff;
        border-radius: 0;
        border: 0.25rem solid $primaryRed;
        overflow: hidden;
        transition: all 0.3s;

        .maskpad {
            @include posiAR(absolute, -2.5rem, -2rem);
            width: 16rem;
            height: 1px;
            padding: 0;
            transform: rotateZ(-17deg);
            transition: all 0.3s;
            z-index: 0;
            background-color: $primaryGreen;
        }

        span {
            @include posiAR(absolute, 0.5rem, 3rem);
            z-index: 15;
            transition: all 0.3s;
            color: $primaryGreen;
            font-family: 'Anton', sans-serif;
            font-size: 2rem;
        }

        &:hover .maskpad {
            height: 8rem;
        }

        &:hover span {
            color: $primaryRed;
        }
    }

    .mask {
        @include posiAR(relative, -3.4rem, 0.3rem);
        z-index: -1;
        width: 11.3rem;
        height: 3.7rem;
        background-color: $primaryGreen;
        transition: all 0.3s;
    }

    .btn:hover~.mask {
        @include posiAR(relative, -3.6rem, 0rem);
    }

    .btn:active {
        transform: translateY(0.1rem);
    }
}
</style>