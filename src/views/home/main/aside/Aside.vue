<template>
    <div id="Aside">
        <div class="circle" @click="changeAsideFlag()" :style="ratote">
            <i class="bi bi-caret-left-fill"></i>
        </div>
        <div class="User">
            <div class="userHeadImg">
                <img src="../../../../assets/UserHeadImg/male.svg" alt="UserHeadImage">
            </div>
            <div class="userInfo">
                <h3>{{ UserName }}</h3>
                <h5>{{ UserAccount }}</h5>
            </div>
        </div>
        <ul>
            <li v-for="(items, index) in optionList" key="index">
                <i :class="items.className"></i>
                <span>{{ items.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        let UserName = ref<string>('Trevor');
        const UserAccount = ref<string>('123456789@qq.com');
        let asideFlag = ref(false);
        const ratote = {
            'transform': asideFlag ? 'rotate(0deg)' : 'rotate(40deg)'
        }


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

        function changeAsideFlag() {
            asideFlag.value = !asideFlag.value
            console.log(asideFlag.value);

        }


        return {
            UserName,
            UserAccount,
            optionList,
            asideFlag,
            changeAsideFlag,
            ratote
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
    width: 12rem;
    width: 5rem;
    // height: 40rem;
    padding: 2rem 0.5rem;
    background-color: $primaryGreen;
    // background-color: $primaryBlue;
    border-radius: $borRadiusBig;


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

        i {
            color: $primaryWhite;
            font-size: 1.4rem;
            line-height: 2rem;
            transition: all 0.5s;

        }
    }

    /**
    我的信息
    我的点赞
    我的收藏
    我的发布
    我的关注
    我的粉丝
    我的私信
    */
    .User {

        // height: 8rem;
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
            display: none;
            margin-top: 1rem;
            width: 11rem;
            height: 3rem;
            text-align: center;


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
            // margin-left: 1rem;
            margin-bottom: 1rem;
            padding: 0 1rem;
            // background-color: #fff;
            border-radius: 1.25rem;

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