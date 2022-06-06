import { createWebHashHistory, createRouter } from "vue-router"

import dashboardRoute from "./conf/dashboardRoute"

const routes = [
    dashboardRoute
]

const router = createRouter({
    // createWebHistory: History api mode
    // createWebHashHistory: Hash mode
    history: createWebHashHistory(),
    routes,
})

export default router
