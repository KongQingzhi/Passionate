<template>
    <div id="User">
        <div class="userHeadImg">
            <img src="../../../assets/UserHeadImg/male.svg" alt="UserHeadImage">
        </div>
        <div class="userInfo">
            <h3>{{ UserName }}</h3>
            <h5>{{ UserAccount }}</h5>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        let UserName = ref<string>('Trevor');
        const UserAccount = ref<string>('123456789@qq.com');

        return {
            UserName,
            UserAccount,

        }
    },
    components: {

    }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';

#User {
    @include disFlex(center, center);
    width: 15rem;
    height: 4rem;
    cursor: pointer;

    .userHeadImg {
        width: 3rem;
        height: 3rem;

        border-radius: 1.5rem;
        overflow: hidden;
    }

    .userInfo {
        width: 8rem;
        height: 3rem;
        margin: 0 0.5rem;

        h3 {
            line-height: 1.8rem;
            font-size: 1.5rem;
            overflow: hidden; //超出的文本隐藏
            text-overflow: ellipsis; //溢出用省略号显示
            white-space: nowrap; //溢出不换行
            color: $primaryDeepBlue;
        }

        h5 {
            font-weight: 400;
            font-size: 0.8rem;
            color: $primaryWhite;
        }
    }
}
</style>