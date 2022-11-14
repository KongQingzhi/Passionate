<template>
    <div id="AticleMid">
        <el-col :span="24">
            <el-carousel indicator-position="outside" height="25rem">
                <el-carousel-item v-for="(items, index) in list.src" :key="index">
                    <div class="elementItems">
                        <img :src="items" alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </el-col>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeMount, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ArticleTopVue from './ArticleTop.vue'
export default defineComponent({
    props: {
        articleMid: Object
    },
    setup(props) {
        let list: any = props.articleMid;
        const router = useRouter();
        const route = useRoute();
        const User = {
            Account: '00000001@qq.com',
            Name: 'Admin',
            HeadImg: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        }

        function toComments(items: object) {
            router.push({
                name: 'ClassShowComments',
                query: {
                    ...items, ...User
                }
            })
        }
        onMounted(() => {


            // console.log(list);
        })

        return {
            toComments,
            list
        }
    },
    components: {
        ArticleTopVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';



#AticleMid {
    height: 28rem;
    margin: 0 4rem;
    padding-bottom: 3rem;

    .elementItems {
        text-align: center;
        width: 56rem;
        height: 25rem;

        img {
            height: 25rem;
            object-fit: cover;
        }
    }
}
</style>