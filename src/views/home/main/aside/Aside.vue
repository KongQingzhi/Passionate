<template>
    <div id="Aside" :style="{ width: asideFlag ? '12rem' : '5rem' }">
        <div class="circle" @click="asideFlag = !asideFlag"
            :style="{ transform: asideFlag ? 'rotate(0deg)' : 'rotate(180deg)' }">
            <i class="bi bi-caret-left-fill"></i>
        </div>
        <div class="User">
            <div class="userHeadImg">
                <img src="../../../../assets/UserHeadImg/male.svg" alt="UserHeadImage">
            </div>
            <div class="userInfo" :style="{ height: asideFlag ? '3rem' : '0rem' }">
                <h3>{{ UserName }}</h3>
                <h5>{{ UserAccount }}</h5>
            </div>
        </div>
        <ul>
            <li v-for="(items, index) in optionList" key="index" :style="{ marginLeft: asideFlag ? '1rem' : '' }">
                <i :class="items.className"></i>
                <span>{{ items.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
    setup() {
        let UserName = ref<string>('Trevor');
        const UserAccount = ref<string>('123456789@qq.com');
        let asideFlag = ref(false);

        interface IOption {
            className: string,
            name: string
        }
        const optionList: IOption[] = [
            {
                className: 'bi bi-send-plus-fill',
                name: '创作'
            },
            {
                className: 'bi bi-hourglass-split',
                // className: 'bi bi-send-check-fill',
                name: '已发布'
            },
            {
                className: 'bi bi-info-circle-fill',
                name: '信息'
            },
            {
                className: 'bi bi-clipboard2-check-fill',
                name: '我的'
            },
            {
                className: 'bi bi-people-fill',
                name: '粉丝'
            },
            {
                className: 'bi bi-search-heart-fill',
                name: '关注'
            },
            {
                className: 'bi bi-star-fill',
                name: '收藏'
            }, {
                className: 'bi bi-heart-fill',
                name: '喜欢'
            }, {
                className: 'bi bi-chat-dots-fill',
                name: '消息'
            }
        ];

        return {
            UserName,
            UserAccount,
            optionList,
            asideFlag,

        }
    },
    components: {

    }
})
</script>

<style lang="scss" scoped>
@import '../../../../assets/style.scss';
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");


#Aside {
    position: relative;
    padding: 2rem 0.5rem;
    background-color: $primaryGreen;
    border-radius: $borRadiusBig;
    transition: all 0.3s;

    .circle {
        position: absolute;
        top: 1rem;
        right: -1rem;
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        background-color: $primaryGreen;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s;

        i {
            color: $primaryWhite;
            font-size: 1.4rem;
            line-height: 2rem;
            transition: all 0.5s;

        }
    }

    .User {
        margin-bottom: 1rem;

        .userHeadImg {
            width: 100%;
            height: 3rem;
            text-align: center;
            overflow: hidden;

            img {
                width: 3rem;
                height: 3rem;
                border-radius: 1.5rem;
            }
        }

        .userInfo {
            margin-top: 1rem;
            width: 11rem;
            height: 0rem;
            text-align: center;
            transition: all 0.3s;
            overflow: hidden;

            h3 {
                line-height: 2.2rem;
                font-size: 1.5rem;
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

    ul {
        li {
            width: 12rem;
            height: 2.5rem;
            margin-bottom: 1rem;
            padding: 0 1rem;
            border-radius: 1.25rem;
            cursor: pointer;
            transition: all 0.3s;

            i {
                display: inline-block;
                width: 2rem;
                height: 2.5rem;
                color: $primaryWhite;
                font-size: 1.5rem;
                cursor: pointer;
                line-height: 2.5rem;
                // color: $primaryBlue;

                text-align: center;

                vertical-align: center;
            }

            span {
                margin: 0 2em;
                vertical-align: center;
                color: $primaryWhite;
            }
        }
    }
}
</style>