<template>
    <ul id="navlist">
        <li v-for="items in list">
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
        ]

        return {
            list
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';

#navlist {
    @include disFlex(space-between, center);
    width: 50rem;
    height: 4rem;
    padding-left: 35rem;
    font-size: 18px;
    cursor: pointer;

    li {
        padding-top: 0.5rem;
        color: $primaryWhite;


        span {
            letter-spacing: 0.125rem;
            transition: all 0.3s;
        }

        .border {
            margin-top: 0.3rem;
            width: 0;
            height: 0.2rem;
            background-color: $primaryWhite;
            transition: width 0.3s;
        }

        &:hover span {
            font-weight: 700;
        }

        &:hover .border {
            width: 100%;
        }

    }
}
</style>