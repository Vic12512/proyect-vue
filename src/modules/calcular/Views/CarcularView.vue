<template>

    <h3>Propiedades computadas</h3>
    <input type="text" v-model="valor">
    {{ valorCalculado }}
    <ResultadoSeccion v-if="mostrarElemento" :resultado="valorCalculado"></ResultadoSeccion>
    <div v-else-if="isNaN(valor)">Debe ser un numero</div>
    <div v-else>aqui no nada</div>

</template>

<script setup>

    import { ref,computed } from 'vue';
    import ResultadoSeccion from '../components/ResultadoSeccion.vue';
    
    const valor = ref('');
    const valorCalculado = computed(() => {
        return valor.value *3;
    });

    const mostrarElemento = computed(() => {
        return valor.value > 10;
    })

</script>

<style scoped>


</style>