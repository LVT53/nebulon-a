<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <h1>Article: {{ route.params.slug }}</h1>
</template>

<style scoped>

</style>