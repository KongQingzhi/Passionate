<template>
    <div id="SmallCards" :class="{ orderScroll: flag }" @scroll="orderScroll($event)">
        <div class="boxContent" v-for="(items, index) in box">
            <div class="img"><img :src="items.src" alt="" height="100"></div>
            <div class="boxContentTitle">{{ items.title }}</div>
            <div class="boxContentAside">{{ items.aside }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'

export default defineComponent({
    setup() {
        let flag = ref(false);
        interface ICards {
            src: string,
            title: string,
            aside: string
        }
        const box: ICards[] = [
            {
                src: '/src/assets/img/风景.svg',
                title: '风景',
                aside: '分享随手拍到的风景，足不出户也可一日千里。'
            },
            {
                src: '/src/assets/img/交友.svg',
                title: '交友',
                aside: '与兴趣相投的人交流，分享自己的内心想法。'
            },
            {
                src: '/src/assets/img/旅行.svg',
                title: '旅行',
                aside: '来一段说走就走的旅行，分享您所看到的异域风光。'
            },
            {
                src: '/src/assets/img/聚会.svg',
                title: '聚会',
                aside: '记录和最亲近的家人、朋友的每一次的聚会。'
            }
        ]

        function orderScroll(event: any) {
            if (flag.value == false && window.pageYOffset > 400) {
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
</style>