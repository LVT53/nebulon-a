<script setup>
import AppButton from "@/components/AppButton.vue";
</script>

<template>
  <section class="container">
    <h1>404</h1>
    <h2>This page drifted off.</h2>
    <p class="meta">The link may be old, or the article moved. Nothing is lost — it is all still in the archive.</p>
    <AppButton to="/">Back to home</AppButton>
  </section>
</template>
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: var(--space-section);
  }

  .container h1 {
    color: var(--colour-text-secondary);
  }
</style>