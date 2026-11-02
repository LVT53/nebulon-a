<script setup>
import { RouterLink } from 'vue-router'
import { categories } from '@/data'
import { formatDate } from '@/utils/format'

defineProps({
  article: { type: Object, required: true },
})

function categoryLabel(slug) {
  return categories.find((category) => category.slug === slug)?.label ?? slug
}
</script>

<template>
  <article class="compact-card">
    <p class="eyebrow">{{ categoryLabel(article.category) }}</p>

    <h3 class="title">
      <RouterLink :to="`/article/${article.slug}`">{{ article.title }}</RouterLink>
    </h3>

    <p class="meta">{{ formatDate(article.date) }} · {{ article.readingTime }} min read</p>
  </article>
</template>

<style scoped>
.compact-card {
  padding: var(--space-stack) 0;
  border-bottom: 1px solid var(--colour-hairline);
}

.compact-card:last-child {
  border-bottom: 0;
}

.eyebrow {
  margin: 0 0 var(--space-micro);
}

.title {
  margin-bottom: var(--space-micro);
}

.title a {
  transition: color var(--transition-quick);
}

.title a:hover {
  color: var(--colour-accent);
}

.meta {
  margin: 0;
}
</style>
