<template>
    <div>
        me.vue
        <button @click.prevent="emitBus">測試Bus</button>
    </div>
</template>
<script setup>
// import { reactive, inject } from "vue"
import bus from '../../config/mitt/index.js'

// const state = reactive({
//     mename: inject("name"),
// })

const emitBus = () => {
    console.log('work')
    bus.emit('handleGetBusData', '我從me.vue傳東西到Mitt.vue')
}
</script>
