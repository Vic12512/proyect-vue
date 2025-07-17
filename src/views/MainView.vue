<template>
    <Header :mensaje="texto"></Header>
    <div class="container">
        <SideBar></SideBar>
        <div class="content">
            <input v-model="texto" type="text">
            {{ texto }}
            <router-view></router-view>
        </div>

    </div>

</template>

<script setup>
    import { RouterView } from 'vue-router';
    import SideBar from '../components/SideBar.vue';
    import Header from '@/components/Header.vue';
    import { ref } from 'vue';

    const texto = ref('')

</script>

<style>

    .container {
        display: flex;
    }

    .content {
        flex: 1;
        padding: 20px;
    }
</style>