<template>
    <div id="Fans">
        <div v-if="fansList == 0" class="tipTitle">
            您还没有粉丝哦，快去发布作品，让更多的人看到你吧！
        </div>
        <div class="container" v-else>
            <div class="focusElement" v-for="(items, index) in fansList">
                <ArticleTopVue  :articleTop="items">
                    <button class="elementTopFocus" @click="myFans(items)">
                        <div class="FocusContent">
                            <i class="bi bi-plus-lg"></i>
                            <span>{{ items.reFocus }}</span>
                        </div>
                    </button>
                </ArticleTopVue>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import ArticleTopVue from '../classShow/ArticleTop.vue';
import { useRouter, useRoute } from 'vue-router'
import api from '../../../../../axios/api';
export default defineComponent({
    setup() {
        const router = useRouter()
        const route = useRoute()
        const User: any = sessionStorage;
        const fansList: any = ref(null)

        function selectFans() {
            api.selectFans({ UserAccount: User.UserAccount }).then(res => {
                const data = res.data;
                fansList.value = data;
            })
        }

        function myFans(items: any) {
            if (items.reFocus == '回 关') {
                api.addFocus({ UserAccount: User.UserAccount, UserAccounted: items.UserAccount }).then(res => {
                    selectFans()
                })
            } else {
                api.deleteFocus({ UserAccount: User.UserAccount, UserAccounted: items.UserAccount }).then(res => {
                    selectFans()
                })
            }
        }

        onMounted(() => {
            if (sessionStorage.getItem('UserAccount') == undefined) {
                router.push({
                    name: 'Login'
                })
            }
            selectFans()
        })

        return {
            fansList,
            myFans
        }
    },
    components: {
        ArticleTopVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#Fans {
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

@media only screen and (max-width: 420px) {
    #Fans {
        width: 28rem;

        .container {
            .focusElement {
                padding: 1rem 1rem 0 1rem;
            }

            .elementTopFocus {
                width: 5.6rem;
            }
        }
    }
}
</style>