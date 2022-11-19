<template>
    <div id="Comments">
        <ArticleTopVue :articleTop="list"></ArticleTopVue>
        <div class="content">
            <div class="indexFloor">{{ indexFloorName }}</div>
            <div class="text">{{ list.CommentsContent }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, onBeforeMount, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import api from '../../../../../axios/api';
import ArticleTopVue from './ArticleTop.vue'
export default defineComponent({
    props: {
        commentsInfo: Object,
        indexFloor: Number
    },
    setup(props) {
        const list: any = props.commentsInfo;
        const indexFloor: any = props.indexFloor;
        const router = useRouter();
        const route = useRoute();

        onMounted(() => {
            list
        })

        const indexFloorName = computed(() => {
            if (indexFloor == 0) {
                return '沙发';
            } else {
                return `${indexFloor + 1}楼`
            }
        });

        return {
            list,
            indexFloor,
            indexFloorName
        }
    },
    components: {
        ArticleTopVue
    },

})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#Comments {
    width: 64rem;
    padding: 1rem 4rem;
    background-color: #fff;
    border-radius: $borRadiusBig;
    margin-bottom: 1rem;
    box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.07);

    .content {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 1rem 1.5rem;
        border-radius: $borRadiusBig;
        border: 2px solid #f3f3f3;
        margin-bottom: 1rem;

        .indexFloor {
            @include posiAR(absolute, -0.8rem, 1m);
            height: 1rem;
            background-color: #fff;
            font-size: 1rem;
            color: $primaryRed;
            text-align: center
        }

        .text {
            font-size: 1rem;
        }
    }
}
</style>