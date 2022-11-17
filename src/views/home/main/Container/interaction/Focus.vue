<template>
    <div id="Focus">
        <div v-if="focusList.length == 0" class="tipTitle">您还没有关注他人哦，快去发现其他有趣的灵魂吧!</div>
        <div class="container" v-else>
            <div class="focusElement" v-for="(items, index) in focusList">
                <div id="AticleTop">
                    <div class="elementTopUser">
                        <div class="elementTopUserHeadImg">
                            <img :src="items.UserHeadImg" alt="">
                        </div>
                        <div class="elementTopUserInfo">
                            <div class="elementTopUserName">{{ items.UserName }}</div>
                            <div class="elementTopUserAccount">{{ items.UserAccount }}</div>
                        </div>
                    </div>
                    <button style="background-color: #f75652;" class="elementTopFocus" @click="deleteFocus(items)">
                        <div class="FocusContent">
                            <i class="bi bi-trash-fill"></i>
                            <span>取消关注</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from 'vue'
import ArticleTopVue from '../classShow/ArticleTop.vue';
import api from '../../../../../axios/api';
import { useRouter, useRoute } from 'vue-router'
import { nextTick } from 'vue'
export default defineComponent({

    setup() {
        const router = useRouter()
        const route = useRoute()
        const User: any = sessionStorage;
        let focusList = ref<any>([]);

        function selectFocus() {
            console.log(1);
            api.selectAllFocus({ UserAccount: User.UserAccount }).then(res => {
                console.log(2);
                const data = res.data;
                focusList.value = data;
                console.log(data);
            })
        }

        function deleteFocus(items: any) {
            api.deleteFocus({ UserAccount: User.UserAccount, UserAccounted: items.UserAccount }).then(res => {
                selectFocus()
            })
        }
        onMounted(() => {
            selectFocus()
        })
        return {
            focusList,
            deleteFocus
        }
    },
    components: {
        ArticleTopVue,
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#Focus {
    width: 64rem;


    .tipTitle {
        line-height: 10rem;
        font-size: 1.2rem;
        font-weight: 700;
        color: $primaryGreen;
    }

    .container {
        display: flex;
        flex-wrap: wrap;

        .focusElement {
            width: 30rem;
            margin: 0 0 1rem 2rem;
            padding: 2rem 2rem 1rem;
            background-color: #fff;
            border-radius: $borRadiusBig;
            box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.07);

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
        }
    }

}
</style>