export default {
    path: '/',
    name: 'InternalLayout',
    component: () => import('../../views/InternalLayout.vue'),
    children: [
        {
            path: '',
            name: 'Dashboard',
            component: () => import('../../components/dashboard/Dashboard.vue')
        }
    ]
}