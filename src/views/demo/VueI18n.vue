<template>
    <div>
        <h1>Vue-I18n</h1>
        <button @click.prevent="changeLocate('tw')">換中文</button>
        <button @click.prevent="changeLocate('en')">換英文</button>
        <div>
            <p>語系: {{ i18n.locale.value }}</p>
            {{ $t('Language.title') }}
        </div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'

const i18n = useI18n({useScope: 'global'})

const changeLocate = (lang) => {
    if (i18n.locale.value !== lang) i18n.locale.value = lang
    console.log(lang)
}
</script>