import { createWebHashHistory, createRouter } from "vue-router"

const routes = [
    {
        path: '/axios',
        name: "Axios",
        component: () => import("../views/demo/Axios.vue"),
    },
    {
        path: '/vue-i18n',
        name: "I18n",
        component: () => import("../views/demo/VueI18n.vue"),
    },
    {
        path: '/vee-validate',
        name: "VeeValidate",
        component: () => import("../views/demo/VeeValidate.vue"),
    },
    {
        path: '/mitt',
        name: "Mitt",
        component: () => import("../views/demo/Mitt.vue"),
    },
    {
        path: "/test2",
        name: "test2",
        component: () => import("../views/test/test2.vue"),
    },
]

const router = createRouter({
    // createWebHistory: History api mode
    // createWebHashHistory: Hash mode
    history: createWebHashHistory(),
    routes,
})

export default router
