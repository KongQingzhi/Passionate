<template>
    <div id="Fans">
        <div class="focusElement" v-for="(items, index) in fansList">
            <ArticleTopVue :articleTop="items">
                <button class="elementTopFocus" @click="addFans(items)">
                    <div class="FocusContent">
                        <i class="bi bi-plus-lg"></i>
                        <span>回 关</span>
                    </div>
                </button>
            </ArticleTopVue>
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
        const User = route.query;
        const fansList = ref(null)

        function selectFans() {
            api.selectFans({ UserAccounted: User.UserAccount }).then(res => {
                const data = res.data;
                fansList.value = data;

            })
        }

        function addFans(items: any) {

        }

        onMounted(() => {
            selectFans()
        })

        return {
            fansList,
            addFans
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
</style>