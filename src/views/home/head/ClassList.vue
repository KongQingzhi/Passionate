<template>
    <ul id="NavList">
        <li v-for="(items, index) in list" @click="">
            <span>{{ items }}</span>
            <div class="border"></div>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const list: string[] = ['推荐', '关注', '朋友', '搞笑', '新鲜', '生活'];
       
        return {
            list,

        }
    }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';

#NavList {
    @include disFlex(space-between, center);
    width: 50rem;
    height: 4rem;
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
            background-color: $primaryBlue;
            transition: width 0.3s;
        }


        &:hover .border {
            width: 100%;
        }

    }
}
</style>