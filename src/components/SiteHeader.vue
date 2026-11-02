<script setup>
import { RouterLink } from 'vue-router'
import { categories } from '@/data'
</script>

<template>
  <header class="site-header">
    <div class="container header-row">
      <RouterLink to="/" class="wordmark">NEBULON-A</RouterLink>

      <nav class="nav" aria-label="Categories">
        <RouterLink
          v-for="category in categories"
          :key="category.id"
          :to="`/category/${category.slug}`"
          class="nav-link"
        >
          {{ category.label }}
        </RouterLink>
      </nav>

      <div class="actions">
        <RouterLink to="/paths" class="nav-link">Learning Paths</RouterLink>
        <RouterLink to="/search" class="nav-link">Search</RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  border-bottom: 1px solid var(--colour-hairline);
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-stack);
  height: 80px;
}

.wordmark {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.nav {
  display: flex;
  gap: var(--space-stack);
  margin-left: auto;
}

.actions {
  display: flex;
  gap: var(--space-stack);
}

.nav-link {
  font-size: var(--type-meta);
  line-height: var(--type-meta-line);
  color: var(--colour-text-secondary);
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition:
    color var(--transition-quick),
    border-color var(--transition-quick);
}

.nav-link:hover {
  color: var(--colour-text-primary);
  border-bottom-color: var(--colour-hairline);
}

.nav-link.router-link-active {
  color: var(--colour-text-primary);
  border-bottom-color: var(--colour-accent);
}

@media (max-width: 899px) {
  .nav {
    display: none;
  }
}
</style>
