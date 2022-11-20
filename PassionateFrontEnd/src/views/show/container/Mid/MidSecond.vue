<template>
    <div id="MidSecond">
        <div class="img">
            <img src="../../../../assets/img/拍照.svg" alt="">
        </div>
        <div class="card" @click="toUser">
            <div class="card-img">
                <p class="first">在这里，你可以记录：</p>
                <p>美食烹饪心得、美妆护肤评测；</p>
                <p>影音书观后感、旅行风光游记；</p>
                <p>住家收纳经验、手作心得教程；</p>
                <p>绘画心路历程、铲屎官人日记......</p>
            </div>
            <div class="card-info">
                <div class="card-text">
                    <p class="text-title">研究生活细节</p>
                    <p class="text-subtitle">分享美好时光</p>
                </div>
                <div class="card-icon">
                    <svg viewBox="0 0 28 25">
                        <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z">
                        </path>
                    </svg>
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

#MidSecond {
    width: 100%;
    height: 48rem;
    padding: 8rem 3.1rem;
    background-color: $primaryGreen;
    clip-path: polygon(0 0, 100% 0%, 100% 80%, 0% 100%);
    transition: all 0.3s;

    .img {
        float: left;
        width: 31rem;
        height: 31rem;

        img {
            height: 31.25rem;
        }
    }

    .card {
        position: relative;
        float: right;
        padding: 1.875rem 0;
        margin: 3.125rem 9.375rem;
        width: 18.75rem;
        height: 25rem;
        background: $primaryWhite;
        transition: box-shadow .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border-radius: $borRadiusBig;
        overflow: hidden;

        .card-img {
            position: absolute;
            padding: 1.25rem;
            height: 100%;
            width: 100%;


            .first {
                font-size: 1.375rem;
                font-weight: 700;
                color: $primaryDeepBlue;
                margin-bottom: 1.875rem;
            }

            p {
                line-height: 1.875rem;
                font-size: 1rem;
                color: $primaryDeepBlue;
            }
        }

        .card-info {
            position: absolute;
            bottom: 20px;
            @include disFlex(space-between, flex-end);
            width: 100%;
            padding: 1rem;

            .card-icon {
                opacity: 0;
                transform: translateX(-20%);
                width: 2em;
                height: 2em;
                transition: all .3s ease-in-out;

                svg {
                    width: 1.25rem;
                    height: 1.25rem;

                }
            }

            p {
                line-height: 140%;
                color: $primaryDeepBlue;
            }

            .text-title {
                font-weight: 900;
                font-size: 1.125rem;

            }

            .text-subtitle {
                font-weight: 500;
                font-size: 1rem;
            }

        }

        &:hover .card-icon {
            opacity: 1;
            transform: translateX(20%);
        }
    }

    &:hover {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
}

@media only screen and (max-width: 420px) {
    #MidSecond {
        height: 68rem;
        clip-path: polygon(0 0, 100% 0%, 100% 95%, 0% 100%);

        .img {
            width: 10rem;
            height: 10rem;

            img {
                height: 20rem;
            }
        }

        .card {
           @include posiAR(relative,12rem,7rem,)
        }
    }
}
</style>