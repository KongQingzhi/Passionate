<template>
    <div id="SmallCards" :class="{ orderScroll: flag }" @scroll="orderScroll($event)">
        <div class="boxContent">
            <div class="img"><img src="../../../../assets/img/风景.png" alt="" height="100"></div>
            <div class="boxContentTitle">{{ box[0].title }}</div>
            <div class="boxContentAside">{{ box[0].aside }}</div>
        </div>
        <div class="boxContent">
            <div class="img"><img src="../../../../assets/img/交友.png" alt="" height="100"></div>
            <div class="boxContentTitle">{{ box[1].title }}</div>
            <div class="boxContentAside">{{ box[1].aside }}</div>
        </div>
        <div class="boxContent">
            <div class="img"><img src="../../../../assets/img/旅行.png" alt="" height="100"></div>
            <div class="boxContentTitle">{{ box[2].title }}</div>
            <div class="boxContentAside">{{ box[2].aside }}</div>
        </div>
        <div class="boxContent">
            <div class="img"><img src="../../../../assets/img/聚会.png" alt="" height="100"></div>
            <div class="boxContentTitle">{{ box[3].title }}</div>
            <div class="boxContentAside">{{ box[3].aside }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { getAssetsFile } from '../../../../assets/requireImg';
export default defineComponent({
    setup() {
        let flag = ref(false);
        interface ICards {
            title: string,
            aside: string
        }
        const box: ICards[] = [
            {
                title: '风景',
                aside: '分享随手拍到的风景，足不出户也可一日千里。'
            },
            {
                title: '交友',
                aside: '与兴趣相投的人交流，分享自己的内心想法。'
            },
            {
                title: '旅行',
                aside: '来一段说走就走的旅行，分享您所看到的异域风光。'
            },
            {
                title: '聚会',
                aside: '记录和最亲近的家人、朋友的每一次的聚会。'
            }
        ]

        function orderScroll(event: any) {
            if (flag.value == false && window.pageYOffset > 900) {
                flag.value = true;
            }
        }

        onMounted(() => {
            window.addEventListener('scroll', orderScroll)
        })

        return { box, flag, orderScroll }
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
        transform: translateY(1.875rem);
    }

    100% {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
}


#SmallCards {
    opacity: 0;
    @include disFlex(space-around, center);
    width: 90rem;
    height: 9.5rem;
    margin-bottom: 8rem;

    .boxContent {
        position: relative;
        width: 20rem;
        height: 9.5rem;
        background-color: #fff;
        border-radius: $borRadiusBig;
        transition: all 0.3s;
        box-shadow: 0.0625rem 0.0625rem 1.25rem 0.0625rem rgba(0, 0, 0, 0.05);

        .img {
            @include posiAR(absolute, 0.625rem, 1.7rem);
        }


        .boxContentTitle {
            @include posiAR(absolute, 1.25rem, 9.4rem);
            width: 9.4rem;
            height: 1.875rem;
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.875rem;
        }

        .boxContentAside {
            @include posiAR(absolute, 4rem, 9.4rem);
            width: 9.4rem;
        }
    }

    .boxContent:hover {
        transform: translateY(-0.625rem);
        box-shadow: 0.0625rem 0.0625rem 1.25rem 0.0625rem rgba(0, 0, 0, 0.05);
    }
}


@media only screen and (max-width: 420px) {
    #SmallCards {
        width: 100%;
        height: 45rem;
        margin-bottom: 2rem;

        .boxContent {
            width: 13rem;
            height: 20rem;

            .img {
                @include posiAR(absolute, 0.625rem, 1rem);
            }

            .boxContentTitle {
                @include posiAR(absolute, 10rem, 5rem);
            }

            .boxContentAside {
                @include posiAR(absolute, 13rem, 2rem);
                width: 10rem;
            }
        }

    }
}
</style>