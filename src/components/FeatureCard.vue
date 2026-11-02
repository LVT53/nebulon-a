<script setup>
import { RouterLink } from 'vue-router'
import { categories } from '@/data'
import { formatDate } from '@/utils/format'
import AppChip from './AppChip.vue'

defineProps({
  article: { type: Object, required: true },
})

function categoryLabel(slug) {
  return categories.find((category) => category.slug === slug)?.label ?? slug
}
</script>

<template>
  <article class="feature-card">
    <RouterLink :to="`/article/${article.slug}`" tabindex="-1" aria-hidden="true">
      <img class="image" :src="article.image" alt="" loading="lazy" />
    </RouterLink>

    <div class="body">
      <AppChip :label="categoryLabel(article.category)" />

      <h3 class="title">
        <RouterLink :to="`/article/${article.slug}`">{{ article.title }}</RouterLink>
      </h3>

      <p class="excerpt">{{ article.excerpt }}</p>

      <p class="meta">{{ formatDate(article.date) }} · {{ article.readingTime }} min read</p>
    </div>
  </article>
</template>

<style scoped>
.feature-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-control);
}

.image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--radius-image);
  background: var(--colour-surface-hover);
}

.body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-micro);
}

.title {
  margin-top: var(--space-micro);
}

.title a {
  transition: color var(--transition-quick);
}

.title a:hover {
  color: var(--colour-accent);
}

.excerpt {
  margin: 0;
  color: var(--colour-text-secondary);
}

.meta {
  margin: 0;
}
</style>
