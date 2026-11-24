<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { categories } from '@/data'
import { store } from '@/stores/articles.js'
import FeatureCard from '@/components/FeatureCard.vue'
import AppChip from '@/components/AppChip.vue'

const route = useRoute()

const category = computed(() => categories.find((c) => c.slug === route.params.slug))

const items = computed(() =>
    store.items
        .filter((article) => article.category === route.params.slug)
        .sort((a, b) => {
          if (a.step && b.step) return a.step - b.step
          if (a.step) return -1
          if (b.step) return 1
          return b.date.localeCompare(a.date)
        }),
)
</script>

<template>
  <div v-if="category" class="container section">
    <p class="eyebrow">Category</p>
    <h1>{{ category.label }}</h1>
    <p class="lead">{{ category.description }}</p>

    <div class="chips">
      <AppChip
          v-for="c in categories"
          :key="c.id"
          :label="c.label"
          :active="c.slug === category.slug"
          :to="`/category/${c.slug}`"
      />
    </div>

    <div v-if="items.length" class="grid">
      <FeatureCard v-for="article in items" :key="article.id" :article="article" />
    </div>
    <p v-else class="meta">Nothing here yet.</p>
  </div>

  <div v-else class="container section">
    <h1>Category not found</h1>
    <p class="meta">No category matches "{{ route.params.slug }}".</p>
    <RouterLink to="/" class="meta">Back to home</RouterLink>
  </div>
</template>

<style scoped>
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-micro);
  margin-block: var(--space-stack) var(--space-gutter);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-gutter);
}
</style>