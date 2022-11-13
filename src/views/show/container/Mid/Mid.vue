<template>
    <div id="Mid">
        <div class="image">
            <img src="../../../../assets//img/向日葵.svg" alt="">
        </div>
        <div class="left">
            <div class="mask">
                <div class="top">珍惜每一个相遇的灵魂</div>
                <div class="bottom">
                    <span>享受文字尽情放飞灵魂；</span>
                    <span>世界很美,而你正好有空</span>
                </div>
            </div>
        </div>
       
        <div class="right">
            <div class="mask">
                <div class="top">铭记每一刻难忘的瞬间</div>
                <div class="bottom">
                    <span>活在云里雾里总好过活得云里雾里</span>
                    <span>生活没有剧本,每个人都有自己的活法</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
    setup() {
        const router = useRouter()
        const route = useRoute()
        function toUser() {
            router.push({
                name: 'User',
                query: {
                    ...route.query,
                },
            })
        }
        return {
            toUser
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../assets/style.scss';

#Mid {
    @include disFlex(space-around, center);
    width: 100%;
    height: 40rem;
    padding: 0 9.3rem;
    margin-bottom: 8rem;
    background-color: $primaryGreen;
    border-radius: $borRadiusBig;

    .image{
        margin:0 5rem;
    }
    .left,
    .right {
        position: relative;
        width: 12rem;
        height: 40rem;
        // background-color: $primaryWhite;
        background-color: $primaryRed;
        overflow: hidden;

        .mask {
            @include posiAR(absolute, 0, 0);
            width: 12rem;
            height: 80rem;
            padding: 0 2rem;
            transition: all 0.5s;

            .top {
                height: 40rem;
                padding: 0 2.5rem;
                font-size: 3rem;
                font-weight: 700;
                color: $primaryWhite;
                text-align: center;
            }

            .bottom {
                height: 40rem;
                padding: 10rem 0.5rem;
                color: $primaryWhite;

                span:nth-child(1) {
                    display: inline-block;
                    margin-bottom: 2.5rem;
                    font-size: 1.8rem;
                    font-weight: 700;
                    letter-spacing: 0.2rem;
                }

                span:nth-child(2) {
                    font-size: 1rem;
                    font-weight: 400;
                    letter-spacing: 0.2rem;
                }
            }
        }
    }

    .right .mask {
        top: -40rem;
    }

    .left .mask {
        top: 0rem;
    }

    &:hover {
        .right .mask {
            top: 0rem;
        }

        .left .mask {
            top: -40rem;
        }
    }




}
</style>