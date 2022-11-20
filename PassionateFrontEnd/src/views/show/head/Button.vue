<template>
    <button id="Button" @click="toUser">
        <div class="svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="#34D0B2"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z">
                </path>
            </svg>
        </div>
        <span>登入</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
    setup() {
        const router = useRouter()
        const route = useRoute()
        function toUser() {
            router.push({
                name: 'User',
                query: {
                    ...route.query,
                },
            })
        }
        return {
            toUser
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';

#Button {
    background-color: $primaryWhite;
    font-family: inherit;
    font-size: 1rem;
    color: $primaryGreen;
    padding: 0.5em 1em 0.5em 0.9em;
    display: flex;
    align-items: center;
    overflow: hidden;
    transition: all 0.2s;

    span {
        display: block;
        margin-left: 0.2em;
        transition: all 0.3s ease-in-out;
    }

    &:hover .svg-wrapper {
        animation: fly 0.6s ease-in-out infinite alternate;
    }

    svg {
        display: block;
        transform-origin: center center;
        transition: transform 0.3s ease-in-out;
    }

    &:hover svg {
        transform: translateX(1.2em) rotate(45deg) scale(1.1);
    }

    &:hover .svg-wrapper {
        animation: fly 0.6s ease-in-out infinite alternate;
    }

    &:hover span {
        transform: translateX(5em);
    }

    &:active {
        transform: scale(0.95);
    }

    @keyframes fly {
        from {
            transform: translateY(0.1em);
        }

        to {
            transform: translateY(-0.1em);
        }
    }
}

@media only screen and (max-width: 420px) {
    #Button {
        padding: 0.5em 0.5em 0.5em 0.5em;
    }
}
</style>