<template>
    <div id="AticleTop">
        <div class="elementTopUser">
            <div class="elementTopUserHeadImg">
                <img :src="list.headImg" alt="">
            </div>
            <div class="elementTopUserInfo">
                <div class="elementTopUserName">{{ list.name }}</div>
                <div class="elementTopUserAccount">{{ list.account }}</div>
            </div>
        </div>
        <button class="elementTopFocus">
            <div class="FocusContent">
                <i class="bi bi-plus-lg"></i>
                <span>关 注</span>
            </div>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeMount, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
    props: {
        articleTop: Object
    },
    setup(props) {
        let list: any = props.articleTop;
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

        return {
            toComments,
            list
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#AticleTop {
    height: 5rem;
    margin-bottom: 1rem;
    @include disFlex(space-between, center);

    .elementTopUser {
        width: 20rem;
        @include disFlex(flex-start, center);

        .elementTopUserHeadImg {
            width: 4rem;
            height: 4rem;
            border-radius: 2rem;
            margin-right: 1rem;
            overflow: hidden;

            img {
                width: 4rem;
                height: 4rem;
                object-fit: cover;
            }
        }

        .elementTopUserInfo {
            height: 4rem;
            margin-left: 0.5rem;
            max-width: 15rem;
            overflow: hidden;

            .elementTopUserName {
                font-size: 1.3rem;
                font-weight: 700;
                line-height: 2.5rem;
            }

            .elementTopUserAccount {
                font-size: 1rem;
                line-height: 1.5rem;
            }
        }
    }

    .elementTopFocus {
        overflow: hidden;
        cursor: pointer;

        .FocusContent {
            width: 11.25rem;
            height: 2.5rem;
            transform: translateX(-5.625rem);
            transition: all 0.3s;

            i,
            span {
                display: inline-block;
                width: 5.625rem;
                height: 2.5rem;
            }

            i {
                font-size: 1.5rem;
                vertical-align: middle;
            }

            &:hover {
                transform: translateX(0);
            }
        }

    }
}
</style>