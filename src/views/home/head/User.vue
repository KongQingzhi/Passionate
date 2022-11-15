<template>
    <div id="User">
        <div class="userHeadImg">
            <img :src="UserHeadImg" alt="UserHeadImage">
        </div>
        <div class="userInfo">
            <h3>{{ UserName }}</h3>
            <h5>{{ UserAccount }}</h5>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
    setup() {
        const router = useRouter()
        const route = useRoute()
        const UserName = ref<any>(route.query.UserName);
        const UserAccount = ref<any>(route.query.UserAccount);
        const UserHeadImg = ref<any>(route.query.UserHeadImg);
        return {
            UserName,
            UserAccount,
            UserHeadImg
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
      
        overflow: hidden;

        img {
            width: 3rem;
            height: 3rem;
            border-radius: 1.5rem;
            object-fit: cover;
        }
    }

    .userInfo {
        width: 8rem;
        height: 3rem;
        margin: 0 0.5rem;

        h3 {
            line-height: 1.8rem;
            font-size: 1.2rem;
            overflow: hidden; //超出的文本隐藏
            text-overflow: ellipsis; //溢出用省略号显示
            white-space: nowrap; //溢出不换行
            color: $primaryWhite;
        }

        h5 {
            font-weight: 400;
            font-size: 0.8rem;
            color: $primaryWhite;
        }
    }
}
</style>