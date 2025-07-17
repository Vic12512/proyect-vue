<template>

<div class="header">
    {{ mensajeResivido }}<Weather></Weather>
</div>

</template>

<script setup>

    import Weather from '@/components/Weather.vue';
    import { defineProps, ref, watch } from 'vue';
    const props = defineProps(['mensaje']);
    const mensajeResivido = ref(props.mensaje);

    watch(() => props.mensaje, (newValue) => {
        mensajeResivido.value = newValue;
    })

</script>

<style scoped>

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        /* position: fixed; */
        top: 0;
        right: 0;
        left: 0;
        background-color: #333;
        color: white;
    }

    h3{
        margin: 0;
    }

</style>