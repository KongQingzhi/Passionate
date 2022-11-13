<template>
    <ul id="NavList">
        <li v-for="(items, index) in list" @click="toBottom(index)">
            <span>{{ items }}</span>
            <div class="border"></div>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const list: string[] = [
            '首页',
            '新花样',
            '关于',
        ];
        function toBottom(index: number): void {
            switch (index) {
                case 0: document.documentElement.scrollTop = 0; break;
                case 1: document.documentElement.scrollTop = 2130; break;
                case 2: document.documentElement.scrollTop = 5000; break;
            }
        }

        return {
            list,
            toBottom
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';

#NavList {
    @include disFlex(space-between, center);
    width: 60rem;
    height: 4rem;
    padding-left: 45rem;
    font-size: 18px;
    cursor: pointer;

    li {
        padding-top: 0.5rem;
        color: $primaryWhite;

        span {
            letter-spacing: 0.125rem;
            transition: all 0.3s;
            font-weight: 400;
        }

        .border {
            margin-top: 0.3rem;
            width: 0;
            height: 0.2rem;
            background-color: $primaryWhite;
            transition: width 0.3s;
        }



        &:hover .border {
            width: 100%;
        }

    }
}
</style>