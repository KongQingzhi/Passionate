<template>
    <div class="ClassShowcomments">

    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
    setup() {
        const router = useRouter();
        const route = useRoute();
        const article = ref(null)
        onMounted(() => {
            console.log(router, route.query);

        });

        return {}
    }
})
</script>

<style scoped>

</style>