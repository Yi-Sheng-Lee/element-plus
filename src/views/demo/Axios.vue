<template>
    <div>
        <h1>Axios</h1>
        <button @click.prevent="login">按我測試</button>
        <div style="width: 480px;">
            {{ data.token.access_token }}
        </div>
    </div>
</template>
<script setup>
import { reactive } from "vue";
import { ACCESS } from '../../config/repository/accessRepo.js'

const data = reactive({
    token: ''
})

const login = () => {
    const payload = {
        username: 'Admin',
        password: 'admin123!!'
    }
    ACCESS.login(payload).then(
        res => {
            data.token = res
            console.log(res)
        },
        err => {
            console.error(err)
        }
    )
}
</script>