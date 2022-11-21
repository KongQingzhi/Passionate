<template>
    <div id="BigCards">
        <div class="cards" :class="{ orderScroll: flagMid }">
            <div class="img">
                <img src="../../../../assets/img/交流.png" alt="">
            </div>
            <div class="cirle"></div>
            <div class="content">
                <div class="contentTitle">{{ list[0].title }}</div>
                <div class="contentCon">{{ list[0].aside }}</div>
            </div>
        </div>
        <div class="cards" :class="{ orderScroll: flagMid }">
            <div class="img">
                <img src="../../../../assets/img/玩耍.png" alt="">
            </div>
            <div class="cirle"></div>
            <div class="content">
                <div class="contentTitle">{{ list[1].title }}</div>
                <div class="contentCon">{{ list[1].aside }}</div>
            </div>
        </div>
        <div class="cards" :class="{ orderScroll: flagMid }">
            <div class="img">
                <img src="../../../../assets/img/生活.png" alt="">
            </div>
            <div class="cirle"></div>
            <div class="content">
                <div class="contentTitle">{{ list[2].title }}</div>
                <div class="contentCon">{{ list[2].aside }}</div>
            </div>
        </div>
        <div class="cards" :class="{ orderScroll: flagMid }">
            <div class="img">
                <img src="../../../../assets/img/内心.png" alt="">
            </div>
            <div class="cirle"></div>
            <div class="content">
                <div class="contentTitle">{{ list[3].title }}</div>
                <div class="contentCon">{{ list[3].aside }}</div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { getAssetsFile } from '../../../../assets/requireImg';
export default defineComponent({
    setup() {

        const list = [
            {
                title: '聊得火热',
                aside: '既要志同道合,也要兴趣同好',
            },
            {
                title: '玩得火热',
                aside: '一起探险、一起游戏，不知疲倦',
            },
            {
                title: '生活火热',
                aside: '发现更多有趣，打破生活边界，点亮精彩瞬间',
            },
            {
                title: '内心火热',
                aside: '那些现实中不曾发出的声音,请把它留在这里',
            }
        ];
        let flagMid = ref(false);
        function orderScroll(event: any) {
            if (flagMid.value == false && window.pageYOffset > 2200) {
                flagMid.value = true;
            }
        }
        onMounted(() => {
            window.addEventListener('scroll', orderScroll)
        })
        return {
            list,
            flagMid,
            orderScroll
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../assets/style.scss';

.orderScroll {
    animation: move 1s ease-in-out 0s 1 forwards;
}

@keyframes move {
    0% {
        opacity: 0;
        visibility: hidden;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
}

#BigCards {
    @include disFlex(space-around, center);
    width: 100%;
    height: 38rem;
    padding: 4.5rem 0;

    .cards {
        position: relative;
        width: 17rem;
        height: 22rem;
        border-radius: $borRadiusBig;
        background-color: #fff;
        box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.07);
        overflow: hidden;

        .img {
            @include posiAR(absolute, 0, 4.7rem);
            width: 9.3rem;
            height: 9.3rem;
            z-index: 2;
            transition: all 0.8s;

            img {
                height: 9.375rem;
            }
        }

        .cirle {
            @include posiAR(absolute, 0, 4rem);
            width: 9.4rem;
            height: 9.4rem;
            overflow: hidden;
            border-radius: 50%;
            background-color: rgb(159, 233, 218);
            transition: all 0.8s;
            z-index: 1;
        }

        .content {
            @include posiAR(absolute, 15.5rem, 0rem);
            width: 17rem;
            height: 15.5rem;
            padding: 10px 30px;
            background-color: $primaryGreen;
            border-radius: 50% 50% 0 0;
            transition: all 0.8s;
            z-index: 2;

            .contentTitle {
                height: 6.25rem;
                line-height: 6.25rem;
                text-align: center;
                letter-spacing: 0.625rem;
                font-size: 1.375rem;
                font-weight: 700;
                color: #fff;
            }

            .contentCon {
                line-height: 1.875rem;
                font-size: 1.125rem;
                letter-spacing: 0.1875rem;
                color: $primaryWhite;
                text-align: center;
            }
        }

        &:hover>.cirle {
            top: -3.125rem;
            left: 9.375rem;
            transform: scale(2);
        }

        &:hover>.content {
            border-radius: 0;
            top: 9.375rem;
        }

        &:hover>.img {
            left: 1.25rem;
        }
    }
}

@media only screen and (max-width: 420px) {
    #BigCards {
        width: 100%;
        height: 120rem;
        margin-bottom: 2rem;

        .cards {
            width: 20rem;
            height: 26rem;

            .img {
                @include posiAR(absolute, 2rem, 4.7rem);
                width: 9.5rem;
                height: 9.5em;
                z-index: 2;
                transition: all 0.8s;

                img {
                    height: 11rem;
                }
            }

            .cirle {
                @include posiAR(absolute, 0, 4rem);
                width: 10rem;
                height: 10rem;
            }

            &:hover>.cirle {
                top: -3.125rem;
                left: 12rem;
                transform: scale(2.2);
            }

            .content {
                @include posiAR(absolute, 20rem, -1rem);
                width: 22rem;
                height: 20rem;
            }

            &:hover>.content {
                border-radius: 0;
                top: 13rem;
            }
        }
    }
}
</style>