<template>
    <div id="Footer">
        <div class="footLeft">
            <h3>联系我们</h3>
            <p>Tel:156 5375 4746 Email:1428390162@qq.com</p>
            <p>未经允许,不可复制,所有解释权归创始团队</p>
            <p>Date:2022/07/28 address:Guizhou Normal College, 115 Wudang District, Guiyang City, Guizhou Province</p>
        </div>
        <div class="footRight">
            <ul v-for="(items, index) in ul">
                <li v-for="(item, ins) in items">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const ul = [['项目', '火热', '平台公告', '更新时间'], ['服务', '客服反馈', '解决方案'], ['关于', '联系我们', '加入团队', '打赏']]
        return { ul }
    }
})
</script>

<style lang="scss" scoped>
@import '../../../../assets/style.scss';

#Footer {
    width: 100%;
    height: 12.5rem;
    margin: 0.625rem 0 0;
    padding: 1.875rem 4.7rem;
    @include disFlex(space-around, center);
    background-color: $primaryGreen;

    .footLeft {
        height: 8.75rem;
        font-size: 1rem;
        color: $primaryWhite;
        max-width: 31rem;

        h3 {
            margin-bottom: 1.25rem;
        }

        p {
            margin: 0.32rem 0;
            font-size: 0.75rem;
        }
    }

    .footRight {
        display: flex;
        justify-content: space-between;
        width: 18.75rem;
        height: 8.75rem;
    }

    .footRight ul {
        font-size: 1rem;
        color: $primaryWhite;
        max-width: 31rem;
        height: 3rem;

        &>li:first-child {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 1rem
        }

        li {
            margin: 0.3125rem 0;
            cursor: pointer;
            font-size: 0.75rem;
        }
    }
}

@media only screen and (max-width: 420px) {
    #Footer {
        padding: 1.875rem 2.7rem;
        height: 25rem;

        .footLeft {
            height: 12rem;
            font-size: 1rem;
            color: $primaryWhite;
            max-width: 31rem;

            h3 {
                margin-bottom: 2rem;
            }

            p {
                margin: 0.5rem 0;
                font-size: 0.75rem;
            }
        }

        .footRight {
            width: 100%;
        }
    }
}
</style>