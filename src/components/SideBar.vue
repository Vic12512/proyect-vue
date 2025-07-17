<template>

    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ registrarStore.nombre }}</h3>
        <h3>Email: {{ registrarStore.email }}</h3>
        <ul>
            <li>
                <RouterLink to="/contador">Contador</RouterLink>
            </li>
            <li>
                <RouterLink to="/lista-de-tareas">Lista de tareas</RouterLink>
            </li>
            <li>
                <RouterLink to="/registrar">Registro</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>

    import {ref, watch} from 'vue';
    import { useRegistrarStore } from '@/modules/registro/stores/registroStore';
    const registrarStore = useRegistrarStore();
    
    /*utilizamos wach para escuchar los cambios realizados en el store(esta es solo una ejemplificacion, dado aque las variblaes ya eran reactivas)
    const nombre = ref(registrarStore.nombre.value);
    const email = ref(registrarStore.email.value);

    watch(() => registrarStore.nombre, (newValue) =>{
        nombre.value = newValue;
    })

    watch(() => registrarStore.email, (newValue) =>{
        email.value = newValue;
    }) */

</script>

<style>
    .sidebar {
        width: 200px;
        background-color: #f0f0f0;
        padding: 20px;
    }

</style>