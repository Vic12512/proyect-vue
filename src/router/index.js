import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
        path: '/',
        name: 'home',
        component: HomeView
    },
    */
   {
    path: '/contador',
    name: 'Contador',
    component: () => import('../modules/contador/components/Contador.vue')
   },
   {
    path: '/lista-de-tareas',
    name: 'ListaDeTareas',
    component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue')
   },
   {
    path: '/registrar',
    name: 'Registrar',
    component: () => import('../modules/registro/views/RegistroView.vue')
   },
   {
    path: '/calcular',
    name: 'Calcualr',
    component: () => import('../modules/calcular/Views/CarcularView.vue')
   }
   
  ]
})

export default router