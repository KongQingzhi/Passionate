<template>
    <div id="MidThird">
        <div class="box">
            <div class="title">
                <span>Life is hot because of</span>
                <span>&nbsp;</span>
                <span>y</span>
                <span>o</span>
                <span>u</span>
                <div class="mask"></div>
            </div>
            <div class="boxCon">生活不仅是活着，还需要一点仪式感</div>
            <div class="boxBot">
                这种认真的生活态度，是感受幸福的条件
            </div>
        </div>
        <div class="img">
            <img src="../../../../assets/img/办公.svg">
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

#MidThird {
    width: 100%;
    height: 40rem;
    @include disFlex(space-between, center);
    padding: 0 3.5rem;
    background-color: $primaryGreen;
    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
    transition: all 0.3s;

    &:hover {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }

    .img {
        img {
            height: 31.25rem;
        }
    }

    .box {
        width: 31.25rem;
        height: 31.25rem;
        padding: 6.25rem 0px;

        .title {
            position: relative;
            font-size: 3.125rem;
            font-weight: 700;
            color: $primaryWhite;

            .mask {
                @include posiAR(absolute, 4.375rem, 10rem);
                width: 10rem;
                height: 4rem;
                border-left: 0.625rem solid #fff;
                background-color: $primaryGreen;
                animation: curse 4s steps(1) 0s infinite;
            }
        }

        @keyframes curse {
            0% {
                left: 3.75rem;
            }

            5% {
                border-color: transparent;
            }

            10% {
                border-color: $primaryWhite;
            }

            15% {
                border-color: transparent;
            }

            20% {
                border-color: $primaryWhite;
            }

            25% {
                left: 6rem;
            }

            30% {
                border-color: $primaryWhite;
            }

            35% {
                border-color: transparent;
            }

            40% {
                border-color: $primaryWhite;
            }

            50% {
                left: 8rem;
            }

            55% {
                border-color: transparent;
            }

            60% {
                border-color: $primaryWhite;
            }

            65% {
                border-color: transparent;
            }

            70% {
                border-color: $primaryWhite;
            }

            75% {
                left: 10rem;
            }

            80% {
                border-color: $primaryWhite;
            }

            85% {
                border-color: transparent;
            }

            90% {
                border-color: $primaryWhite;
            }

            100% {
                left: 10rem;
            }
        }

        .boxCon {
            margin-top: 3.75rem;
            font-size: 1.75rem;
            font-weight: 700;
            color: $primaryWhite;
        }

        .boxBot {
            margin-top: 10px;
            font-size: 1.5rem;
            color: $primaryWhite;
        }
    }
}

@media only screen and (max-width: 420px) {
    #MidThird {
        height: 50rem;
        clip-path: polygon(0 5%, 100% 0, 100% 100%, 0% 100%);
        padding: 0 1rem;

        .box {
            width: 100%;
            height: 25rem;
            padding: 6.25rem 0px;

            .title {
                position: relative;
                font-size: 3.0122rem;
            }

            .boxCon {
                margin-top: 3.75rem;
                font-size: 1.75rem;
                font-weight: 700;
                color: $primaryWhite;
            }

            .boxBot {
                margin-top: 10px;
                font-size: 1.5rem;
                color: $primaryWhite;
            }
        }

        .img {
            img {
                height: 20rem;
            }
        }


    }
}
</style>