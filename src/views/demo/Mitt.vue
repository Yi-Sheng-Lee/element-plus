<template>
    <div>
        <h1>Mitt</h1>
        Bus Data: {{ data.busData }}
        <Me />
    </div>
</template>
<script setup>
import { onBeforeMount, reactive } from 'vue'
import Me from '../test/me.vue'
import bus from '../../config/mitt/index.js'

const data = reactive({
    busData: ''
})

const handleGetBusData = (msg) => {
    data.busData = msg
}

const setBus = () => {
    bus.on('handleGetBusData', (msg) => {
        handleGetBusData(msg)
    })
}

onBeforeMount(() => {
    setBus()
})
</script>