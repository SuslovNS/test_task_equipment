import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/create-type', component: () => import('./components/create/CreateTypeEquipment'),
            name: 'create.type'
        },
        {
            path: '/create-equipment', component: () => import('./components/create/CreateEquipment'),
            name: 'create.equipment'
        },
        {
            path: '/showall-equipment-type', component: () => import('./components/show/ShowAllEquipmentTypes'),
            name: 'show.equipment.type'
        },
        {
            path: '/showall-equipment', component: () => import('./components/show/ShowAllEquipment'),
            name: 'show.equipment'
        },
        {
            path: '/equipment/:id', component: () => import('./components/show/ShowOneEquipment'),
            name: 'show.equipment.one'
        },
        {
            path: '/equipment/:id/edit', component: () => import('./components/edit/EditEquipment'),
            name: 'edit.equipment'
        },
    ]
})
