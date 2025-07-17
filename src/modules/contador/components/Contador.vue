<template>
  <p>{{ contador }}</p>
  <button v-on:click="Incrementar">Incrementar</button>
  <button v-on:click="Decrementar">Decrementar</button>
</template>

<script setup>

  import {ref} from 'vue';
  const contador = ref(0);
  const Incrementar = () => {
    contador.value++;
  }
  const Decrementar = () => {
    contador.value--;
  }
  

</script>

<style scoped>
p{
  color:blue;
}
</style>
