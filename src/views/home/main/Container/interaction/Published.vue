<template>
    <div id="Published">
        <div class="publishedElement" v-for="(items, index) in publishedList" :key="index">
            <div class="publishedTop">
                <div class="publishedTopLeft">{{ items.ArticleClass }}</div>
                <button style="background-color: #f75652;" class="publishedTopRight"
                    @click="deletePublished(items.ArticleId, index)">
                    <div class="FocusContent">
                        <i class="bi bi-trash-fill"></i>
                        <span>删除发布</span>
                    </div>
                </button>
            </div>
            <div class="publishedBottom">
                <AticleMidVue :articleMid="items"></AticleMidVue>
                <AticleBottomVue :articleBottom="items"></AticleBottomVue>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import AticleMidVue from '../classShow/AticleMid.vue'
import AticleBottomVue from '../classShow/AticleBottom.vue'
import api from '../../../../../axios/api';
export default defineComponent({
    setup() {
        let publishedList = ref<any>([]);
        const User: any = sessionStorage;
        function myPublished() {
            api.myPublished({ UserAccount: User.UserAccount }).then(res => {
                const data = res.data;
                publishedList.value = data;
            })
        }
        function deletePublished(ArticleId: number, index: number) {
            api.deletePublished({ ArticleId }).then(res => {
                myPublished();
            })
        }

        onMounted(() => {
            myPublished()
        })

        return {
            publishedList,
            deletePublished
        }
    },
    components: {
        AticleMidVue,
        AticleBottomVue
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#Published {
    width: 64rem;

    .publishedElement {
        width: 100%;
        padding: 0rem 4rem 2rem;
        margin-bottom: 1rem;
        background-color: #fff;
        border-radius: $borRadiusBig;
        box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.07);

        .publishedTop {
            @include disFlex(space-between, flex-start);
            height: 4rem;

            .publishedTopLeft {
                width: 6rem;
                height: 2.5rem;
                padding: 0.5rem 1rem;
                text-align: center;
                line-height: 1.5rem;
                color: $primaryWhite;
                letter-spacing: 0.2rem;
                background-color: $primaryGreen;
                border-radius: 0 0 $borRadiusBig $borRadiusBig;
            }

            .publishedTopRight {
                margin: .75rem 0;
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
</style>