<template>
    <div id="Title">
        <h1 class="title">
            <span class="titleCon">{{ title[0] }}</span>
            <div class="scrolldown" style="--color: skyblue" @click="toBottom">
                <div class="chevrons">
                    <div class="chevrondown"></div>
                    <div class="chevrondown"></div>
                </div>
            </div>
            <span class="titleCon">{{ title[1] }}</span>
        </h1>

        <div class="button">
            <div class="box" v-for="items in button">{{ items }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const title: string[] = ['研究生活细节', '分享美好时光'];
        const button: string = 'PASSIONATE---火热';
        function toBottom(): void {
            document.documentElement.scrollTop = 905;
        }
        return {
            title,
            button,
            toBottom
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../assets/style.scss';

#Title {
    width: 100%;
    height: 30rem;

    .title {
        @include disFlex(space-around, center);
        width: 100%;
        height: 10rem;
        font-size: 55px;
        color: $primaryDeepBlue;

        .titleCon {
            letter-spacing: 15px;
        }

        .scrolldown {
            @include posiAR(relative, 0, 0);
            width: 2rem;
            height: 3.5rem;
            border: .1875rem solid $primaryRed;
            border-radius: 2rem;
            margin-top: 4rem;
            cursor: pointer;


            .chevrons {
                padding: .375rem 0 0 0;
                margin-left: -0.1875rem;
                margin-top: 3.5rem;
                width: 2rem;
                display: flex;
                flex-direction: column;
                align-items: center;


                .chevrondown {
                    border: solid $primaryRed;
                    border-width: 0 .1875rem .1875rem 0;
                    display: inline-block;
                    width: 0.625rem;
                    height: 0.625rem;
                    transform: rotate(45deg);
                }

                .chevrondown:nth-child(odd) {
                    animation: pulse54012 500ms ease infinite alternate;
                }

                .chevrondown:nth-child(even) {
                    animation: pulse54012 500ms ease infinite alternate 250ms;
                }

                @keyframes pulse54012 {
                    from {
                        opacity: 0;
                    }

                    to {
                        opacity: 0.5;
                    }
                }
            }
        }

        .scrolldown::before {
            content: "";
            position: absolute;
            bottom: 1.875rem;
            left: 50%;
            width: 0.375rem;
            height: 0.375rem;
            margin-left: -0.1875rem;
            background-color: $primaryRed;
            border-radius: 100%;
            animation: scrolldown-anim 2s infinite;
            box-shadow: 0 -0.3125rem .1875rem .0625rem #2a547066;
        }

        @keyframes scrolldown-anim {
            0% {
                opacity: 0;
                height: 6px;
            }

            40% {
                opacity: 1;
                height: 10px;
            }

            80% {
                transform: translate(0, 20px);
                height: 0.625rem;
                opacity: 0;
            }

            100% {
                height: 0.8175rem;
                opacity: 0;
            }
        }
    }

    .button {
        display: flex;
        margin: 6.25rem auto;
        border-radius: $borRadiusBig;
        overflow: hidden;

        .box {
            width: 6rem;
            height: 6.25rem;
            @include disFlex(center, center);
            font-size: 1.875rem;
            font-weight: 700;
            color: $primaryWhite;
            transition: all .8s;
            cursor: pointer;
            position: relative;
            background-color: $primaryRed;
            overflow: hidden;
        }

        .box:before {
            content: "且";
            @include posiAR(absolute, 0, 0);
            background: $primaryGreen;
            width: 100%;
            height: 100%;
            @include disFlex(center, center);
            transform: translateY(100%);
            transition: transform .4s;
        }

        .box:nth-child(2)::before {
            transform: translateY(-100%);
            content: '行';
        }

        .box:nth-child(3)::before {
            content: '且';
        }

        .box:nth-child(4)::before {
            transform: translateY(-100%);
            content: '看';
        }

        .box:nth-child(5)::before {
            content: '且';
        }

        .box:nth-child(6)::before {
            transform: translateY(-100%);
            content: '从';
        }

        .box:nth-child(7)::before {
            content: '容';
        }

        .box:nth-child(8)::before {
            transform: translateY(-100%);
            content: ',';
        }

        .box:nth-child(9)::before {
            content: '且';
        }

        .box:nth-child(10)::before {
            transform: translateY(-100%);
            content: '听';
        }

        .box:nth-child(11)::before {
            content: '且';
        }

        .box:nth-child(12)::before {
            transform: translateY(-100%);
            content: '忘';
        }

        .box:nth-child(13)::before {
            content: '且';
        }

        .box:nth-child(14)::before {
            transform: translateY(-100%);
            content: '随';
        }

        .box:nth-child(15)::before {
            content: '风';
        }


    }

    .button:hover .box:before {
        transform: translateY(0);
    }
}
</style>