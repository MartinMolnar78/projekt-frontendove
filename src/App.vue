<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Hlavicka from './components/header.vue'
import Foot from './components/footer.vue'
</script>

<template>
    <Hlavicka/>
    <router-view/>
    <Foot/>
</template>
