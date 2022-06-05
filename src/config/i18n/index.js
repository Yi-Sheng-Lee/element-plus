import { createI18n } from "vue-i18n"

import en from "./lang/en_US.json"
import tw from "./lang/zh_TW.json"
import cn from "./lang/zh_CN.json"

export const i18n = createI18n({
    legacy: false,
    globalInjection: true, // 全域注入，讓你在 <template> 可以使用 $t
    locale: "tw", // 初始的語言，之後可以實作把他按照情境替換成en
    messages: {
        tw,
        en,
        cn,
    },
})
