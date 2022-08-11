<template>
    <div>
        {{ moment().format('YYYY-MM-DD HH:mm:ss') }}
    </div>
</template>
<script setup>
import { ref, onMounted } from "@vue/runtime-core";
import io from 'socket.io-client'

const socket = ref()

onMounted(() => {
    connectSocket()
})

const connectSocket = () => {
    socket.value = io.connect('http://192.168.69.191/socket/systeminfo/')

    // socket.value.onopen = function() { //連線(onopen)
    //     console.log("websocket connected!!");
    // }
    socket.value.on('message', (data) => {
        console.log(data)
    })
    // socket.value.onerror = function(err) { //監聽錯誤(onerror)
    //     console.log("error", err);
    // }
}
</script>