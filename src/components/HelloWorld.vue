<template>
    <h1>{{ msg }}</h1>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Documentation
        </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>
    <p>
        <router-link :to="{ path: '/axios' }">Axios</router-link> |
        <router-link :to="{ path: '/vue-i18n' }">Vue-i18n</router-link> |
        <router-link :to="{ path: '/vee-validate' }">Vee-Validate</router-link> |
        <router-link :to="{ path: '/mitt' }">Mitt</router-link>
    </p>
</template>

<script setup>
import {
    computed,
    defineProps,
    reactive,
    watch,
    onMounted,
    onBeforeMount,
    onBeforeUnmount,
} from "vue"

// data & computed
const state = reactive({
    count: 0,
    tmpData: {},
    inputValue: "",
    concat: computed(() => {
        return `counter ${state.count + 1}`
    }),
    getData: null,
})

// props
defineProps({
    msg: {
        type: String,
        default: "",
    },
})

// watch

watch(
    () => state.count,
    (count, pre) => {
        console.log(count, pre)
    }
)
watch(
    () => state.tmpData,
    (newVal) => {
        state.getData = newVal
    },
    { deep: true }
)

onBeforeMount(() => {
    console.log("created")
    
})

onMounted(() => {
    console.log("mounted")
})

onBeforeUnmount(() => {
    console.log("beforeDestroy")
})
</script>

<style scoped>
a {
    color: #42b983;
}
</style>
