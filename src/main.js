import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { pinia } from './store'
import { i18n } from './config/i18n'

// axios
import setupInterceptors from './config/axios/setupInterceptors.js'

// vee-validate
import './config/validate'
import { Form, Field, ErrorMessage } from 'vee-validate'
import moment from 'moment'

setupInterceptors()

// createApp
const app = createApp(App).use(pinia)

// 建構 prototype
app.config.globalProperties.moment = moment

app.config.devtools = true
app.config.debug = true
app.config.productionTip = true

app.use(router)
    .use(i18n)
    .component('Form', Form)
    .component('Field', Field)
    .component('ErrorMessage', ErrorMessage)
    .mount("#app")
