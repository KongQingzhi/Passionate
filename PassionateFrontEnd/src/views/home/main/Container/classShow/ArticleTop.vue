<template>
    <div id="AticleTop">
        <div class="elementTopUser">
            <div class="elementTopUserHeadImg">
                <img :src="list.UserHeadImg" alt="">
            </div>
            <div class="elementTopUserInfo">
                <div class="elementTopUserName">{{ list.UserName }}</div>
                <div class="elementTopUserAccount">{{ list.UserAccount }}</div>
            </div>
        </div>
        <slot>
            <div v-if="textFocus">
                <button class="elementTopFocus" @click="deleteFocus">
                    <div style="background-color: #f75652;" class="FocusContent">
                        <i class="bi bi-trash-fill"></i>
                        <span>取消关注</span>
                    </div>
                </button>
            </div>
            <div v-else>
                <button class="elementTopFocus" @click="addFocus">
                    <div class="FocusContent">
                        <i class="bi bi-plus-lg"></i>
                        <span>关 注</span>
                    </div>
                </button>
            </div>
        </slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeMount, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import api from '../../../../../axios/api';
export default defineComponent({
    props: {
        articleTop: Object
    },
    setup(props) {
        let list: any = props.articleTop;
        const router = useRouter();
        const route = useRoute();
        const User: any = sessionStorage;
        const textFocus = ref<boolean>(false);
        function toComments(items: object) {
            router.push({
                name: 'ClassShowComments',
                query: {
                    ...items, ...User
                }
            })
        }

        function selectFocus() {
            api.selectFocus({ UserAccount: User.UserAccount, UserAccounted: list.UserAccount }).then(res => {
                const data = res.data;
                if (data) {
                    textFocus.value = true;
                } else {
                    textFocus.value = false;
                }
            })
        }

        function addFocus() {
            api.addFocus({ UserAccount: User.UserAccount, UserAccounted: list.UserAccount }).then(res => {
                selectFocus();
            })
        }

        function deleteFocus() {
            api.deleteFocus({ UserAccount: User.UserAccount, UserAccounted: list.UserAccount }).then(res => {
                selectFocus();
            })
        }

        onMounted(() => {
            selectFocus()
        })

        return {
            toComments,
            addFocus,
            deleteFocus,
            textFocus,
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

@media only screen and (max-width: 420px) {
    #AticleTop {
        .elementTopUser {
            width: 18rem;
            .elementTopUserHeadImg{
                margin-right: 0.5rem;
            }
        }
    }
}
</style>